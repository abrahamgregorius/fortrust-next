# Task: Redesign Blog Listing Section into Featured Editorial Article Layout

## 1. Objective

Refactor the existing Blog Listing section from its current three-column card grid layout into a **Featured Article + Secondary Articles Editorial Layout**.

The goal is to create a more engaging editorial-style experience that prioritizes one featured article while presenting three additional articles in a compact list on the right side.

This is a layout restructuring task, not a complete website redesign.

Use the first provided wireframe as the target layout reference and the current Fortrust Blog page screenshot as the source design reference.

### Current Layout
- Three equally sized article cards arranged horizontally.
- Each card contains an image, publication date, article title, and Read More link.
- All articles have equal visual importance.

### Target Layout
A two-column editorial composition:

**Left Column (Featured Article):**
- One large featured article image.
- Article category and publication date.
- Prominent article title.
- Short article excerpt/description.

**Right Column (Secondary Articles):**
- Three vertically stacked article items.
- Each item contains a thumbnail on the left and article information on the right.
- Article information includes category/date and title.

The featured article should receive the highest visual priority.

---

## 2. Design Direction and Visual Consistency

Preserve the existing Fortrust visual identity.

Do NOT redesign the entire page or introduce an entirely new visual language.

### Preserve Existing Design Elements
- Existing website navigation/header.
- Existing dark navy background.
- Existing typography and font family.
- Existing lime-green accent color.
- Existing text colors and visual hierarchy.
- Existing floating WhatsApp consultation button.
- Existing overall page width and horizontal alignment.
- Existing article data and navigation behavior.

### Visual Guidelines
- Maintain the current dark editorial aesthetic.
- Use clean spacing and consistent alignment.
- Avoid unnecessary borders and excessive card shadows.
- Avoid introducing gradients, glassmorphism, or unrelated decorative elements.
- The layout should feel like a professional education publication or editorial magazine rather than a generic SaaS dashboard.

Use the existing design tokens, CSS variables, Tailwind configuration, and component styles wherever possible.

Do not introduce new dependencies unless absolutely necessary.

---

## 3. Target Layout Structure

Create the following structural hierarchy:

```text
BlogSection
│
├── SectionHeader
│   ├── SectionTitle
│   └── SectionDescription
│
├── ArticleEditorialLayout
│   │
│   ├── FeaturedArticle
│   │   ├── FeaturedImage
│   │   ├── ArticleMetadata
│   │   │   ├── Category
│   │   │   └── PublishedDate
│   │   ├── ArticleTitle
│   │   └── ArticleExcerpt
│   │
│   └── SecondaryArticleList
│       ├── SecondaryArticleItem
│       │   ├── ArticleThumbnail
│       │   └── ArticleInformation
│       │       ├── ArticleMetadata
│       │       └── ArticleTitle
│       │
│       ├── SecondaryArticleItem
│       ├── SecondaryArticleItem
│       └── SecondaryArticleItem
│
└── ViewAllArticlesButton
```

### Desktop Layout

Use a two-column grid.

Recommended proportions:
- Featured article: approximately 60–65% of available width.
- Secondary article list: approximately 35–40% of available width.
- Column gap: 24–32px.
- Secondary article list contains exactly three visible articles.

The two columns should align at the top.

The secondary articles should be distributed vertically with consistent spacing.

### Featured Article Specifications

**Image**
- Occupies the full available width of the featured article column.
- Recommended aspect ratio: 16:9.
- Use `object-fit: cover`.
- Maintain consistent image rendering without distortion.
- Use an appropriate border radius consistent with the existing website.

**Metadata**
- Display article category and publication date.
- Example: `DESTINATIONS · OCTOBER 30, 2026`
- Use smaller typography and muted text colors.
- Category may use the existing lime-green accent color if visually appropriate.

**Title**
- This is the primary textual element.
- Use a prominent heading size.
- Recommended desktop font size: 28–36px.
- Maintain readable line height.
- Support titles that wrap into multiple lines.
- Do not truncate the title.

**Excerpt**
- Display a short description of the article.
- Use approximately 2–3 lines on desktop.
- Recommended font size: 15–16px.
- Use a slightly muted text color while maintaining sufficient contrast.
- If the original article description is longer, truncate it visually to a reasonable length without modifying the original stored content.

The featured article should be entirely clickable or have a clearly identifiable navigation action, consistent with the existing article navigation behavior.

### Secondary Article Specifications

Each secondary article should use a horizontal layout:

```text
┌────────────────────────────────────────────┐
│ ┌──────────┐  CATEGORY · PUBLISHED DATE    │
│ │          │  Article Title                 │
│ │ Thumbnail│                                │
│ │          │                                │
│ └──────────┘                                │
└────────────────────────────────────────────┘
```

**Thumbnail**
- Recommended width: 35–40% of the secondary article item.
- Recommended aspect ratio: 4:3 or 1:1.
- Use `object-fit: cover`.
- Maintain consistent dimensions across all secondary articles.

**Article Information**
- Display category and publication date in a compact metadata row.
- Display the article title underneath.
- Recommended title font size: 16–19px on desktop.
- Use medium or semibold font weight.
- Allow titles to wrap naturally.
- Do not display the full article excerpt in secondary items.

**Spacing**
- Maintain approximately 20–24px vertical spacing between article items.
- Align thumbnail and information vertically.
- Ensure all items have consistent dimensions and spacing.

---

## 4. Article Selection and Ordering Logic

This is important because the new layout must work with the existing article data rather than hardcoded content.

Inspect the existing blog data source, API response, database model, or CMS integration before implementing the layout.

Implement the following selection behavior:

1. Identify the article designated as featured, if the existing data model supports a featured flag or equivalent field.
2. If a featured article exists, display it in the main featured area.
3. If no featured designation exists, use the latest published article as the featured article.
4. Populate the secondary article list with the next three eligible published articles.
5. Exclude the featured article from the secondary list.
6. Order secondary articles by publication date, newest first, unless the existing content management system already defines a different editorial order.
7. Do not display unpublished, draft, or scheduled articles unless the existing page explicitly supports them.
8. Handle missing categories, excerpts, dates, and images gracefully.

If the existing API or backend does not support a featured flag, do not modify the database schema automatically. First inspect the current implementation and use the latest published article as the fallback.

Do not hardcode the three articles currently visible in the screenshot.

The layout must remain dynamic and support future articles.

---

## 5. Responsive Design Requirements

The new layout must work properly across desktop, tablet, and mobile devices.

### Desktop: 1200px and Above

- Display the two-column editorial layout.
- Featured article occupies approximately 60–65% of the content width.
- Secondary articles occupy approximately 35–40%.
- Show three secondary articles vertically.
- Featured image uses a 16:9 ratio.
- Secondary thumbnails remain horizontal.

### Tablet: 768px–1199px

- Maintain the two-column layout when sufficient horizontal space is available.
- Adjust the column proportions to approximately 55–60% for the featured article and 40–45% for secondary articles.
- Reduce the gap between columns to approximately 16–20px.
- Reduce featured title font size to approximately 24–28px.
- Reduce secondary title font size to approximately 14–16px.
- Reduce secondary thumbnail width proportionally.
- Ensure the secondary article titles remain readable and do not become excessively compressed.

If the available content width becomes insufficient for a comfortable two-column composition, switch to the stacked layout rather than forcing the columns.

### Mobile: Below 768px

Switch to a single-column layout.

Expected order:

```text
Section Header
     |
     v
Featured Article
     |
     v
Secondary Article 1
     |
     v
Secondary Article 2
     |
     v
Secondary Article 3
     |
     v
View All Articles
```

Mobile behavior:

**Featured Article**
- Full available width.
- Image remains 16:9.
- Title font size approximately 22–26px.
- Excerpt font size approximately 14–15px.
- Metadata remains visible.
- Avoid excessive vertical spacing.

**Secondary Articles**
- Display as compact horizontal article items.
- Thumbnail on the left.
- Article information on the right.
- Thumbnail should occupy approximately 30–35% of the available width.
- Title font size approximately 14–16px.
- Metadata font size approximately 11–12px.
- Allow title wrapping without horizontal overflow.
- Maintain consistent vertical spacing.

Do not force the secondary articles into a horizontal carousel unless the existing design specifically requires one.

**General Mobile Requirements**
- No horizontal scrolling.
- No overflowing text or images.
- No overlapping elements.
- Maintain comfortable touch targets.
- Preserve the floating WhatsApp consultation button and ensure it does not obstruct article content or navigation.
- Ensure the View All Articles button remains accessible.

---

## 6. Section Header and View All Articles Button

Preserve the existing section heading:

"Latest from Our Blog"

Preserve the existing description:

"Insights, tips, and stories to help you plan your study abroad journey."

The header should remain centered above the editorial layout.

Maintain the existing typography and lime-green title color.

The View All Articles button should remain below the editorial layout.

Expected behavior:
- Center the button horizontally.
- Preserve the existing outline button styling and lime-green accent.
- Maintain an appropriate vertical gap between the article layout and button.
- Clicking it should navigate to the existing complete blog listing page.
- Do not change the destination URL or routing behavior.

---

## 7. Interaction and Expected Behavior

Implement the following behaviors:

### Featured Article
- Clicking the featured image navigates to the corresponding article detail page.
- Clicking the title navigates to the same article detail page.
- If the existing implementation makes the entire card clickable, preserve that behavior.
- Avoid nested clickable elements or duplicate navigation events.

### Secondary Articles
- Clicking the thumbnail navigates to the corresponding article detail page.
- Clicking the title navigates to the same article detail page.
- Each item must navigate to its own corresponding article.
- Add subtle hover feedback on desktop, such as a slight image opacity change or title color transition.
- Avoid aggressive animations or layout shifts.

### Loading State
If articles are fetched asynchronously:
- Preserve the existing loading mechanism if available.
- Otherwise, implement skeleton placeholders matching the new editorial layout.
- The featured image should have a correctly sized placeholder to prevent layout shifts.
- Secondary article skeletons should match the thumbnail and text structure.

### Empty State
If there are no published articles:
- Do not render broken or empty article containers.
- Display a simple empty-state message.
- Keep the section header if appropriate.
- Hide the View All Articles button if there are no articles to navigate to.

### Partial Data
- Missing image: use the existing default/fallback article image.
- Missing category: hide category metadata rather than showing an empty label.
- Missing excerpt: hide the excerpt or use an existing description field if available.
- Missing publication date: do not render an invalid date.
- Long titles: allow natural wrapping without breaking the layout.

---

## 8. Implementation Steps

Follow these steps in order.

### Step 1: Inspect the Existing Implementation

Before changing any code:

- Locate the Blog page or Blog Listing section.
- Identify the page component and its child components.
- Locate the article data source.
- Understand how article images, titles, descriptions, categories, and publication dates are retrieved.
- Identify the current article detail routes.
- Inspect existing CSS, Tailwind classes, responsive breakpoints, and design tokens.
- Identify whether reusable article components already exist.

Do not make assumptions about the project architecture.

### Step 2: Plan the Refactoring

Determine which existing components can be reused.

Identify the minimum set of components that need modification or creation.

Avoid unnecessarily rewriting the entire page.

Preserve existing business logic, API calls, routing, and localization functionality.

### Step 3: Implement the Editorial Layout

Refactor the existing three-column article grid into:

- FeaturedArticle
- SecondaryArticleList
- SecondaryArticleItem

Use CSS Grid or Flexbox based on the existing project conventions.

Make the layout data-driven.

Ensure the featured and secondary articles are selected dynamically.

### Step 4: Implement Responsive Behavior

Implement and test the desktop, tablet, and mobile breakpoints.

Ensure the layout transitions smoothly between two-column and single-column compositions.

Do not introduce arbitrary fixed widths that break smaller screens.

### Step 5: Implement Interaction States

Verify:
- Article image navigation.
- Article title navigation.
- Correct article URLs.
- Hover states.
- Loading states.
- Empty states.
- Missing-data fallbacks.
- View All Articles navigation.

### Step 6: Visual Quality Assurance

Compare the implementation against the provided target wireframe.

Check:
- Column proportions.
- Image aspect ratios.
- Typography hierarchy.
- Metadata visibility.
- Alignment.
- Vertical spacing.
- Responsive behavior.
- Consistency with the existing Fortrust branding.

Make adjustments until the result closely matches the intended editorial composition.

---

## 9. Acceptance Criteria

The task is considered complete only when all of the following conditions are satisfied.

### Layout
- [ ] The original three-column card grid has been replaced by a two-column editorial layout on desktop.
- [ ] One featured article appears on the left.
- [ ] Three secondary articles appear vertically on the right when sufficient articles are available.
- [ ] Featured article image uses a large 16:9 composition.
- [ ] Secondary articles use compact horizontal thumbnail-and-information compositions.
- [ ] Featured title and excerpt are visually prominent.
- [ ] Secondary titles and metadata remain readable.

### Data and Functionality
- [ ] Articles are rendered from the existing data source.
- [ ] Featured article selection follows the specified fallback logic.
- [ ] Featured article is excluded from the secondary list.
- [ ] Every article links to its correct detail page.
- [ ] View All Articles retains its original destination.
- [ ] Existing backend and API functionality remains intact.

### Responsiveness
- [ ] Desktop displays the intended two-column layout.
- [ ] Tablet adjusts proportions without content compression.
- [ ] Mobile displays a clean single-column composition.
- [ ] No horizontal overflow occurs.
- [ ] Images maintain their intended aspect ratios.
- [ ] Text wraps correctly across all breakpoints.

### Design Consistency
- [ ] Existing Fortrust branding is preserved.
- [ ] Existing dark navy background is retained.
- [ ] Lime-green accent color is retained.
- [ ] Existing typography is reused.
- [ ] WhatsApp consultation button remains functional.
- [ ] No unrelated sections of the website are unintentionally modified.

---

## 10. Important Constraints

- Do not redesign the entire website.
- Do not change the global navigation or header.
- Do not modify unrelated sections.
- Do not replace real article content with dummy data.
- Do not hardcode article titles, images, categories, or dates.
- Do not change existing article URLs or routing.
- Do not modify the database schema unless absolutely necessary and explicitly justified.
- Do not remove existing localization support (English/Indonesian).
- Do not introduce unnecessary dependencies.
- Follow the existing codebase conventions.
- Prefer minimal, maintainable changes over unnecessary abstractions.

If you discover an architectural limitation that prevents implementing a requirement, explain the limitation and implement the best compatible solution without breaking existing functionality.

## 11. Final Deliverables

After implementation:

1. Provide a concise summary of the changes.
2. List the files created or modified.
3. Explain how featured article selection works.
4. Explain the responsive breakpoints and layout behavior.
5. Report any existing limitations or assumptions.
6. Confirm which acceptance criteria have been verified.

Do not simply describe the proposed changes. Implement the changes in the existing codebase and verify the result.