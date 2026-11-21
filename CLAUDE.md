# slobylo.com — Project Handover for AI Assistants

Read this file in full before making any change to this repository.
It explains what this site is, how it was built, how it is hosted, and the rules every edit must follow.

---

## 1. What this is

**slobylo.com** is the marketing website for **Slo**, a luxury wellness consultancy founded by **Tanisha Lo**.

**Positioning (Nov 2026):** Slo finds the wellness identity of a hotel, restaurant, fashion house or lifestyle brand and builds the offering that keeps guests coming back. Events are one format, not the product.

- Services: **The Signature Experience**, **The Build** and **The Partnership**. No prices shown.
- The evening section is a sample and the Examples section is illustrative. **Never present either as past client work.**

- Audience: hotel GMs, F&B and lifestyle directors, developers, brand marketing leads
- Tone: editorial, minimal, confident — closer to a fashion house than a spa (think Aesop, Bottega Veneta, Kinfolk)
- Contact: tanisha@slobylo.com. Based in Bali + Singapore. On the visible page the location appears only in the footer ("Bali and Singapore"), not in body copy (decision, Nov 2026). It also stays in the meta description and JSON-LD

The original design brief is `slo-website-design-brief.md` (kept in the Claude.ai project "Webdesigner"; ask the owner for it if it is not in this repo). The site has since been repositioned (Nov 2026, "Preview C"); where the brief and this file disagree, this file wins.

---

## 2. Current status (November 2026)

| Item | Status |
|------|--------|
| Site built | Done — single-page static site (redesigned Oct 2026, repositioned as a wellness-identity consultancy Nov 2026) |
| Repo | `github.com/Slo-by-Lo/slobylo-website` (public, branch `main`) |
| Hosting | GitHub Pages, deploying from `main` / root |
| Domain | slobylo.com, registered at Namecheap, DNS pointed to GitHub |
| HTTPS | Done — certificate issued, **Enforce HTTPS** on |
| Email tanisha@slobylo.com | Done — mailbox live (Nov 2026) |
| Photography | Founder portrait (`assets/tanisha-lo.jpg`) in `#about`, plus eight photos in `assets/photos/` (hero, the problem, sample evening ×4, Built from the inside, contact) — see §8 |

### Founder approval
The current copy, structure and photography are the approved "Preview C" design (November 2026). Copy edits, the navy Approach section and a new founder portrait followed on 16 November 2026. The Approach section ("How we find it.") was removed on 19 November 2026 and its "What you keep" list moved under Ways to work. It replaced the October 2026 copy (old hero, tagline, closing quote and the five-service ledger), which is retired.

---

## 3. How it was built

- Built by Claude (claude.ai, Opus) from the design brief, in one pass, October 2026.
- Plain HTML + CSS + a few lines of inline vanilla JS (no separate script file). **No framework, no build step, no dependencies.** Keep it that way unless there is a strong reason.
- Fonts are self-hosted in `assets/fonts/` (latin-subset variable woff2 files originally from Google Fonts, `font-display: swap`, declared at the top of `styles.css`). Nothing is loaded from external servers.
- Checked at 1440px desktop and 390px mobile with no horizontal scroll.

### File map

| File | Purpose |
|------|---------|
| `index.html` | The entire site: every section, all copy, and the small inline menu script |
| `styles.css` | All styling. Brand tokens are CSS variables in `:root` at the top |
| `assets/tanisha-lo.jpg` | Founder portrait used in `#about` (960×1200) |
| `assets/photos/` | Site photography (JPEG, web-ready): `hero-sea-silhouette`, `idea-terrace`, `evening-ceramic-wall`, `evening-sessions`, `evening-table`, `evening-beach-doorway`, `built-linen`, `contact-table`. Rules in §8 |
| `assets/slo-logo.svg` | **Master logo** (vector): three organic rings + dot on navy. Use this file whenever the logo is needed elsewhere |
| `favicon.svg` | The logo for the browser tab (same shapes, heavier lines so it reads at 16px) |
| `favicon-48x48.png`, `apple-touch-icon.png` | PNG versions of `favicon.svg` (48×48 and 180×180). Regenerate both if the favicon changes. `apple-touch-icon.png` is also the `logo` in the JSON-LD |
| `assets/og-image.png` | Share image for links (1200×630): "slo" wordmark + the hero line ("Every brand has a wellness identity. We find it.") on navy, logo rings faint on the right. Redrawn Nov 2026; if it changes, update `og:image:alt` too |
| `assets/fonts/` | Self-hosted fonts: Cormorant Garamond italic (300–400), Cormorant Garamond 300, Plus Jakarta Sans (300–600) |
| `assets/whatsapp.js` | Floating WhatsApp button (markup, styles, behaviour). Number and message are variables at the top. Its circle and soft shadow are an approved exception to §6 (Nov 2026) |
| `robots.txt`, `sitemap.xml` | Crawler rules and the sitemap — see §7 SEO |
| `CNAME` | Contains `slobylo.com` — tells GitHub Pages the custom domain. **Do not delete** |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. **Do not delete** |
| `README.md` | Short human-facing summary and deploy steps |
| `CLAUDE.md` | This file |

### Page sections (top to bottom, with HTML ids)

1. Navigation (fixed, `#top`): logo left; Experiences · Ways to work · About · Contact us
2. Hero: `hero-sea-silhouette.jpg` with the headline over it ("Every brand has a wellness identity. We find it."), subhead and a solid "Tell us about your brand" button to `#contact`. The photo fades into the navy (the one approved gradient); text fades in once on load
3. `#idea` The problem — "Most wellness looks the same everywhere." — followed by a full-width photo (`idea-terrace.jpg`)
4. `#range` Examples (no label) — "One method, a different answer each time.": Hotel · Restaurant · Fashion house · Lifestyle brand. **Illustrative, not client work**
5. `#evening` "One evening, imagined" (dark) — "Three sessions. One long table. Thirty guests.": 4:00 PM The Threshold · 5:00 PM Awaken, Float, Align · 6:15 PM The Long Table · 8:00 PM The Close, one photo per moment. **A sample, not a past event**
6. `#ways` Ways to work — "Three ways to work with Slo.": The Signature Experience · The Build · The Partnership, then "What you keep" and a second "Tell us about your brand" button. No prices
7. `#built` "Built from the inside." — three reasons beside `built-linen.jpg`
8. `#about` About (dark): pull quote, founder portrait, name and title, bio, credentials line (Monash, executive coach), LinkedIn link
9. `#contact` Contact — "Tell us about your brand.": prompts for what to send, a mailto button with a pre-filled subject and body (keep it exactly as written), `contact-table.jpg`
10. Footer: logo, email, "Bali and Singapore", LinkedIn, ©
11. Floating WhatsApp button (`assets/whatsapp.js`), bottom right. Appears after the hero or 3 seconds, and hides while the contact section or footer is on screen

---

## 4. Hosting and DNS setup (already done — for reference)

### GitHub Pages
Repo → Settings → Pages:
- Source: **Deploy from a branch**
- Branch: **main**, folder **/ (root)**
- Custom domain: **slobylo.com**
- Enforce HTTPS: tick once the DNS check is green

Every push to `main` redeploys the site automatically within about a minute.

### Namecheap DNS (Domain List → slobylo.com → Advanced DNS → Host Records)

| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | slo-by-lo.github.io. |

Default Namecheap parking records were removed. **Mail Settings** (further down the same Namecheap page) were not touched; email is set up there separately.

To verify DNS: `dig slobylo.com +short` should return the four 185.199.x.153 addresses.

---

## 5. How to make changes

### Recommended: Claude Code on the owner's computer
1. Open Claude Code in the local clone of `slobylo-website`.
2. **Always pull first:** `git pull` — edits may have been made directly on GitHub.
3. Make the change.
4. Preview: open `index.html` in a browser and check desktop and mobile widths.
5. Commit with a clear message and `git push` to `main`.
6. The live site updates in about a minute. Hard-refresh (Cmd+Shift+R) to see it.

### Small text fixes: directly on github.com
Open the file, click the pencil icon, edit, commit. Goes live immediately with no preview. Undo via commit history if needed.

### Giving someone access
Add them to the **Slo-by-Lo** GitHub organization (Organization settings → People → Invite member).

The site is intended to be maintained long-term by Tanisha using her own Claude setup.

---

## 6. Brand rules — every edit must follow these

### Colours (CSS variables in `styles.css`)
```
--navy   #16202E  primary dark background
--navyL  #1E2D40  dark panels
--navyM  #253549  secondary dark
--navyXL #0F1820  deepest dark (quote block)
--cream  #EDE8DE  light background
--creamL #F5F2EC  lighter light background
--creamD #E0D9CB  borders on light
--gold   #C4A87A  accent on dark, sparingly
--goldD  #8A7A58  accent on light
--muted  #6A7A8A  secondary text, labels
--blue   #4A6A8A  logo outer ring + dot on light backgrounds
--logoBlue #8CA8BF  logo only: outer ring + dot on dark backgrounds
```
- Text tokens: `--ink` / `--ink-soft` (navy at .88 / .76) on light, `--pale` / `--pale-soft` (cream at .86 / .72) on dark, `--goldInk #6B5D3F` for small labels on light.
- Light sections: navy headings, `--ink` body, goldInk labels.
- Dark sections: cream headings, `--pale` body, gold labels.
- Never pure black or pure white. Use only these tokens.

### Logo
- Three organic, slightly wavy rings around a solid dot (added Oct 2026, replacing the earlier oval rings). The master is `assets/slo-logo.svg`; do not redraw it.
- In the page it is the `<symbol id="mark">` at the top of `index.html`, used by the nav and footer. Inner two rings take `currentColor` (cream on dark, navy on light); the outer ring and dot use `--ring` / `--dot`, set on `.logo .mark` and `.logo--ink .mark` in `styles.css`.
- The large faint logo that used to sit behind the hero was removed in Nov 2026 when the hero photograph was added.

### Typography
- Headings: **Cormorant Garamond, italic, weight 300**. Never bold.
- Body: **Plus Jakarta Sans, weight 300, 17px** (`1.0625rem`), line-height 1.75.
- **Nothing below 14px.** Small labels (`.label`, e.g. "One evening, imagined", "What you keep") are 0.9rem (14.4px), weight 600, sentence case. As shipped, two bits of interface text sit under that: the skip link and the mobile "Menu" label. (The "BY LO" in the logo wordmark was removed in Nov 2026; the wordmark is now just "slo".) Do not add any more.

### Layout
- Max width 1200px. Horizontal padding `clamp(24px, 6vw, 72px)`, 16px on mobile.
- **No rounded corners.** **No shadows.** **No gradients**, with one approved exception: the hero fade (`.hero__photo::after` and `.hero::after`, which keep the headline readable over the photo). Do not add any other gradient.
- **Buttons are solid with square corners** (`.btn--light` on dark, `.btn--dark` on light). No outline or pill buttons.
- Dividers: 1px, subtle. Card grids use 1px gaps over a coloured parent to create hairline dividers.
- Motion: one slow opacity fade on the hero text at load. Nothing else animates. Respect `prefers-reduced-motion`.
- No stock icons, no testimonial carousels, no booking widgets or calendar embeds — all enquiries go to email.

### Copy
- Short sentences. Headings are claims or provocations, never labels ("Most wellness looks the same everywhere." not "The problem").
- **Never use:** holistic, journey, transformative, wellness ritual, self-care, sacred, heal your body, empowering.
- Prefer: curated, authored, intentional, considered, distinct, precisely, quietly.
- "Slo" in third person for the brand. "I" only in Tanisha's bio.
- **No prices on the site** (decision, Oct 2026 — overrides the original brief). The three ways to work are described without fees; visitors email and Slo replies. Internal reference prices are in the founder's brief — do not publish them.

### Approved copy — do not change without the founder's sign-off
All wording on the page is the approved "Preview C" copy (November 2026). Do not reword it, and keep the contact button's mailto link (subject and body) exactly as written. Anchor lines:
- Hero: "Every brand has a wellness identity. We find it."
- Subhead: "Slo defines what wellness means for your brand, then builds it: the evenings, the rituals, the people."
- Services: The Signature Experience (Find it), The Build (Make it), The Partnership (Keep it alive).

The October 2026 lines (old hero, the "Michelin-level wellness" tagline, the closing quote block, the five-service ledger) are retired from the page.

---

## 7. SEO and metadata

### Name formats
- The brand is **Slo** everywhere: titles, metadata, structured data, screen-reader labels and visible copy (decision, Nov 2026). "Slo by Lo" survives only in the domain (slobylo.com, and `slobylo` as the JSON-LD `alternateName`). Do not reintroduce "Slo by Lo" or "Slo · by Lo".
- Write the founder's name exactly as **Tanisha Lo**.
- **Never mention Regent or IHG** in metadata or structured data.

### What is in place
- `<title>`, meta description, Open Graph and Twitter tags in the `<head>` of `index.html`. The share image is `https://slobylo.com/assets/og-image.png`; meta image URLs must be absolute.
- One JSON-LD block in `<head>` with an `@graph`: `WebSite` (`#website`), `ProfessionalService` (`#organization`), `Person` (`#tanisha-lo`), linked by `@id`. The organisation `description` matches the meta description. The Person has no `sameAs` yet. Add her real LinkedIn/Instagram URLs there when available, and never commit placeholder URLs.
- `robots.txt` allows everything and points to the sitemap. `sitemap.xml` lists every page.

### Keep in sync
- `robots.txt`, `sitemap.xml` and the JSON-LD must stay consistent whenever pages are added, renamed or removed.
- **Every new page needs its own entry in `sitemap.xml`.** Update `<lastmod>` when a page's content changes meaningfully.
- If the description, logo, photo filename or email changes, update the matching JSON-LD fields too. Check that the JSON still parses before you push.

---

## 8. Photography

- Photos live in `assets/photos/` (the founder portrait stays at `assets/tanisha-lo.jpg`). They are web-ready; use the files as they are and do not re-compress them. Delete any photo the page no longer references.
- **Everything shown is a sample, not a past Slo event.** The evening section is a sample and the Examples section is illustrative. Never caption a photo, or write copy around either, as if it were real client work.
- **Do not use photos that show guests' faces or the venue's menu card.**
- The hero is the sea silhouette photo with the headline over it. The hero fade is the only approved gradient. No other gradients, shadows or rounded corners — photos sit as plain rectangles.
- The sample-evening section carries four photos, one per moment. Each sets its crop with an inline `--pos` on the `<figure>`.
- Every `<img>` needs descriptive `alt` text and `width`/`height` attributes. Only the hero image gets `fetchpriority="high"`; every other photo keeps `loading="lazy"` and `decoding="async"`.
- Direction for any future additions: golden hour, Bali/SEA, water, stone, linen, skin, botanicals; candid and editorial; warm shadows, desaturated highlights, film-like. Never bright white studio shots, activewear hero shots, smoothie bowls, or anything stock-looking.

---

## 9. Open to-dos

- [x] DNS pointed to GitHub, **Enforce HTTPS** on
- [x] Set up the tanisha@slobylo.com mailbox (Nov 2026)
- [x] Tanisha approved all site copy (Oct 2026)
- [x] Photography and repositioning to the approved "Preview C" design (Nov 2026)
- [x] Share image (`assets/og-image.png`) redrawn with the "slo" wordmark and hero line (Nov 2026)
- [ ] `README.md` still carries the old section list — refresh when convenient
- [x] Open Graph share image, structured data, sitemap, favicons (Oct 2026)
- [ ] Add Tanisha's LinkedIn and Instagram URLs to `sameAs` in the JSON-LD
- [ ] Invite Tanisha to the Slo-by-Lo GitHub organization
