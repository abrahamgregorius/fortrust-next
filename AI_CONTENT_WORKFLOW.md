# AI Content Workflow — Fortrust Blog System

## Objective

Implement 4 features from `todo.md`:
- Hide navbar EN/ID on blog routes
- Add in-content language toggle for blog pages
- Restrict PopupBanner to home pages only
- Add latest blog showcase on home pages

---

## Feature Status

### ✅ Completed

| # | Feature | Files | Commit |
|---|---------|-------|--------|
| 1 | Hide EN/ID switcher on blog routes (navbar) | `Navbar.jsx` | `8148732` (joshuamoshee) |
| 2b | Language toggle on blog listing pages | `blog/page.jsx` (×2 locale) | `ae2fa1a` |
| 2c | Language toggle on blog post content | `BlogPostContent.jsx` | `ae2fa1a` |
| 2d | `.lang-toggle-btn` CSS (underlined text, no hover) | `globals.css` (×2) | `ae2fa1a` |
| 3 | PopupBanner moved from layouts to home pages only | `layout.jsx` (×2), `page.jsx` (×2) | `ae2fa1a` |
| 4 | Latest blog showcase section on home pages | `page.jsx` (×2), `globals.css` (×2) | `ae2fa1a` |
| 5 | Translation model audit | `route.js`, `blogAi.js` | `bed2efd` |
| 6 | Blog status dropdown (DRAFT/PUBLISHED/ARCHIVED) | `blogs/create`, `blogs/edit`, `blogs/page` | `bf0c8b7` |
| 7 | Public pages only show PUBLISHED blogs | `page.jsx`, `blog/page.jsx` (×2), `BlogPostContent.jsx` | `1a578ab` |
| 8 | Admin blog list status filter tabs | `blogs/page.jsx` | `0c79483` |

---

## Decisions Made

- Navbar `switchLocale()` reads `window.__blogSlugPair` — exists only on blog post pages; broken on blog listing pages
- Blog post locale switch: `/blog/<enSlug>` ↔ `/id/blog/<idSlug>` (different slugs per language)
- Blog listing switch: `/blog` ↔ `/id/blog` (simple direct links)
- PopupBanner removed from `layout.jsx` and placed directly in home page components
- Language toggle uses `--accent` for both light/dark mode compatibility
- Explicit hover rule added with identical styles to prevent browser underline/color defaults
- Dark mode for latest-blogs uses `!important` because hardcoded `#fff` rule at ~line 3694 overrides dark mode section at ~2320
- Body gets `overflow-x: hidden` as global safety net for horizontal scroll
- CSS `--accent` is navy in light mode (`#4b5a8a`), light navy in dark mode; `--brand-700` is navy (`#2a3a6a`) in light, lime green (`#b8d434`) in dark
- Blog routes: EN uses `slug_en` field, ID uses `slug` field — different slugs for same article
- Navbar switcher disabled on `/blog` and `/id/blog`; blog pages use their own toggle
- Dark mode uses `prefers-color-scheme` media query — tied to OS/browser settings
- Gemini API key: `GEMINI_API_KEY` in `.env` (server-only)
- TranslateButton routes through Gemini instead of LibreTranslate (`/api/translate/route.js`)

---

## Work State

| | |
|--|--|
| **Completed** | 8 features committed and pushed to `origin/main` |
| **Active** | None |
| **Blocked** | None |
| **Next Move** | 1. Test "Translate to English" button on `/admin/blogs/create`<br>2. Verify TranslateButton → `/api/translate` → Gemini end-to-end |

---

## Relevant Files

| File | Fungsi |
|------|--------|
| `src/app/(main)/page.jsx` | Latest blog section + PopupBanner (EN home) |
| `src/app/id/page.jsx` | Latest blog section + PopupBanner (ID home) |
| `src/app/(main)/layout.jsx` | PopupBanner removed |
| `src/app/id/layout.jsx` | PopupBanner removed |
| `src/components/Navbar.jsx` | EN/ID switcher hidden on blog routes |
| `src/components/BlogPostContent.jsx` | Language toggle link + latest blogs (all blog posts) |
| `src/app/(main)/blog/page.jsx` | Language toggle for EN blog listing |
| `src/app/id/blog/page.jsx` | Language toggle for ID blog listing |
| `src/app/(main)/globals.css` | `.lang-toggle-btn`, `.latest-blogs`, dark mode overrides |
| `src/app/id/globals.css` | Same as above |
| `src/app/api/translate/route.js` | Gemini-powered translation (ID→EN) |
| `src/lib/blogAi.js` | `cleanBlogHtml`, `parseModelJson`, `askGeminiWithSearch`, `requireAdmin`; Gemini model = `gemini-2.5-flash` |
| `src/components/TranslateButton.jsx` | Calls `/api/translate` (unchanged) |
| `src/app/(admin)/admin/blogs/page.jsx` | Blog list with status filter tabs |
| `src/app/(admin)/admin/blogs/create/page.jsx` | Create blog with status dropdown |
| `src/app/(admin)/admin/blogs/edit/[id]/page.jsx` | Edit blog with status dropdown |

---

## Important Context

- AI Blog Writer feature (commit `8148732` by joshuamoshee) creates articles via Gemini + Google Search
- TranslateButton does single-field translation only (no search)
- All commits pushed to `origin/main` (8 commits total)

---

---

# AI Content Workflow — Blueprint

## Tujuan

- **AI 1**: Research topik yang paling sering ditanyakan di web
- **AI 2**: Teliti dan tulis artikel berdasarkan topik tersebut
- Target produksi: **5 artikel/hari**
- Proses: submit ke kurator untuk review dan approve/reject
- **AI 3**: Setelah approve, generate gambar untuk artikel
- **Publish**: artikel yang sudah siap gambar dipublikasikan

---

## Arsitektur Tingkat Tinggi

```
AI 1 (Topic Research) → [CLIENT APPROVES] → AI 2 (Write Article) → [CLIENT APPROVES] → AI 3 (Generate Image) → [CLIENT PUBLISHES]
```

### Komponen Sistem

| Komponen | Teknologi | Status |
|----------|-----------|--------|
| AI 1 — Topic Research | Gemini 2.5 Flash + Google Search (grounding) | ✅ Sudah ada `GEMINI_API_KEY` |
| AI 2 — Article Writing | Gemini 2.5 Flash | ✅ Sudah ada (bagian dari `blogAi.js`) |
| AI 3 — Image Generation | Ideogram 4.0 API | ❌ Perlu subscribe |
| Workflow Orchestration | Supabase Edge Functions + manual trigger | ✅ Sudah ada Pro plan |
| Penyimpanan Gambar | Supabase Storage | ✅ Sudah ada |

---

## Model Data (Tabel `blogs` — perlu tambah kolom)

| Column | Type | Purpose |
|--------|------|---------|
| `workflow_status` | TEXT | Status workflow article |
| `topic_proposed_at` | TIMESTAMP | Kapan AI 1 propose topic |
| `topic_notes` | TEXT | Catatan dari AI 1 research (kenapa topic ini penting, source) |
| `image_prompt` | TEXT | Prompt yang dipakai AI 3 untuk generate gambar |
| `image_url` | TEXT | URL gambar hasil generate |
| `curator_notes` | TEXT | Catatan reviewer (approve/reject reason) |
| `curated_by` | TEXT | Siapa yang approve/reject |
| `curated_at` | TIMESTAMP | Kapan di-approve/reject |

---

## Workflow Status Enum

```
PROPOSED         → Topic udah di-research AI 1, menunggu kurasi
DRAFT_APPROVED   → Client approve topic, AI 2 boleh mulai nulis
ARTICLE_DRAFTED  → Article udah selesai ditulis AI 2, menunggu kurasi
APPROVED         → Client approve article, AI 3 generate gambar
IMAGE_GENERATED  → Gambar udah siap
PUBLISHED        → Sudah live di website
REJECTED         → Ditolak di salah satu stage
```

---

## AI 1 — Topic Research Agent

### Trigger
Dijalankan terjadwal (cron 1x sehari) atau on-demand via button

### Output
5 draft blog post dengan:
- `title` + `title_en`
- `topic_notes` (research context — data dari website FAQ, search queries, dll)
- `slug` + `slug_en`
- `workflow_status = 'PROPOSED'`
- `status = 'DRAFT'` (tidak visible public)

### Admin UI
Halaman **"Topic Curation"** — list 5 proposal, tombol **Approve** (→ `DRAFT_APPROVED`) atau **Reject** (→ `REJECTED` + `curator_notes`)

---

## AI 2 — Article Writing Agent

### Trigger
Otomatis jalan setelah topic di-approve (webhook/trigger), atau button "Generate Article"

### Flow
1. Baca article yang berstatus `DRAFT_APPROVED`
2. Research lengkap + tulis article (reuse `AiBlogWriter` yang sudah ada)
3. Isi `content`, `content_en`, dll
4. Set `workflow_status = 'ARTICLE_DRAFTED'`
5. Simpan sebagai `DRAFT`

### Admin UI
Halaman **"Article Review"** — list article hasil draft, bisa **Approve** / **Reject**. Kalau reject, bisa trigger AI 2 untuk rewrite atau manual edit dulu.

---

## AI 3 — Image Generation Agent

### Trigger
Jalan setelah article di-approve (`workflow_status = 'APPROVED'`)

### Flow
1. Baca article yang di-approved
2. Generate image prompt + generate gambar (Ideogram API)
3. Simpan ke Supabase Storage
4. Set `workflow_status = 'IMAGE_GENERATED'`, `image_url`, `image_prompt`

### Admin UI
Tombol **"Regenerate Image"** untuk override kalau hasilnya kurang bagus.

---

## Publish

### Trigger
Manual by client — tombol **Publish** di admin

### Flow
1. Set `workflow_status = 'PUBLISHED'`
2. Set `status = 'PUBLISHED'`
3. Article muncul di website

---

## Admin Pages yang Dibutuhkan

| Route | Fungsi |
|-------|--------|
| `/admin/blogs/topics` | Curation AI 1 proposals (approve/reject topics) |
| `/admin/blogs/drafts` | Review article dari AI 2 (approve/reject articles) |
| `/admin/blogs/approved` | Review image dari AI 3 + publish button |
| `/admin/blogs/published` | List published articles |
| `/admin/blogs` (existing) | All Blogs dengan filter `workflow_status` |

---

## Estimasi Biaya Bulanan

### AI Services

| Komponen | Teknologi | Estimasi Biaya/Bulan |
|----------|-----------|----------------------|
| AI 1 — Topic Research | Gemini 2.5 Flash + Google Search | ~$2.50 |
| AI 2 — Article Writing | Gemini 2.5 Flash | ~$4.60 |
| AI 3 — Image Generation | Ideogram 4.0 ($0.10/gambar × 150 gambar) | ~$15.00 |
| **Total AI** | | **~$22–25/bulan** |

### Breakdown Detail

**AI 1 (5 topik/hari × 30 hari = 150 topik):**
- Input tokens: ~500K/mo × $0.075/M = ~$0.04
- Output tokens: ~1M/mo × $0.30/M = ~$0.30
- Google Search: 150 × $0.014 = ~$2.10
- **Subtotal: ~$2.50/bulan**

**AI 2 (5 artikel/hari × ~1,500 kata/artikel):**
- Input: ~1.5M tokens × $0.075/M = ~$0.11
- Output: ~15M tokens × $0.30/M = ~$4.50
- **Subtotal: ~$4.60/bulan**

**AI 3 (5 gambar/hari × 30 hari = 150 gambar):**
- 150 × $0.10 = ~$15.00/bulan

### Infrastructure (yang sudah ada)

| Servis | Plan | Biaya |
|--------|------|-------|
| Supabase | Pro | $25/bulan |
| Gemini API | Pay-as-you-go | ~$10–15/bulan (termasuk AI blog writer existing) |
| Vercel | Free/Pro | $0–20/bulan |

---

## Rincian Harga per Komponen

### AI Text — Gemini 2.5 Flash (Recommended)

| | Free Tier | Paid Tier |
|--|-----------|-----------|
| Input | $0.075/M tokens | $0.075/M tokens |
| Output | $0.30/M tokens | $0.30/M tokens |
| Google Search (grounding) | 5,000 req/bulan (free) | $0.014/search |

✅ **Sudah ada `GEMINI_API_KEY`** — bisa langsung reuse

---

### AI Image — Ideogram 4.0 (Recommended)

| Tier | Price per Output |
|------|-----------------|
| Quality | **$0.10/gambar** |

✅ Paling murah + reliable API di antara opsi-opsi lain

**Alternatif:**

| Opsi | Harga | Notes |
|------|-------|-------|
| FLUX (via Replicate) | $0.02–0.03/gambar | Setup lebih ribet |
| GPT Image 2 (OpenAI) | $0.009–0.133/gambar | Butuh OpenAI API key |
| DALL-E 3 | Deprecated | ❌ Tidak tersedia di API lagi |

---

### Workflow / Trigger — Supabase Edge Functions

| Plan | Quota | Overage |
|------|-------|---------|
| Free | 500,000 invocations/bulan | — |
| Pro | 2,000,000 invocations/bulan | $2 per 1 juta |

✅ Sudah termasuk di Supabase Pro plan yang sudah ada

---

## Komponen Code yang Perlu Dibuat

### Backend (API Routes)

| File | Fungsi |
|------|--------|
| `src/app/api/ai/topic-research/route.js` | AI 1 — generate 5 topik dari Google Search data |
| `src/app/api/ai/write-article/route.js` | AI 2 — tulis artikel dari topic yang di-approve |
| `src/app/api/ai/generate-image/route.js` | AI 3 — generate gambar dari article content |

### Frontend / Admin UI

| File | Fungsi |
|------|--------|
| `src/app/(admin)/admin/blogs/topics/page.jsx` | Halaman kurasi topik (approve/reject 5 topik) |
| `src/app/(admin)/admin/blogs/drafts/page.jsx` | Halaman review artikel hasil AI 2 |
| `src/app/(admin)/admin/blogs/approved/page.jsx` | Halaman review gambar + tombol Publish |
| `src/app/(admin)/admin/blogs/published/page.jsx` | Halaman list yang sudah publish |

### Database Migration (Supabase)

```sql
-- Tambah kolom workflow ke tabel blogs
ALTER TABLE blogs ADD COLUMN workflow_status TEXT DEFAULT 'PROPOSED';
ALTER TABLE blogs ADD COLUMN topic_notes TEXT;
ALTER TABLE blogs ADD COLUMN image_prompt TEXT;
ALTER TABLE blogs ADD COLUMN image_url TEXT;
ALTER TABLE blogs ADD COLUMN curator_notes TEXT;
ALTER TABLE blogs ADD COLUMN curated_by TEXT;
ALTER TABLE blogs ADD COLUMN curated_at TIMESTAMP;
```

---

## Rencana Implementasi Bertahap

### Phase 1: Core Workflow
- [ ] Tambah kolom workflow di tabel `blogs`
- [ ] API: `/api/ai/topic-research` — generate 5 topik
- [ ] Admin: halaman Topic Curation (approve/reject)
- [ ] API: `/api/ai/write-article` — tulis artikel dari topic
- [ ] Admin: halaman Article Review (approve/reject)
- [ ] API: `/api/ai/generate-image` — generate gambar
- [ ] Admin: halaman Approved (review image + publish)

### Phase 2: Automasi
- [ ] Cron job untuk AI 1 (1x sehari)
- [ ] Rate limit: 5 artikel/hari
- [ ] Trigger otomatis AI 2 setelah topic approved
- [ ] Trigger otomatis AI 3 setelah article approved

### Phase 3: Polish
- [ ] Halaman Published list
- [ ] Audit trail lengkap (who, when, what)
- [ ] Regenerate image button

---

## Risiko & Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Biaya AI image generation | Batasi 5 artikel/hari; Ideogram $0.10/gambar = ~$15/bulan |
| Kualitas konten AI | Human-in-the-loop di setiap tahap approval |
| Rate limit Gemini/Search | Monitoring usage; upgrade if needed |
| Gambar gagal generate | Tombol Regenerate + fallback ke placeholder |

---

## Pertanyaan Klarifikasi

Sebelum implementasi dimulai, perlu dijawab:

1. **Jalur workflow** — berjenjang ketat (topic → article → image → publish) atau bisa paralel?
2. **Bahasa** — EN + ID saja seperti sekarang?
3. **Tabel** — pakai satu tabel `blogs` atau pisah jadi `topics`, `articles`, `images`?
4. **Akses kurasi** — siapa saja yang boleh approve/reject?
5. **Trigger AI** — otomatis (cron) atau manual (button) dulu untuk MVP?

---

## Rekomendasi Paket Final

| Komponen | Rekomendasi |
|----------|-------------|
| AI text + search | ✅ Gemini 2.5 Flash + Google Search (sudah ada) |
| AI image | ✅ Ideogram API ($0.10/gambar) |
| Workflow trigger | ✅ Supabase Edge Functions + button trigger |
| Image storage | ✅ Supabase Storage (sudah ada) |
| Estimated total tambahan per bulan | **~$22–25** (untuk AI services saja) |
