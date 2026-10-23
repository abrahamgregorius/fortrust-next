/**
 * Removes the leftover drag-and-drop upload placeholder from editor HTML.
 *
 * The image upload node is an atom: while the user is picking a file it
 * renders as an empty <div data-type="image-upload">. If the article is saved
 * in that state the placeholder would be published as an empty block, so it is
 * stripped on the way to the database. The editor keeps its own state.
 */
export function stripUploadPlaceholders(html) {
    return String(html || "").replace(
        /<div[^>]*data-type=["']image-upload["'][^>]*>\s*<\/div>/gi,
        ""
    );
}
