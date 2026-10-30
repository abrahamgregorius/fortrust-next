-- A blog post can belong to multiple categories.
-- category_ids is the source of truth; category_id stays in sync as the
-- "primary" (first) category for backward compatibility.

ALTER TABLE blogs ADD COLUMN IF NOT EXISTS category_ids INTEGER[];

-- Backfill from the old single-category column.
UPDATE blogs
SET category_ids = ARRAY[category_id]
WHERE category_ids IS NULL AND category_id IS NOT NULL;

-- Optional (once nothing depends on it anymore):
-- ALTER TABLE blogs DROP COLUMN category_id;
