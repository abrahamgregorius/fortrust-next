# Task: Refactor Fortrust Blog into a Full-Width Editorial News Layout

## 1. Objective

Redesign the existing Fortrust Blog section into a **Full-Width Editorial News Layout**, closely following the provided reference screenshot.

This is a layout restructuring task. The implementation must reproduce the reference's composition, proportions, alignment, spacing, and content hierarchy as closely as possible while preserving Fortrust's existing dark navy and lime-green visual identity.

The target is an asymmetric two-column editorial layout:

- **Left column:** One large featured article.
- **Right column:** A vertically stacked list of compact secondary articles, with article information on the LEFT and thumbnail images on the RIGHT.

IMPORTANT: The right column must follow the reference structure exactly. Do not reverse the text and image positions.

## 2. Layout Architecture

Use the entire available content container width.

Do not constrain the editorial section to a narrow centered content area or introduce unnecessary whitespace around the two columns.

```text
EditorialContainer (100% width)
│
├── FeaturedArticleColumn (LEFT)
│   ├── ArticleTitle
│   ├── ArticleMetadata
│   └── FeaturedImage
│
└── SecondaryArticleColumn (RIGHT)
    │
    ├── SecondaryArticleItem
    │   ├── ArticleInformation (LEFT)
    │   │   ├── Title
    │   │   ├── Excerpt
    │   │   ├── Category
    │   │   ├── Tags
    │   │   └── CreatedAt / ReadingTime
    │   └── Thumbnail (RIGHT)
    │
    ├── SecondaryArticleItem
    └── SecondaryArticleItem
```

The two columns must begin at the same vertical position.

## 3. Desktop Layout: Pixel-Level Specifications

Target viewport: 1440px wide and above.

Use the following recommended proportions:

| Element | Specification |
|---|---|
| Editorial container | 100% available width |
| Main column | 55–58% |
| Secondary column | 42–45% |
| Column gap | 28–36px |
| Secondary item gap | 20–24px |
| Main image ratio | 16:9 |
| Secondary thumbnail ratio | 4:3 |
| Secondary thumbnail width | 35–40% of its column |
| Secondary information width | Remaining 60–65% |

Use CSS Grid for the main composition.

Recommended implementation:

```css
.editorial-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: 32px;
  width: 100%;
  align-items: start;
}
```

Adjust the proportions to match the reference screenshot rather than blindly following these initial values.

### Left Column: Featured Article

The featured article should have the strongest visual hierarchy.

Structure:

1. Article title.
2. Metadata.
3. Large featured image.

Specifications:

- Title font size: 28–34px.
- Font weight: 700 or bold.
- Line height: approximately 1.2.
- Metadata font size: 12–13px.
- Image width: 100%.
- Image aspect ratio: 16:9.
- Image object-fit: cover.
- Border radius: 8–12px.
- Avoid unnecessary card borders and excessive shadows.

Metadata must include:
- Category.
- Created/published date.
- Reading time (if available).

Display metadata in a compact horizontal row.

Use the existing lime-green accent for important text while maintaining readable contrast.

### Right Column: Secondary Article List

This section is especially important.

Reproduce the reference's exact horizontal item structure:

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ARTICLE INFORMATION                ┌──────────────┐  │
│                                    │              │  │
│  Article Title                     │  Thumbnail   │  │
│  Short excerpt                     │              │  │
│  Category · Date · Reading Time    └──────────────┘  │
│  Tags                                                │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Article Information: LEFT**

Each item must display:

1. Article title.
2. Short excerpt.
3. Category.
4. Tags.
5. Created/published date.
6. Reading time, if available.

Typography:

- Title: 15–18px, semibold.
- Excerpt: 12–13px, regular.
- Metadata: 11–12px, muted.
- Tags: 10–11px, compact.

Content ordering:

- Title first.
- Excerpt underneath.
- Metadata and tags in a compact arrangement below the excerpt.

Do not allow metadata or tags to dominate the title.

**Thumbnail: RIGHT**

- Position the image on the far right of every secondary article item.
- Width: approximately 35–40% of the item.
- Aspect ratio: 4:3.
- Use object-fit: cover.
- Border radius: 6–8px.
- Maintain identical thumbnail dimensions across all items.
- Images must never stretch or distort.

**Item Layout**

Use Flexbox or CSS Grid:

```css
.secondary-article {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 38%;
  gap: 16px;
  align-items: center;
}
```

Use a consistent vertical gap of 20–24px between items.

Do not use equal-height fixed cards. Let content determine the natural item height while maintaining consistent image dimensions and alignment.

## 4. Article Data Requirements

Inspect the existing article model, API, database, and CMS before implementing.

Every article must support the following data fields:

| Field | Required | Purpose |
|---|---|---|
| id | Yes | Unique article identifier |
| title | Yes | Article headline |
| slug | Yes | Article detail URL |
| category | Yes | Article classification |
| tags | Yes | Related article keywords |
| created_at | Yes | Publication/creation date |
| excerpt | Recommended | Short article description |
| featured_image | Recommended | Main article image |
| thumbnail | Recommended | Secondary article thumbnail |
| reading_time | Optional | Estimated reading duration |
| status | Yes | Published/draft status |
| updated_at | Optional | Last modification date |

Additional requirements:

- Display all available required fields.
- Tags should be rendered as compact labels or inline text, not large decorative badges.
- If an article has multiple tags, limit visible tags to two or three and optionally show a `+N` indicator.
- Use `created_at` as the date source, formatted consistently with the existing website.
- If a separate published date exists, prefer that for public-facing publication metadata.
- Calculate reading time from article content if the backend does not provide it.
- Do not expose internal database IDs.
- Preserve existing localization support.

Do not create a new database schema if the existing model already contains equivalent fields.

## 5. Article Selection Logic

The layout must be dynamic and database-driven.

Implement the following behavior:

1. Retrieve published articles from the existing data source.
2. Select the designated featured article if a featured flag already exists.
3. Otherwise, use the newest published article as the featured article.
4. Exclude the featured article from the secondary list.
5. Display the next three newest published articles in the right column.
6. Maintain consistent ordering.
7. Never hardcode article titles, images, categories, dates, or tags.

If fewer than four articles exist, render the available content without creating empty placeholders.

If there are no articles, show an appropriate empty state.

## 6. Responsive Behavior

### Desktop: 1200px+

- Two-column editorial layout.
- Featured article on the left.
- Secondary article list on the right.
- Secondary article text on the left and image on the right.
- Full-width container.
- Three secondary items when sufficient content exists.

### Tablet: 768px–1199px

- Preserve the two-column layout when both columns have sufficient space.
- Reduce column gap to 20–24px.
- Reduce featured title to 24–28px.
- Reduce secondary title to 14–16px.
- Secondary thumbnail width: approximately 35%.
- Ensure excerpts and metadata do not become excessively compressed.

If the available width is insufficient, transition to a stacked layout.

### Mobile: Below 768px

Switch to a single-column composition.

Expected order:

1. Featured article.
2. Secondary article 1.
3. Secondary article 2.
4. Secondary article 3.

For mobile secondary items:
- Preserve text on the left and image on the right when sufficient width exists.
- Thumbnail width: 30–35%.
- Title: 14–16px.
- Excerpt: 12–13px.
- Metadata: 10–11px.
- Allow natural text wrapping.
- Hide or limit tags when space becomes insufficient.

Never introduce horizontal scrolling or overflowing content.

## 7. Visual Styling and Fortrust Branding

Preserve the current Fortrust identity:

- Dark navy background.
- Existing lime-green accent.
- Existing font family.
- Existing typography system.
- Existing website container conventions.
- Existing navigation/header.
- Existing WhatsApp consultation button.

The editorial section should feel like a premium education publication.

Avoid:
- Generic SaaS card layouts.
- Excessive rounded containers.
- Heavy shadows.
- Glassmorphism.
- Gradients.
- Unnecessary decorative icons.
- Large metadata badges.
- Excessive whitespace between content elements.

Prefer clean alignment, compact metadata, clear typography, and strong image presentation.

## 8. Interaction and Expected Behavior

- Featured article title and image navigate to the correct article detail page.
- Secondary article titles and thumbnails navigate to their respective detail pages.
- Preserve existing URL structures and routing.
- Add subtle hover feedback to titles and images.
- Ensure no nested clickable elements cause duplicate navigation.
- Maintain keyboard accessibility and visible focus states.
- Provide loading skeletons matching the final layout.
- Provide image fallbacks for missing thumbnails.
- Handle missing metadata gracefully.
- Ensure all images have meaningful alt text.

## 9. Implementation Workflow

Follow these steps sequentially:

**Step 1: Inspect**
- Locate the current Blog section.
- Identify the page and article components.
- Inspect the existing data model and API.
- Identify the current routing and image handling.
- Inspect existing responsive breakpoints and design tokens.

**Step 2: Plan**
- Identify reusable components.
- Determine how featured and secondary articles will be selected.
- Identify any missing data fields.
- Avoid unnecessary backend or database modifications.

**Step 3: Refactor**
- Replace the existing layout with the asymmetric two-column editorial grid.
- Implement the featured article.
- Implement the secondary article list with text-left/image-right positioning.
- Connect all components to actual article data.

**Step 4: Responsive Implementation**
- Implement desktop, tablet, and mobile layouts.
- Validate column proportions and text wrapping.
- Prevent overflow and layout shifts.

**Step 5: Visual QA**
- Compare the result against the provided reference screenshot.
- Prioritize composition, proportions, alignment, image sizing, typography, and spacing.
- Adjust CSS until the implementation closely matches the reference.

**Step 6: Functional QA**
- Verify article selection.
- Verify article navigation.
- Verify metadata rendering.
- Verify loading and empty states.
- Verify localization.
- Verify responsive behavior.

## 10. Acceptance Criteria

- [ ] Main composition uses the entire available container width.
- [ ] Featured article occupies the left column.
- [ ] Secondary articles occupy the right column.
- [ ] Both columns share the same top alignment.
- [ ] Secondary article information is on the LEFT.
- [ ] Secondary article thumbnail is on the RIGHT.
- [ ] Every article displays its title and category.
- [ ] Tags are displayed compactly.
- [ ] `created_at` is formatted correctly.
- [ ] Excerpt and reading time are displayed when available.
- [ ] Three secondary articles are displayed when sufficient content exists.
- [ ] All content comes from the existing data source.
- [ ] Responsive behavior works across desktop, tablet, and mobile.
- [ ] Existing Fortrust branding and functionality remain intact.
- [ ] No horizontal overflow or unintended layout gaps occur.

## 11. Final Deliverables

Implement the changes directly in the existing codebase.

After implementation, report:
1. Files created and modified.
2. Final component structure.
3. Article selection logic.
4. Data fields used.
5. Responsive behavior.
6. Tests and visual verification performed.
7. Any limitations or missing data fields.

Do not stop at providing a plan. Complete the implementation and verify it against the supplied reference.