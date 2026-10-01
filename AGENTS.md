# AGENTS.md

## What this is

Static single-page personal portfolio (Spanish, `lang="es"`) served by GitHub Pages from `main` root: https://nichagiro.github.io. No package manager, build, lint, tests, or CI. Preview by opening `index.html` or running any static file server. Deploy = push to `main`.

## Critical gotchas

- **CSS has no build step.** `index.html` loads `css/style.min.css` and `css/responsive.min.css`, *not* the unminified sources. After editing `css/style.css` or `css/responsive.css`, copy/minify into the matching `.min` file or your changes won't appear on the page.
- **No contact form.** Contact is WhatsApp-only: floating `wa.me/+573174865702` button plus links in the footer/about. The old Formspree form (`js/contactform.js`) was deleted — don't reintroduce it without asking.
- **Images go in `img/`** (WebP preferred). `.gitignore` excludes `/images/` — anything placed there won't be committed.
- **Fonts load from Google Fonts** (Syne, Schibsted Grotesk, JetBrains Mono) — page typography needs network; system fallbacks only offline.

## Structure

- `index.html` — the entire site (sections: `#home` hero, `#about`, `#service`, tech marquee, `#proceso`, footer — no contact section, no copyright/CC block in footer by design). All SEO metadata lives in its `<head>`: canonical, Open Graph, Twitter cards, and JSON-LD hardcode `https://nichagiro.github.io`. Keep them in sync when changing titles, descriptions, or images.
- `js/main.js` — jQuery site behavior (nav, preloader, smooth scroll, typed.js slider driven by `.text-slider-items` comma-separated text; typed is skipped when `prefers-reduced-motion`).
- `lib/` — vendored third-party libs. Only these are loaded: Bootstrap **4.1.3** (jQuery-based, `data-toggle` attributes — not Bootstrap 5), ionicons, jquery, easing, typed. `owlcarousel`, `lightbox`, `animate`, `popper`, `font-awesome`, `counterup` are unused leftovers; don't assume everything in `lib/` is in use.
- `google243c00d465d14304.html` — Google site verification. Don't delete.
- `sitemap.xml` / `robots.txt` — maintained by hand. Known stale: sitemap still references deleted `html/portafolio.html`.

## Conventions

- Site copy is in Spanish; write new content in Spanish.
- Commit history shows deliberate manual SEO tuning (meta description length, console cleanliness) — preserve existing meta tags rather than "cleaning them up".
- Repo-local skills in `.agents/skills/`: use `copywriting`, `frontend-design`, or `seo-audit` when editing page text, visuals, or SEO.
