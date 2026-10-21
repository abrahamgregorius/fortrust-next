#!/usr/bin/env node
/**
 * Daily AI article generator (portable, Node 18+).
 *
 * Works from a VPS, GitHub Actions, a container, or any machine with Node.
 * Only needs APP_URL and CRON_SECRET in the environment.
 *
 * Usage:
 *   APP_URL=https://fortrust.com CRON_SECRET=xxx node scripts/generate-articles.mjs
 *   APP_URL=... CRON_SECRET=... ARTICLE_COUNT=5 node scripts/generate-articles.mjs
 */

const APP_URL = process.env.APP_URL;
const CRON_SECRET = process.env.CRON_SECRET;
const ARTICLE_COUNT = Number(process.env.ARTICLE_COUNT || 5);
const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 900000); // 15 min

if (!APP_URL) {
    console.error("APP_URL is required");
    process.exit(1);
}
if (!CRON_SECRET) {
    console.error("CRON_SECRET is required");
    process.exit(1);
}

const endpoint = `${APP_URL.replace(/\/+$/, "")}/api/ai/generate-articles`;

async function call() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-cron-secret": CRON_SECRET,
            },
            body: JSON.stringify({ count: ARTICLE_COUNT }),
            signal: controller.signal,
        });

        const body = await res.text();
        return { status: res.status, body };
    } finally {
        clearTimeout(timer);
    }
}

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

async function main() {
    log(`Starting AI blog generation (count=${ARTICLE_COUNT}) -> ${endpoint}`);

    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
            const { status, body } = await call();

            if (status === 200) {
                log(`SUCCESS (http ${status}): ${body}`);
                process.exit(0);
            }

            log(`FAILED (http ${status}): ${body}`);

            // 4xx = configuration problem, retrying will not help.
            if (status >= 400 && status < 500) {
                process.exit(1);
            }
        } catch (e) {
            log(`ERROR on attempt ${attempt}: ${e.message}`);
        }

        if (attempt < 2) {
            log("Retrying in 120s...");
            await new Promise((r) => setTimeout(r, 120000));
        }
    }

    log("FAILED after retries");
    process.exit(1);
}

main();
