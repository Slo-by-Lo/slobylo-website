# slobylo.com

Static website for **Slo · by Lo** — Tanisha Lo's luxury wellness consultancy.
Plain HTML/CSS/JS. No build step, no framework, no dependencies.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole site — every section, all copy |
| `styles.css` | All styling. Brand colours are tokens at the top (`:root`) |
| `main.js` | Nav fill on scroll, mobile menu, footer year |
| `favicon.svg` | Browser-tab icon (logomark) |
| `CNAME` | Tells GitHub Pages to serve the site at slobylo.com |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Page sections (in order, as HTML ids)

`#top` hero · `#services` · `#how` pipeline · `#work` flagship evening · `#pricing` full services table · quote · `#why` · `#about` · `#contact` · footer

## Editing rules (for whoever maintains this — human or Claude)

Follow the design brief (`slo-website-design-brief.md`). The essentials:

- Fonts: Cormorant Garamond italic 300 for headings, Plus Jakarta Sans 300 for body. Never bold headings.
- Colours: only the tokens in `styles.css :root`. No pure black or white.
- No rounded corners, no shadows, no gradients (except the faint radial glows already in the dark sections).
- Copy: short sentences. Never use *holistic, journey, transformative, wellness ritual, self-care, sacred, heal your body, empowering*. Headings are claims, not labels. Prices always in SGD.
- "Slo" in third person; "I" only in Tanisha's bio.

## Deploy — GitHub Pages + Namecheap

1. Push these files to the root of `main` in `Slo-by-Lo/slobylo-website`.
2. GitHub repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
   (Free GitHub accounts need the repo to be **public** for Pages.)
3. Namecheap → Domain List → slobylo.com → **Advanced DNS**. Remove the default parking records, then add:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | slo-by-lo.github.io. |

4. Back in **Settings → Pages**, confirm the custom domain shows `slobylo.com`, wait for the DNS check to pass (minutes to a few hours), then tick **Enforce HTTPS**.

## Adding photography later

Put images in an `/images` folder, export as WebP around 2000px wide (under 400 KB each), and follow the photography direction in the brief: golden hour, film-like grade, never stock. The `#work` section is the natural first home for event imagery.
