# Project Changelog — August to September 2026

## Overview
Bilingual blog system (Indonesian + English) built on Next.js + Supabase.
August 2026 introduced category/tag filtering, rich-text enhancements, and related
articles. Late August into September 2026 added full EN/ID locale routing, a
LibreTranslate integration, and a tabbed admin editor for translated content.

---

## Commit-by-Commit

### `b7e74c8` — fix: redirect, richtexteditor, events and main page *(Aug 21)*
**What:** Fixed redirect behavior, upgraded RichTextEditor, refreshed events page and main page layout.
**Files:** `.gitignore`, `blogs/create/page.jsx`, `(main)/page.jsx`, `id/events/page.jsx`, `RichTextEditor.jsx`
**Impact:** Main page got a refresh; RichTextEditor stability improved.

---

### `3abdf2d` — fix: edit blog redirect *(Aug 21)*
**What:** Fixed blog edit page so it redirects correctly after saving.
**Files:** `blogs/edit/[id]/page.jsx`
**Impact:** Admin edit flow no longer dead-ends after submission.

---

### `2c90d06` — feat: filtering, designation, new columns on blogs and categories *(Aug 24)*
**What:** Added `CategoryFilter` and `TagFilter` components for the blog listing page.
Added `designation` column to blog posts (author title/role). New filtering columns on
categories. Blog listing page overhauled with magazine-style layout.
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `admin/blogs/page.jsx`,
`blog/[id]/page.jsx`, `(main)/blog/page.jsx`, `(main)/globals.css`, `CategoryFilter.jsx`, `TagFilter.jsx`
**Impact:** Blog listing now filterable by category and tag. Authors can have designations displayed.

---

### `3de6d79` — fix: categories *(Aug 24)*
**What:** Category display fix on blog listing and TagFilter styling tweaks.
**Files:** `(main)/blog/page.jsx`, `(main)/globals.css`, `TagFilter.jsx`
**Impact:** Categories render correctly on EN blog listing.

---

### `bd25440` — fix: title *(Aug 24)*
**What:** Fixed page title configuration in both admin and main layouts.
**Files:** `(admin)/layout.jsx`, `(main)/layout.jsx`
**Impact:** Browser tab titles now correct on EN and ID pages.

---

### `d11452b` — feat: add subscript superscript, add tags *(Aug 24)*
**What:** Added subscript/superscript formatting to RichTextEditor. Added tags field to
blog create/edit forms.
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `blog/[id]/page.jsx`, `RichTextEditor.jsx`
**Impact:** Blog authors can now use sub/superscript and tag their posts.

---

### `9eeea87` — feat: related articles *(Aug 24)*
**What:** Related articles section added to blog post page. Styling overhaul for blog post page.
**Files:** `blog/[id]/page.jsx`, `(main)/globals.css`
**Impact:** Readers see related posts at the bottom of each article. EN blog post page gets
magazine-style layout.

---

### `f3ac3d4` — feat: slug params on blog *(Aug 29)*
**What:** Blog posts now accept slug-based URLs instead of only numeric IDs.
Slug param introduced on blog routes.
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `admin/blogs/page.jsx`,
`(main)/blog/[id]/page.jsx`, `(main)/blog/page.jsx`, `TagFilter.jsx`
**Impact:** EN blog URLs are now `/blog/my-article-slug` instead of `/blog/123`.

---

### `c9ffacb` — revert: undo fix: slug commit *(Aug 29)*
**What:** Reverted the slug indexing fix. Full `BlogPostContent` component added back.
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `admin/blogs/page.jsx`,
`(main)/blog/[id]/page.jsx`, `(main)/blog/page.jsx`, `BlogPostContent.jsx`, `TagFilter.jsx`
**Impact:** Intermediate rollback; `BlogPostContent` shared component introduced to bridge EN/ID
blog post rendering.

---

### `ef4ff85` — fix: slug blog indexing *(Aug 29)*
**What:** Resolved route conflict between `/id/blog/[legacyId]` and `/id/blog/[slug]`.
Collapsed to single `[slug]` route with numeric-ID detection + internal redirect.
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `admin/blogs/page.jsx`,
`(main)/blog/[id]/page.jsx` (deleted), `(main)/blog/[slug]/page.jsx`, `id/blog/page.jsx`, `BlogPostContent.jsx`, `TagFilter.jsx`
**Impact:** Clean URL structure — no more route conflicts between ID and slug routes.

---

### `a453ccc` — feat: translate service *(Sep 1)*
**What:** New `/api/translate` route using LibreTranslate (`http://103.126.116.46:5000/translate`).
Accepts `text`, `source="id"`, `target="en"`. Returns translated text.
**Files:** `api/translate/route.js`
**Impact:** Machine translation available for blog content. Powers the TranslateButton in admin.

---

### `b24f9b2` — feat: translation and blog on id/en *(Sep 1)*
**What:** Full bilingual system wired up end-to-end.
- Indonesian admin editor now has EN tab with separate `title_en`, `slug_en`, `content_en` fields
- `TranslateButton` auto-generates English translation from Indonesian input
- English blog (`/blog`) queries by `slug_en`; Indonesian (`/id/blog`) queries by `slug`
- `BlogPostContent` stores `window.__blogSlugPair` for cross-locale navigation
- `LocaleContext.switchLocale` uses slug pair for correct blog-to-blog locale switching
- TagFilter links updated for EN (`/blog/{slug_en}`) and ID (`/id/blog/{slug}`)
- Admin blog list eye button opens `/id/blog/{slug}` (ID version)
- Back button added above blog post hero with left-arrow + "Back" label
**Files:** `blogs/create/page.jsx`, `blogs/edit/[id]/page.jsx`, `admin/blogs/page.jsx`,
`(main)/blog/[slug]/page.jsx`, `(main)/blog/page.jsx`, `id/blog/page.jsx`,
`id/globals.css` (540 lines new ID-specific styles), `BlogPostContent.jsx`, `TagFilter.jsx`,
`TranslateButton.jsx`, `LocaleContext.js`, `id/page.module.css`
**Impact:** Full EN/ID bilingual blog with working locale switching, admin translation
workflow, and consistent back navigation. +902 insertions, -233 deletions.

---

## Summary Table

| Date | Commit | Summary |
|------|--------|---------|
| Aug 21 | `b7e74c8` | RichTextEditor upgrade, main page refresh |
| Aug 21 | `3abdf2d` | Fix blog edit redirect |
| Aug 24 | `2c90d06` | Category/Tag filtering, designation column, magazine layout |
| Aug 24 | `3de6d79` | Category display fix |
| Aug 24 | `bd25440` | Page title fix |
| Aug 24 | `d11452b` | Sub/superscript, tags in editor |
| Aug 24 | `9eeea87` | Related articles, blog page styling |
| Aug 29 | `f3ac3d4` | Slug-based blog URLs |
| Aug 29 | `c9ffacb` | Revert + BlogPostContent shared component |
| Aug 29 | `ef4ff85` | Route conflict resolved, single slug route |
| Sep 1 | `a453ccc` | LibreTranslate `/api/translate` route |
| Sep 1 | `b24f9b2` | Full bilingual system, TranslateButton, tabbed editor, back button |
