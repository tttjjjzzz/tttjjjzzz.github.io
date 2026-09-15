# CLAUDE.md - Portfolio Website Guide

## Project Overview
Static portfolio website for Tiger Zhou (周觉林), an Integrated Engineering student at UBC specializing in Electrical Engineering. Hosted on GitHub Pages. No build step — all static HTML + Tailwind CDN + vanilla JS.

## Architecture

### File Structure
```
/
├── index.html                    # Main page (sections: home, about, experience, projects, contact)
├── _config.yml                   # GitHub Pages config (minimal, disables Jekyll)
├── css/custom.css                # All custom styles and animations
├── js/
│   ├── config.js                 # SITE_CONFIG data object + ICONS SVG library (SINGLE SOURCE OF TRUTH for content)
│   ├── components.js             # Component builder functions + initializePage()
│   ├── mobile-menu.js            # Mobile menu toggle + scroll progress bar + header glass effect
│   └── gradient.js               # WebGL animated gradient background (Stripe-style)
├── projects/                     # Individual project detail pages (standalone HTML)
│   ├── project-bt-segway.html
│   ├── project-can-fiber.html
│   ├── project-can-2b.html
│   ├── project-stirling-fridge.html
│   ├── project-comm-verification.html
│   └── project-motordriver-v6-4.html
├── photos/                       # All images organized by project
│   ├── profile.jpg
│   ├── logos/                    # Company logos for experience cards
│   └── project-*/               # Project-specific images
└── documents/                    # Resume PDF
```

### Script Load Order (critical)
1. `js/config.js` — defines SITE_CONFIG and ICONS globals
2. `js/components.js` — component builders, calls `initializePage()` on DOMContentLoaded
3. `js/mobile-menu.js` — scroll bar, header glass effect, mobile menu (runs IIFE + DOMContentLoaded)
4. `js/gradient.js` — WebGL gradient canvas (runs immediately)

Project pages use `../js/config.js`, `../js/components.js`, `../js/gradient.js` (no mobile-menu.js in some).

## Content Updates

### To add/edit content on the main page
Edit `js/config.js` → `SITE_CONFIG` object. Sections:
- `personal` — name, photo, title, tagline
- `social` — github, linkedin, email URLs
- `about` — paragraphs with HTML spans for highlights
- `education` / `resume` — education, contact, links
- `experience[]` — array of experience objects (id, role, company, location, period, logo, responsibilities[])
- `projects[]` — array of project cards (id, title, tools, description, link)
- `navigation[]` — nav items (name, href)
- `contact` — heading, description
- `assets` — resume PDF path

### To add a new project
1. Add entry to `SITE_CONFIG.projects` in `config.js`
2. Create new `projects/project-name.html` by copying an existing project page
3. Add images to `photos/project-name/`

## Design System & Conventions

### Fonts
- **Primary (body + headings):** Oxanium (`font-sans`, `font-display`)
- **Accent (unused currently):** Raleway (`font-accent`)
- Loaded via Google Fonts CDN

### Color Palette
- **Background:** WebGL animated gradient (dark purples: #6b5f94, #523f9e, #41327e, #31255e)
- **Primary accent:** Purple #c4b5fd (used for glows, titles, badges, dividers)
- **Secondary accent:** #a78bfa (highlights, section labels)
- **Text primary:** gray-100 (#f3f4f6)
- **Text secondary:** gray-300 (#d1d5db)
- **Text muted:** gray-400 (#9ca3af)

### Global Scale
`html { font-size: 85%; }` — all rem-based values scale to 85% of default 16px.

### Typography Hierarchy (project pages)
- **Page title:** `text-5xl font-display font-light tracking-wider text-gray-100 text-center mb-24`
- **Section heading (h2):** `text-4xl font-display font-light tracking-wider text-purple-200 mb-6`
- **Subsection heading (h3):** `text-2xl font-display font-medium tracking-wide text-purple-300 mb-4`
- **Sub-subsection (h4):** `text-xl text-purple-300 mb-4`
- **Body text (p):** `text-lg text-gray-300 mb-8` (or mb-6, mb-4 depending on context)
- **Bullet lists:** `list-disc text-lg text-gray-300 mb-8 ml-4 space-y-2` with `<li class="pl-2">`
- **Simple lists:** `list-disc list-inside text-lg text-gray-300 space-y-2`

### Section Labels (main page)
```html
<p class="section-label text-xl">// SectionName</p>
<h2 class="text-5xl font-display font-light tracking-wider text-gray-100 text-center">Section Title</h2>
<div class="section-divider"></div>
```
- Section label: uppercase with `//` prefix, purple (#a78bfa), centered
- Section divider: thin gradient line, 3rem wide, centered, `margin: 1.5rem auto 5rem auto`

### Horizontal Dividers (project pages)
Two widths used:
- **Full-width** (between major sections): `w-full`
- **Half-width** (between subsections): `w-1/2`

```html
<!-- Full-width divider -->
<div class="mx-auto my-8 w-full h-px rounded" style="background: linear-gradient(90deg, #efe8ff 0%, #d6c2ff 40%, #b799ff 65%, #8a5bff 100%); box-shadow: 0 0 8px rgba(138,91,255,0.12);"></div>

<!-- Half-width divider -->
<div class="mx-auto my-8 w-1/2 h-px rounded" style="background: linear-gradient(90deg, #efe8ff 0%, #d6c2ff 40%, #b799ff 65%, #8a5bff 100%); box-shadow: 0 0 8px rgba(138,91,255,0.12);"></div>
```

### Image Placement Patterns

**Single centered image with caption:**
```html
<div class="mb-12 w-3/4 mx-auto">
    <img src="../photos/project-name/image.png" alt="Description" class="rounded-lg shadow-lg mb-2 w-full object-cover">
    <p class="text-base text-gray-200 text-center mb-8">Caption text</p>
</div>
```
- Width options: `w-full` (full content width) or `w-3/4` (75%, centered with mx-auto)
- Always: `rounded-lg shadow-lg mb-2 object-cover`
- Caption: `text-base text-gray-200 text-center`

**Side-by-side images (2 images):**
```html
<div class="flex flex-col md:flex-row gap-6 mb-8 mt-8 w-full justify-center md:items-end">
    <div class="flex flex-col items-center w-full md:w-auto">
        <img src="..." alt="..." class="rounded-lg shadow-lg mb-2 w-full md:w-auto h-auto">
        <p class="text-base text-gray-200 text-center">Caption 1</p>
    </div>
    <div class="flex flex-col items-center w-full md:w-auto">
        <img src="..." alt="..." class="rounded-lg shadow-lg mb-2 w-full md:w-auto h-auto">
        <p class="text-base text-gray-200 text-center">Caption 2</p>
    </div>
</div>
```

**Side-by-side with constrained height:**
```html
<div class="flex flex-col md:flex-row gap-6 mb-12 mt-8 w-full justify-center md:items-start">
    <div class="flex flex-col items-center w-full md:flex-1 md:max-w-sm">
        <img src="..." alt="..." class="rounded-lg shadow-lg mb-2 w-full h-auto md:h-80 md:w-auto md:object-contain">
        <p class="text-base text-gray-200 text-center">Caption</p>
    </div>
    <!-- repeat for second image -->
</div>
```

### Project Page Structure (template)
Every project page follows this structure:
1. Same `<head>` boilerplate (Tailwind CDN, Oxanium/Raleway fonts, `../css/custom.css`)
2. `<canvas id="gradient-canvas">` — WebGL background
3. `<div id="scroll-progress-bar">` — scroll indicator
4. Shared header with nav (identical across all pages, links use `../index.html`)
5. Back button: `<a href="../index.html#projects">` with left arrow SVG
6. Project title: `text-5xl` centered, `mb-24`
7. Content in `<div class="max-w-3xl mx-auto w-full">` (some pages use a wrapping `<div>` without max-w and put max-w-3xl on inner sections)
8. Scripts: `../js/config.js`, `../js/components.js`, `../js/gradient.js`

### Component Classes
- **Experience cards:** `.exp-gradient-spawn` — glassmorphism card with animated gradient border glow on hover
- **Project cards:** `.project-card` — gradient overlay on hover with "Click to Learn More" overlay
- **Tool badges:** `.tool-badge` — purple pill badges for technologies
- **Hero social icons:** `.hero-social-icon` — circular buttons with slide-up fill animation
- **About photo:** `.about-photo-wrapper` → `.about-photo-frame` → `.about-photo-img` — glow border on hover
- **About highlights:** `.about-highlight` — purple text with glow for emphasized terms

### Content Container Widths
- Main page outer: `max-w-8xl` (90rem / 1440px)
- Project content: `max-w-3xl mx-auto` (48rem)
- Project title: `max-w-4xl mx-auto` or `max-w-5xl mx-auto`
- Experience section: `max-w-6xl mx-auto`
- About section: `max-w-6xl mx-auto`

## Critical Element IDs (do not rename)
- `gradient-canvas`, `scroll-progress-bar`, `site-header`
- `desktop-nav`, `mobile-nav`, `mobile-menu`, `mobile-menu-button`
- `hamburger-icon`, `close-icon`
- `header-social`, `header-social-mobile`
- `home-content`, `about-content`, `experience-container`, `projects-grid`, `contact-content`
- `header-name`, `copyright-text`

## Common Patterns to Follow

### Text with highlighted terms (About section)
```html
<span class="about-highlight">Highlighted Term</span>
```

### Adding experience
Add object to `SITE_CONFIG.experience` array with: `id`, `role`, `company`, `location`, `period`, `logo`, `responsibilities[]`

### Adding a project card
Add object to `SITE_CONFIG.projects` array with: `id`, `title`, `tools` (comma-separated string), `description`, `link`

## Project Template Workflow

### Overview
Tiger writes `.txt` template files in `project-templates/` with a simple markup syntax. Claude converts them into full HTML project pages and auto-adds the project card to `SITE_CONFIG.projects` in `config.js`.

### File Naming
Template filename matches output: `project-templates/project-xyz.txt` → `projects/project-xyz.html`
Images must already exist in `photos/project-xyz/` before generation.

### Template Syntax

```
[config]
id: project-xyz
title: My Project Title
tools: Altium Designer, C++, PCB Design
card-description: Brief one-liner for the main page project card

[content]
[h2: Overview]
[text: This project involved designing...]

[h2: Schematic]
[text: This section outlines...]
[img-full: schematicOverview.png | Main schematic overview]

[h3: Power Section]
[text: The power section uses...]
[img: powerSection.png | Power section detail]

[h3: MCU]
[text: The MCU interfaces with...]
[img-row: frontView.png | Front View, backView.png | Back View]

[list:
- First bullet point
- Second bullet point
]
```

### Syntax Reference
| Tag | Renders As |
|-----|-----------|
| `[h2: Title]` | Section heading (text-4xl, purple-200). Auto full-width divider before it (except the first h2). |
| `[h3: Title]` | Subsection heading (text-2xl, purple-300). Auto half-width divider before it. |
| `[h4: Title]` | Sub-subsection heading (text-xl, purple-300). No auto divider. |
| `[text: ...]` | Paragraph (text-lg, gray-300, mb-8). Multi-line OK. |
| `[list: - item1 - item2]` | Bulleted list (list-disc, text-lg, gray-300, ml-4, space-y-2, li has pl-2). |
| `[list-simple: - item1 - item2]` | Simple list (list-disc list-inside, text-lg, gray-300, space-y-2). |
| `[img: filename.png \| Caption]` | Single centered image, w-3/4, with caption. |
| `[img-full: filename.png \| Caption]` | Single centered image, w-full, with caption. |
| `[img-row: f1.png \| Cap1, f2.png \| Cap2]` | Side-by-side images (flex-row on md). |
| `[img-row-constrained: f1.png \| Cap1, f2.png \| Cap2]` | Side-by-side with md:h-80 height constraint. |
| `[line]` | Explicit full-width divider (override auto behavior). |
| `[line-half]` | Explicit half-width divider. |

### Image Path Resolution
Image filenames in templates are relative to `photos/{project-id}/`. So `[img: schematic.png | ...]` resolves to `../photos/project-xyz/schematic.png` in the HTML.

### Auto-Generated Elements
When Claude processes a template:
1. Creates `projects/project-xyz.html` with full boilerplate (head, gradient, header, back button, scripts)
2. Page `<title>` = `{title} - Tiger Zhou - 周觉林`
3. Visible h1 = just `{title}`
4. Appends entry to `SITE_CONFIG.projects` array in `config.js` using config section values
5. Dividers are auto-inserted: full-width before h2 (except first), half-width before h3

## Do NOT
- Remove or rename critical element IDs listed above
- Add a build step for Tailwind (uses CDN)
- Remove `_config.yml` (disables Jekyll for GitHub Pages)
- Change the script load order
- Use inline styles where Tailwind classes or existing CSS classes exist
- Add `font-display` declarations outside of `custom.css` (Tailwind CDN doesn't scan JS)
