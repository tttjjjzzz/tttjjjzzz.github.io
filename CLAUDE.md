# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio site served by GitHub Pages. No build step — Tailwind CSS is loaded from CDN, no PostCSS/webpack. `_config.yml` is intentionally minimal to prevent Jekyll from processing files so `index.html` is served as-is.

## Local Development

```bash
python -m http.server 8000
# visit http://localhost:8000/
```

Or if Node.js is available:
```bash
npx serve -s . -l 8000
```

Deploy by pushing to `main` — GitHub Pages serves `index.html` automatically.

## Architecture

The site is **data-driven**: all content lives in `js/config.js` (the `SITE_CONFIG` object), and `js/components.js` contains reusable builder functions that dynamically inject content into the DOM on `DOMContentLoaded`.

- **`js/config.js`** — Single source of truth for all site data: personal info, experience, projects, navigation, social links, education. Edit this file to update site content.
- **`js/components.js`** — Component builder functions that generate HTML for nav, cards, sections, icons. Takes data from `config.js` and populates DOM elements by ID.
- **`index.html`** — Entry point. Defines the page structure and anchor sections (`#about`, `#experience`, `#projects`, `#resume`, `#contact`). DOM element IDs are referenced by JS — keep them stable.
- **`css/custom.css`** — Custom animations and styles beyond Tailwind (gradient glow on experience cards, timeline styling, scroll indicator, WebGL background glow).
- **`js/gradient.js`** — WebGL gradient animation for the background canvas (`#gradient-canvas`).
- **`js/mobile-menu.js`** — Mobile menu toggle; relies on IDs `mobile-menu-button` and `mobile-menu`.

## Project Pages

Project detail pages live in `projects/` as standalone HTML files (e.g., `projects/project-can-fiber.html`). To add a new project:
1. Copy an existing project page and update its content.
2. Add the project entry to `SITE_CONFIG.projects` in `js/config.js` with a `link` pointing to the new file.

## Key Conventions

- **Do not add a local Tailwind build** — Tailwind is CDN-only. Inline `tailwind.config` scripts appear in page `<head>` tags.
- **Do not modify `_config.yml`** beyond metadata — removing or expanding it may cause Jekyll to process files and break the site.
- **Keep DOM element IDs stable** — the JS component system populates content by ID (`experience-container`, `projects-grid`, `desktop-nav`, `mobile-nav`, etc.).
- **Content updates go in `js/config.js`**, not scattered across HTML files.
- Images live in `photos/` (organized by project), logos in `photos/logos/`. Resume PDF is at `documents/resume 2025-2026.pdf`.
