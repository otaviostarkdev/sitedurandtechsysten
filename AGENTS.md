# AI Agent Instructions for DurandTech-SEO-FINAL-Vercel

## Project overview
- Static marketing website served from a single root `index.html`.
- Uses inline JavaScript, inline styles, and small static assets only.
- Deployment target is Vercel, configured in `vercel.json`.
- No `package.json`, build scripts, or server-side code are present in this workspace.

## Key files
- `index.html` — primary site entry point and main deliverable.
- `index2.html` — alternate/secondary HTML file; confirm intent before deleting or overwriting.
- `vercel.json` — Vercel routing and cache headers:
  - `cleanUrls: true`
  - rewrites all requests to `/index.html`
  - favicon assets cached with long-lived immutable headers
- `manifest.json` — PWA metadata and icons.
- `favicon/` — static icon assets referenced by the site.

## Guidance for AI coding agents
- Treat the site as a static SPA landing page.
- Preserve inline scripts/styles when editing `index.html`; do not assume a modern build pipeline.
- If code is added, keep it compatible with plain browser delivery and local hosting.
- If user asks to improve SEO, accessibility, or load performance, focus on markup, metadata, and lightweight assets.
- Avoid introducing unnecessary dependencies or framework installs unless the user explicitly requests a conversion.

## Deployment and edits
- This repo is intended to deploy directly on Vercel without prebuild steps.
- The current Vercel config rewrites all routes to `index.html`, so SPA-style navigation should work.
- Do not change `vercel.json` routing unless the user requests a different hosting behavior.

## Questions to clarify
- Ask whether `index2.html` is a backup or a working alternate version before removing or replacing it.
- Confirm whether the user expects a one-page site only, or if they want additional pages/components.
