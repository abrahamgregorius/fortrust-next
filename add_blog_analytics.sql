-- Blog analytics: per-post view counter + raw view events for analysis.

-- Fast counter shown in the admin blog list.
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS view_count INTEGER NOT NULL DEFAULT 0;

-- One row per page view, with the context needed for analysis.
-- blog_id is UUID because blogs.id is a UUID in this schema.
CREATE TABLE IF NOT EXISTS blog_views (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    blog_id UUID NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
    path TEXT,
    locale TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    session_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE blog_views ENABLE ROW LEVEL SECURITY;

-- Visitors (anon) may record views, never read or modify them.
CREATE POLICY "anon can insert views"
    ON blog_views FOR INSERT
    TO anon
    WITH CHECK (true);

-- Logged-in admins can read the raw events for analysis.
CREATE POLICY "authenticated can read views"
    ON blog_views FOR SELECT
    TO authenticated
    USING (true);

-- Keep blogs.view_count in sync with every inserted row.
CREATE OR REPLACE FUNCTION increment_blog_view_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE blogs SET view_count = view_count + 1 WHERE id = NEW.blog_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_views_increment ON blog_views;
CREATE TRIGGER blog_views_increment
    AFTER INSERT ON blog_views
    FOR EACH ROW EXECUTE FUNCTION increment_blog_view_count();

-- Indexes for the most useful analyses.
CREATE INDEX IF NOT EXISTS blog_views_blog_id_idx ON blog_views (blog_id, created_at);
CREATE INDEX IF NOT EXISTS blog_views_utm_source_idx ON blog_views (utm_source);
