# Arul Muruga — Executive Profile

A single-page executive profile built with React and Vite. It is written and
designed for senior engineering leaders and programme managers: outcomes first, then
programme detail, career arc, technical depth and contact.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build      # production build in dist/
npm run preview    # preview the production build
```

The site uses a relative base path (`base: "./"` in `vite.config.js`), so the
contents of `dist/` can be hosted at a domain root or in a subdirectory.

## Editing content

All copy and links live in one place:

- `src/data.js` — impact metrics, programme phases, career arc, expertise,
  operating principles, project details, LinkedIn/GitHub links and CV URLs.
- `src/components/` — one component per section.
- `src/components/AtsCheck.jsx` — the ATS check UI (paste or upload a job
  description, then show the score, breakdown and gaps).
- `src/ats.js` — the keyword/requirements taxonomy and scoring logic behind the
  ATS check.
- `scripts/cv-content.mjs` — the single source of truth for the EU-format CV.
- `src/styles.css` — design tokens, typography, layout and responsive rules.

The visual system is deliberately formal: warm paper background, hairline
rules, Source Serif 4 for headings and Inter for body copy. Colour comes from
a fixed four-hue accent palette — navy, teal, ochre and rust — assigned by
section and used only on rules, numerals, labels and small surfaces. There are
no decorative gradients, glows or illustrations.

Assets:

- `public/Arul_Muruga_EU_CV.pdf` — the primary, English EU-format CV served by
  every “Download EU CV” link.
- `public/Arul_Muruga_EU_CV.docx` — the editable English Word version.
- `public/Arul_Muruga_EU_CV_DE.pdf` / `.docx` — German EU-format CV.
- `public/Arul_Muruga_EU_CV_FR.pdf` / `.docx` — French EU-format CV.
- `public/Arul_Muruga_Resume.docx` — legacy download filename, kept for old
  links; it now contains the same current English CV as `Arul_Muruga_EU_CV.docx`.
- `public/og-cover.png` — 1200 × 630 social share image, referenced by the
  Open Graph and Twitter meta tags. Update `og:image` to an absolute URL after
  the site is deployed so LinkedIn and other platforms can fetch it reliably.
- `public/favicon.svg` — monogram favicon.

The Contact section keeps every CV download compact: English on one line, then
German and French together on the next line.

Regenerate all six EU CV files after editing `scripts/cv-content.mjs`:

```bash
npm run cv
```

The ATS check runs entirely in the browser. It reads pasted text or extracts
text from PDF, DOCX, TXT and Markdown files locally; no job description is
uploaded or stored. It is a transparent requirements/keyword check, not an
employer’s proprietary ATS.

## Deployment

Netlify and Vercel both detect Vite automatically:

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

The repository ships with `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` on every push to `main`. One-time setup:

1. Create a repository on GitHub and push `main` to it.
2. In **Settings → Pages → Build and deployment**, set **Source** to
   **GitHub Actions** (or run `gh api -X POST
   repos/OWNER/REPO/pages -f build_type=workflow`).
3. Open `https://<username>.github.io/<repository>/` once the workflow finishes.

The relative base path (`base: "./"`) means the site works under
`/repository-name/` without further configuration.

All six CV files are static assets in `public/` and are included in the build.

## Accessibility & performance

- Automated axe-core scan against WCAG 2.1 A/AA and best practices: no
  violations at desktop, tablet and mobile widths.
- Skip link, visible focus states, keyboard-operable navigation, mobile menu
  that closes on Escape and returns focus, reduced-motion support, and
  semantic landmarks/headings.
- Fonts are bundled locally with `@fontsource-variable`; no runtime font
  requests. No animation or UI libraries are included beyond React and
  Lucide icons.
