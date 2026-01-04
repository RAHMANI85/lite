# Scraper Lite

Minimal runner for individual site configs.

## Quick start
- In this folder run:
  ```
  npm install
  ```
- Execute one site (replace `coincu` with any site key from `sites/`):
  ```
  npm run site -- coincu
  ```
- Results are saved to `data/<site>.json`

Note: the site URL you use should point to the site's news listing page (commonly `/news`). On that page the `articleLinkSelector` should target the news/listing block so it can fetch all article links, and the `nextPageSelector` should match the pagination control on that same news page. For example: https://coincu.com/news/

## Interpreting `data/<site>.json`
- Use the JSON to verify selector coverage; a successful scrape should show `found: true` and non-empty `samples` for content-bearing selectors (article links, title, content, date, author).
- `articleLinkSelector`: should target the main listing container on the news page that holds article links—usually the page with pagination. Samples should show the links/URLs it captures.
- `nextPageSelector`: should match the pagination control that moves to the next page (e.g., the “next” button near page numbers 2, 3, etc.). In the report it only shows `found`/`not found`.
- `removeSelector`: add selectors (array) for elements to strip from content before sampling—e.g., ad blocks, newsletter promos, social/share sections.
- Prefer single selectors (not arrays) for `articleLinkSelector`, `nextPageSelector`, `titleSelector`, `contentSelector`, `dateSelector`, and `authorSelector`; only `removeSelector` should typically be an array of selectors to strip.
