# Implementation Plan — AI Article Generator

## Objective

Trigger via **API request** → Research trending topics → Generate **5 articles (ID + EN)** → Save as **DRAFT** in Supabase.

Tidak ada review, tidak ada approval, tidak ada kolom baru di database.

---

## Tech Stack (Gratis)

| Komponen | Tools | Biaya |
|----------|-------|-------|
| AI Research | Gemini 2.5 Flash + Tavily Search | Gratis |
| AI Writing | Gemini 2.5 Flash | Gratis |
| Database | Supabase (existing tabel `blogs`) | Gratis |
| API Route | Next.js API Routes | Gratis |

---

## Biaya Aktual

| Tools | Free Quota |
|-------|-----------|
| Gemini 2.5 Flash | Input gratis (free tier) |
| Tavily Search | 1,000 searches/bulan |
| **Total** | **Rp 0** |

---

## API Endpoint

### `POST /api/ai/generate-articles`

**Auth**: Admin only

#### Request

```json
{
  "count": 5
}
```

#### Response (200)

```json
{
  "success": true,
  "count": 5,
  "articles": [
    {
      "id": "uuid",
      "title": "Judul Bahasa Indonesia",
      "title_en": "English Title",
      "slug": "slug-indonesia",
      "slug_en": "english-slug",
      "content": "<p>Konten Bahasa Indonesia...</p>",
      "content_en": "<p>English content...</p>",
      "status": "DRAFT"
    }
  ]
}
```

---

## File yang Dibuat

```
src/app/api/ai/generate-articles/route.js
src/lib/tavily.js
src/lib/prompts/researchPrompt.js
src/lib/prompts/articlePrompt.js
```

File `src/lib/blogAi.js` perlu ditambah fungsi `generateAllArticles()`.

---

## File yang Diubah

| File | Perubahan |
|------|-----------|
| `src/lib/blogAi.js` | Tambah `generateAllArticles()` |
| Supabase `blogs` table | Tidak ada perubahan kolom |

---

## Step-by-Step

### Step 1: Tavily API Key

Daftar di https://app.tavily.com → dapat free API key.

Tambahkan ke `.env.local`:
```env
TAVILY_API_KEY=tvly-xxxxx
```

### Step 2: Research Prompt

`src/lib/prompts/researchPrompt.js`

```js
export const RESEARCH_PROMPT = `You are a content strategist for an Indonesian education consulting website (ForTrust).

Research current trending topics about education, study abroad, scholarships, and studying overseas for Indonesian students.

Return exactly 5 topics as a JSON array:
[
  {
    "title": "Judul dalam Bahasa Indonesia",
    "title_en": "Title in English",
    "topic_notes": "Why this topic is relevant right now for Indonesian students",
    "keywords": ["keyword1", "keyword2"]
  }
]

Only return valid JSON. No markdown, no explanation.`;
```

### Step 3: Article Prompt

`src/lib/prompts/articlePrompt.js`

```js
export const ARTICLE_PROMPT = (topic) => `Write a complete bilingual blog article for an Indonesian education consulting website.

Topic: ${topic.title}
Context: ${topic.topic_notes}
Keywords: ${topic.keywords?.join(', ')}

Rules:
- Indonesian version: fully in Bahasa Indonesia
- English version: fully in English
- HTML format: <h2>, <h3>, <p>, <ul>, <ol>
- 800-1200 words per language
- No lorem ipsum, no placeholder
- Include a call-to-action at the end
- SEO-friendly but natural

Return as JSON:
{
  "title": "Judul Bahasa Indonesia",
  "title_en": "English Title",
  "slug": "url-safe-slug-id",
  "slug_en": "url-safe-slug-en",
  "content": "<p>...</p>",
  "content_en": "<p>...</p>"
}

Only return valid JSON.`;
```

### Step 4: Tavily Wrapper

`src/lib/tavily.js`

```js
export async function searchWeb(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return [];

  const res = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: 'basic',
      max_results: 3,
    }),
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.results || [];
}
```

### Step 5: Extend blogAi.js

Tambah di `src/lib/blogAi.js`:

```js
export async function generateAllArticles(count = 5) {
  // 1. Research topics
  const researchResult = await model.generateContent(RESEARCH_PROMPT);
  const researchText = researchResult.response.text()
    .replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  const topics = JSON.parse(researchText);

  // 2. Generate each article
  const articles = [];
  for (const topic of topics.slice(0, count)) {
    const articleResult = await model.generateContent(ARTICLE_PROMPT(topic));
    const articleText = articleResult.response.text()
      .replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const article = JSON.parse(articleText);

    articles.push({
      ...article,
      topic_notes: topic.topic_notes,
      status: 'DRAFT',
    });
  }

  return articles;
}
```

### Step 6: API Route

`src/app/api/ai/generate-articles/route.js`

```js
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { requireAdmin } from '@/lib/blogAi';
import { generateAllArticles } from '@/lib/blogAi';

export async function POST(request) {
  const admin = await requireAdmin(request);
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const count = Math.min(parseInt(body.count) || 5, 5);

  try {
    const articles = await generateAllArticles(count);
    const saved = [];

    for (const article of articles) {
      const { data, error } = await supabase
        .from('blogs')
        .insert({
          title: article.title,
          title_en: article.title_en,
          slug: article.slug,
          slug_en: article.slug_en,
          content: article.content,
          content_en: article.content_en,
          topic_notes: article.topic_notes,
          status: 'DRAFT',
        })
        .select('id, title, title_en, slug, slug_en, status, created_at')
        .single();

      if (!error && data) saved.push(data);
    }

    return NextResponse.json({ success: true, count: saved.length, articles: saved });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
```

---

## Testing

```bash
curl -X POST http://localhost:3000/api/ai/generate-articles \
  -H "Content-Type: application/json" \
  -H "Cookie: <admin-cookie>"
```

---

## Error Handling

| Problem | Solusi |
|---------|--------|
| Tavily quota habis | Tavily free 1,000 req/mo (cukup); atau hapus Tavily, langsung Gemini saja |
| Gemini rate limit | Retry 1x, jika gagal return error |
| Gemini parse error | Return partial results jika ada yang berhasil |
