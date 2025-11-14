<!-- Copilot / AI agent instructions for tttjjjzzz.github.io -->
# Repo Snapshot

This repository is a small static portfolio site served by GitHub Pages. Key facts:
- Entry point: `index.html` (root).  This is the canonical page GitHub Pages serves.
- Minimal Pages: project pages are plain HTML files (there is a `proj1` HTML file in the repo root).
- No build toolchain: Tailwind is included from CDN in-page (no PostCSS/webpack). `_config.yml` is intentionally minimal so the custom `index.html` is used.

# Big Picture (what an AI agent needs to know)
- Purpose: simple static portfolio (HTML + Tailwind via CDN + small inline JS). When changing content, update the HTML directly.
- Page structure: `index.html` contains the main header, nav anchors (#about, #resume, #experience, #projects, #contact) and links to project pages. Project pages follow the same pattern (header, main sections, footer).
- Styling: Tailwind classes are used inline; some pages include an inline `tailwind.config` script (see `index.html` head). Do not assume a local Tailwind build.
- Scripts: small, inline DOM scripts exist (e.g., mobile menu toggle uses element IDs `mobile-menu-button` and `mobile-menu`) — maintain those IDs when refactoring.

# Where to look (important files)
- `index.html` — primary source of truth and navigation.
- `proj1` — example project page (note: it's an HTML file without a `.html` suffix).
- `_config.yml` — left blank to disable Jekyll processing; do not remove unless you intend to change Pages behavior.
- `resume.pdf`, images and other assets are expected in the repository root (check links in `index.html` and project pages).

# Developer workflows & commands
- Preview locally (PowerShell):
```
python -m http.server 8000
# then open http://localhost:8000/
```
- Alternative (if Node.js available):
```
npx serve -s . -l 8000
```
- Deploy: push to `main` (or repo default) — GitHub Pages will serve `index.html` automatically. `_config.yml` is present to keep Pages from using a Jekyll default site.

# Project-specific conventions & patterns
- Pages live at repository root as standalone HTML files. Example: `proj1` is an HTML page — new project pages may follow this pattern.
- Navigation relies on anchor IDs in `index.html`. To add a new section, add the section with an `id` and add the corresponding `<a href="#id">` in the nav.
- Tailwind is loaded from CDN and configured inline. Avoid adding a local Tailwind build step unless you update documentation and `_config.yml`.
- Small interactive features are implemented with inline vanilla JS. Keep element `id` attributes stable (e.g., `mobile-menu-button`, `mobile-menu`) to avoid breaking behavior.

# Integration points & external dependencies
- Tailwind CSS CDN — styling comes from `https://cdn.tailwindcss.com` (used directly in page heads).
- Google Fonts — Inter font loaded from `fonts.googleapis.com`.
- External links: GitHub profile and LinkedIn are present in header/footer — update with real URLs when needed.

# Common edits (examples)
- Add a project page:
  1. Copy `proj1` and name it `project-one.html` (or keep `proj1` naming scheme).
  2. Update the header/title within the file.
  3. In `index.html`, update the Projects section anchor: `<a href="project-one.html">`.
- Fix a broken image: look for file names referenced in `img src` (example discovered: `proj1` references `httpsfor-project-one.jpg` which looks like a broken filename).
- Update resume: replace `resume.pdf` in repo root; links in `index.html` point to `resume.pdf`.

# Things NOT to change without verification
- Do not remove or rewrite `_config.yml` unless you intend to change GitHub Pages behavior (it currently disables Jekyll defaults so `index.html` is served as-is).
- Do not assume a build step exists for Tailwind — removing CDN usage requires adding a build pipeline and updating docs.

# Quick checklist for AI edits
- Preserve `index.html` anchor IDs and the mobile menu `id` attributes when changing layout.
- Keep Tailwind classes inline; match the existing `max-w-8xl` usage where present.
- When adding pages, ensure relative links are consistent (use root-relative or same-folder links as the repo currently does).

If anything here is unclear or you want more detail (e.g., preferred filename conventions, whether to rename `proj1` to `project-one.html`, or to introduce a build step), tell me and I will iterate.