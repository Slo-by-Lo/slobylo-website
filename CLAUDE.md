# slobylo.com — Project Handover for AI Assistants

Read this file in full before making any change to this repository.
It explains what this site is, how it was built, how it is hosted, and the rules every edit must follow.

---

## 1. What this is

**slobylo.com** is the marketing website for **Slo · by Lo**, a luxury wellness consultancy founded by **Tanisha Lo**.
Slo designs signature wellness events, residencies, programming, practitioner teams and spa identity for hotels and resorts, restaurants, property developers, and fashion and lifestyle brands across Southeast Asia.

- Audience: hotel GMs, F&B and lifestyle directors, developers, brand marketing leads
- Tone: editorial, minimal, confident — closer to a fashion house than a spa (think Aesop, Bottega Veneta, Kinfolk)
- Contact: tanisha@slobylo.com · Bali + Singapore

The original design brief is `slo-website-design-brief.md` (kept in the Claude.ai project "Webdesigner"; ask the owner for it if it is not in this repo). Copy, pricing and positioning in the brief were approved by the founder.

---

## 2. Current status (October 2026)

| Item | Status |
|------|--------|
| Site built | Done — single-page static site (redesigned Oct 2026) |
| Repo | `github.com/Slo-by-Lo/slobylo-website` (public, branch `main`) |
| Hosting | GitHub Pages, deploying from `main` / root |
| Domain | slobylo.com, registered at Namecheap, DNS pointed to GitHub |
| HTTPS | Done — certificate issued, **Enforce HTTPS** on |
| Email tanisha@slobylo.com | **Not set up yet.** The site links to it in several places; enquiries will bounce until it exists |
| Photography | One founder portrait (`assets/tanisha.jpg`) in `#about`. No other imagery yet |

### Founder approval
Tanisha approved all current site copy in October 2026, including the redesign's wording: hero, tagline, quote, services, sample evening, About bio and credentials, and the no-prices approach.

---

## 3. How it was built

- Built by Claude (claude.ai, Opus) from the design brief, in one pass, October 2026.
- Plain HTML + CSS + a few lines of inline vanilla JS (no separate script file). **No framework, no build step, no dependencies.** Keep it that way unless there is a strong reason.
- Fonts load from Google Fonts. Nothing else is loaded externally.
- Checked at 1440px desktop and 390px mobile with no horizontal scroll.

### File map

| File | Purpose |
|------|---------|
| `index.html` | The entire site: every section, all copy, and the small inline menu script |
| `styles.css` | All styling. Brand tokens are CSS variables in `:root` at the top |
| `assets/tanisha.jpg` | Founder portrait used in `#about` (960×1200) |
| `assets/slo-logo.svg` | **Master logo** (vector): three organic rings + dot on navy. Use this file whenever the logo is needed elsewhere |
| `favicon.svg` | The logo for the browser tab (same shapes, heavier lines so it reads at 16px) |
| `CNAME` | Contains `slobylo.com` — tells GitHub Pages the custom domain. **Do not delete** |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. **Do not delete** |
| `README.md` | Short human-facing summary and deploy steps |
| `CLAUDE.md` | This file |

### Page sections (top to bottom, with HTML ids)

1. Navigation (fixed, `#top`): logo left; Services · The evening · About. No CTA button
2. Hero: dark navy, approved headline and subhead, the logo large and faint in the background, tagline + email at the foot; text fades in once on load
3. `#services` "What your team cannot build alone." — a five-row ledger: Signature Event · Residency · Programming · Team & Practitioners · Consultancy. No prices
4. `#how` "Start with one evening." — Discover → Commit → Build
5. `#evening` A sample evening (dark section): 17:00 Arrival · 17:30 Movement · 18:15 Healing · 19:15 The table
6. `#why` "Built from inside the operation." — insider advantage · curatorial eye · cross-property network
7. Quote block: approved closing statement, attributed to Tanisha Lo, dark full-bleed
8. `#about` Founder portrait, name and title; pull quote, bio and credentials
9. `#contact` "Tell Slo about your business." — large mailto link; Slo replies with a proposal
10. Footer: logo, email, location, ©

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
- Light sections: navy headings, `rgba(22,32,46,0.6)` body, goldD accents.
- Dark sections: cream headings, `rgba(237,232,222,0.6)` body, gold accents.
- Never pure black or pure white. Use only these tokens.

### Logo
- Three organic, slightly wavy rings around a solid dot (added Oct 2026, replacing the earlier oval rings). The master is `assets/slo-logo.svg`; do not redraw it.
- In the page it is the `<symbol id="mark">` at the top of `index.html`, used by the nav and footer. Inner two rings take `currentColor` (cream on dark, navy on light); the outer ring and dot use `--ring` / `--dot`, set on `.logo .mark` and `.logo--ink .mark` in `styles.css`.
- The hero background uses the same shapes at very low opacity.

### Typography
- Headings: **Cormorant Garamond, italic, weight 300**. Never bold.
- Body: **Plus Jakarta Sans, weight 300**, ~0.82–0.88rem, line-height ~1.8.
- Small labels (`.note`, e.g. under service names and the founder's name): ~0.78rem, sentence case. The redesign has no uppercase eyebrow labels above headings.

### Layout
- Max width 1200px. Horizontal padding `clamp(24px, 6vw, 72px)`, 16px on mobile.
- **No rounded corners** (except small circular dots, e.g. the credential bullets). **No shadows.** **No gradients.**
- Dividers: 1px, subtle. Card grids use 1px gaps over a coloured parent to create hairline dividers.
- Motion: one slow opacity fade on the hero text at load. Nothing else animates. Respect `prefers-reduced-motion`.
- No stock icons, no testimonial carousels, no booking widgets or calendar embeds — all enquiries go to email.

### Copy
- Short sentences. Headings are claims or provocations, never labels ("What your team cannot build alone." not "Our Services").
- **Never use:** holistic, journey, transformative, wellness ritual, self-care, sacred, heal your body, empowering.
- Prefer: curated, authored, intentional, considered, distinct, precisely, quietly.
- "Slo" in third person for the brand. "I" only in Tanisha's bio.
- **No prices on the site** (decision, Oct 2026 — overrides the original brief). Services are described without fees; visitors email and Slo replies with a proposal. Internal reference prices are in the founder's brief — do not publish them.

### Approved copy — do not change without the founder's sign-off
Approved by Tanisha, October 2026.
- Hero: "We design the wellness experiences that define your brand."
- Subhead: "From a single signature event to full programming strategy, practitioner teams, and spa identity — Slo brings the creative direction and operational fluency your in-house team cannot build alone."
- Tagline: "Michelin-level wellness, curated for luxury hospitality and lifestyle brands."
- Quote: "Your team is world-class at running the business. Slo is built to design the experiences that define it." — Tanisha Lo, Founder

---

## 7. Adding photography (future)

- Store in `/assets` (where the portrait already is). Export as WebP, ~2000px wide, under ~400 KB each. Always set `alt` text and `width`/`height`.
- Direction: golden hour, Bali/SEA, water, stone, linen, skin, botanicals; candid and editorial; warm shadows, desaturated highlights, film-like.
- Never: bright white studio shots, activewear hero shots, smoothie bowls, anything stock-looking.
- The founder portrait already lives in `#about`. Next natural home: the `#evening` section. The hero may take one full-bleed image only under a heavy navy overlay.

---

## 8. Open to-dos

- [x] DNS pointed to GitHub, **Enforce HTTPS** on
- [ ] Set up the tanisha@slobylo.com mailbox (Namecheap Private Email, Google Workspace or similar) via Namecheap Mail Settings
- [x] Tanisha approved all site copy (Oct 2026)
- [ ] Add more photography (portrait done)
- [ ] Optional: an Open Graph share image (`og:image`) so links preview nicely on WhatsApp/LinkedIn
- [ ] Invite Tanisha to the Slo-by-Lo GitHub organization
