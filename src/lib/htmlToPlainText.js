// Convert stored rich-text (HTML) to the plain-text teaser used on cards.
// Pure string handling so it runs on server components and the client alike
// (no DOM tricks). TipTap output only ever contains a small set of entities,
// but numeric references are handled too for pasted content.
const NAMED_ENTITIES = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ndash: "–",
    mdash: "—",
    hellip: "…",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
    copy: "©",
    reg: "®",
    trade: "™",
};

export function htmlToPlainText(html = "") {
    if (!html) return "";
    return String(html)
        // Drop every tag; block-level boundaries become a single space so
        // multi-paragraph descriptions read as one flowing teaser line.
        .replace(/<[^>]*>/g, " ")
        // Numeric character references: &#8217; and &#x2019;
        .replace(/&#(\d+);/g, (_, code) => {
            const num = Number(code);
            return num > 0 && num <= 0x10ffff ? String.fromCodePoint(num) : " ";
        })
        .replace(/&#x([0-9a-f]+);/gi, (_, code) => {
            const num = parseInt(code, 16);
            return num > 0 && num <= 0x10ffff ? String.fromCodePoint(num) : " ";
        })
        // Named references; unknown ones are kept as-is rather than mangled.
        .replace(/&([a-z]+);/gi, (match, name) =>
            NAMED_ENTITIES[name.toLowerCase()] ?? match
        )
        .replace(/\s+/g, " ")
        .trim();
}

// TipTap's getHTML() returns "<p></p>" for an emptied editor. Treat any
// markup with no visible text as empty so the DB stores "" and the
// "no description" fallbacks on the public pages keep working.
export function isEmptyRichText(html = "") {
    return htmlToPlainText(html) === "";
}
