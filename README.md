# Tabakly

Tabakly is an early-stage food-surplus technology project based in Ankara,
Türkiye. The team is currently validating the problem and a proposed operating
model with food businesses and consumers. This repository currently contains a
prototype being evolved into a research-focused landing page; it is not an
operating ordering marketplace.

## Current project status

Phases 1-5 establish the project foundation, semantic Tabakly theme,
production-format brand asset set, complete English/Turkish content system, and
an awareness-first information architecture. The page now introduces Tabakly
through a focused Problem, Tabakly Model, Benefits, Survey, privacy/KVKK, and
Contact flow without claiming a live marketplace or achieved impact. Team, FAQ,
and research-heavy future-direction sections were removed in the subsequent
awareness-page revision. Later phases will add approved legal facts, broader
accessibility work, SEO, performance work, and verified Render deployment.

The supplied [`public/logo.svg`](./public/logo.svg) is the geometry master.
The supplied PNG and earlier JPG remain unchanged as archival references; the
application uses clean derivatives from [`public/brand`](./public/brand).

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 through PostCSS
- Biome for formatting and linting
- npm with a committed lockfile

## Requirements

- Node.js 24.x
- npm 11.16.0

These versions match the tested foundation and are declared in `package.json`.
The existing Render service still needs to be inspected in Phase 12 to confirm
that its runtime honors the repository pin before deployment.

## Local setup

1. Install the locked dependencies:

   ```bash
   npm ci
   ```

2. Copy the environment template:

   ```bash
   cp .env.example .env.local
   ```

   In PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open <http://localhost:3000>.

On managed Windows devices, an Application Control policy may block Next.js's
native SWC binary. Use an approved supported development environment or CI host
if that policy is enforced; it is not an application-source failure.

## Environment variables

| Variable | Visibility | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_MERCHANT_SURVEY_URL` | Browser-visible | Approved food-business research survey URL |
| `NEXT_PUBLIC_CONSUMER_SURVEY_URL` | Browser-visible | Approved consumer research survey URL |
| `SITE_URL` | Server-only | Canonical production origin for metadata and sitemap generation |

All values are currently optional during foundation work. Survey components
will validate the two public URLs and show a contact fallback when they are
integrated. Never put secrets in a `NEXT_PUBLIC_*` variable.

The survey URLs must be available at build time in production because Next.js
inlines public environment variables into browser bundles.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve an existing production build |
| `npm run lint` | Run Biome formatting, lint, and import checks |
| `npm run format` | Apply Biome formatting |
| `npm run typecheck` | Run strict TypeScript checks without emitting files |

There is no automated test suite yet. The implementation plan proposes a
development-only browser test tool for the later responsive/accessibility phase,
subject to approval.

## Source structure

```text
src/
|-- app/                 # App Router entries, global styles, and error pages
|-- components/
|   |-- sections/        # Research landing-page sections
|   `-- ui/              # Small shared theme primitives
|-- lib/                 # Shared and server-side locale resolution
`-- locales/             # Key-matched English and Turkish dictionaries

public/
|-- brand/          # Production logo, favicon, and social-preview exports
|-- hero-images/    # Current local photography
|-- logo.svg        # Supplied geometry master; retained unchanged
|-- logo.png        # Supplied archival raster; retained unchanged
`-- logo.jpg        # Earlier beta raster; retained unchanged
```

The application currently exposes only `/`. There are no API routes, backend,
database, authentication, payment, analytics, or ordering features.

## Brand assets

Artwork uses the logo-specific colors dark green `#305B3F`, citrus orange
`#FF7A00`, and cream `#F9F4EF`. These values intentionally remain distinct from
the broader interface theme where required to preserve the supplied artwork.
All production SVGs are self-contained paths: they contain no embedded raster
data, live fonts/text, scripts, or external references.

| Asset | Dimensions | Intended use |
| --- | ---: | --- |
| `tabakly-logo-full.svg` / `.png` | 1500 x 1500 SVG; 1600 x 1600 PNG | Square full lockup |
| `tabakly-logo-horizontal.svg` / `.png` | 1760 x 512 | Responsive header/footer lockup |
| `tabakly-mark.svg` | 512 x 512 | Compact mobile mark |
| `tabakly-logo-dark.svg` | 1380 x 470 | Dark-green artwork for light surfaces |
| `tabakly-logo-light.svg` | 1380 x 470 | Cream artwork for dark surfaces |
| `favicon.svg` / `.png` | 512 x 512 | Browser/icon source |
| `favicon.ico` | 16, 32, 48, and 256 px | Multi-size browser fallback |
| `apple-touch-icon.png` | 180 x 180 | Apple touch icon |
| `social-preview.svg` / `.png` | 1200 x 630 | Reproducible sharing artwork and raster export |

The original files are preserved byte-for-byte for provenance and rollback:

- `public/logo.svg` — SHA-256
  `422DEF3ED0A804F3275F4E1B765A8227F9D777730FA23981E595A181CF3DF8CA`
- `public/logo.png` — SHA-256
  `BA1FA13D6F47F80A408E2859563BCC57A1DD03862E3DC3115A4256AF94CFEE54`
- `public/logo.jpg` — SHA-256
  `E29E4DFA2CF463F8E5FA7D435AA28C263583AD65598C7039D53F116922D5A53E`

The supplied PNG contains Canva/XMP creator and template identifiers, so it is
archival only and is not referenced by the application. Clean derivatives omit
that source metadata. If the derived set needs to be rolled back, restore the
previous component/icon references and remove only `public/brand`; do not alter
the three supplied originals. Founder confirmation of ownership, licensing,
exclusivity, and trademark suitability remains a gate before public release.

## Translation structure

Complete, key-matched dictionaries live at:

```text
src/locales/en.json
src/locales/tr.json
```

All visible copy, localized metadata, errors, survey fallbacks, navigation, and
footer content resolve from these dictionaries. Import-time shape validation
fails the development/build process if Turkish has a missing/extra path or a
different array structure. Runtime automatic machine translation is not used.

The initial locale precedence is a valid `tabakly_locale` cookie, then a request
`Accept-Language` value beginning with `tr`, then English. The EN/TR selector
writes the functional cookie for one year, mirrors the choice to `localStorage`,
updates the document language, and refreshes server-rendered content. It does
not redirect or render both languages. Because locale resolution reads request
headers/cookies, `/` and the custom not-found response are dynamically rendered
instead of receiving full-page static caching.

English remains the stable fallback. The Turkish copy requires qualified/native
review before public release; edits must preserve dictionary shape parity.

## Theme structure

Tailwind 4 is loaded from `src/app/globals.css` using CSS-first configuration.
The same file defines the approved RGB-channel brand palette, supporting
accessible role tokens, global focus/reduced-motion behavior, and narrow recipes
for buttons, navigation links, and future form fields. Tailwind semantic names
such as `brand-dark`, `brand-surface`, `brand-accent-strong`, `ink-muted`, and
`border-strong` are used instead of generic palette colors.

Reusable components live in `src/components/ui`:

- `ButtonLink` for primary and secondary CTA links
- `Card` for default and inverse content surfaces
- `Container` for consistent content width and gutters
- `SectionHeading` for section title groups
- `Tag` for status/badge treatments

The lively green and citrus orange remain the exact approved brand colors, but
they are restricted to suitable accents because white text on them does not meet
WCAG AA. Verified combinations used by the interface include:

| Combination | Contrast |
| --- | ---: |
| White on deep green primary action | 8.35:1 |
| Deep green on white | 8.35:1 |
| Deep green on cream | 7.83:1 |
| Deep green on sage tag | 5.05:1 |
| Strong green text/icon on white | 5.02:1 |
| Strong orange text on white | 5.18:1 |
| Muted body text on white | 6.80:1 |
| Strong control border against white | 4.12:1 |

Opacity modifiers use Tailwind 4's generated `color-mix()` output. The automatic
starter dark mode was removed because no complete dark theme has been approved.

## Survey configuration

The page has separate, localized Food Business Survey and Consumer Survey
cards. Their destinations are read from the two `NEXT_PUBLIC_*` environment
variables and validated with the platform URL API; production accepts only
`https:` destinations. When a value is absent or invalid, the card remains
visible without creating a broken link or displaying a “Not Open Yet” label.
Phase 6 still needs the approved contact fallback and complete reviewed
privacy/KVKK facts. Do not hard-code provider URLs in components.

## Render deployment foundation

This project must run as a Node web service rather than publish `.next` as a
static directory.

- Install/build command: `npm ci && npm run build`
- Start command: `npm run start`
- Node runtime: `24.x`
- Package manager: `npm@11.16.0`
- Required production configuration: the survey URLs and `SITE_URL` when their
  integrations are implemented

No `render.yaml` or confirmed production URL is currently stored in the
repository. The actual Render service, runtime-pin behavior, environment values,
HTTPS, 404 behavior, and deployment rollback process must be verified before
release.

## Validation before a change is handed off

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Run tests as well once a test suite exists. Do not use `npm audit fix --force`;
review dependency advisories and compatible framework patches deliberately.

## Planning documents

- [`CODEBASE_AUDIT.md`](./CODEBASE_AUDIT.md)
- [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)

These documents record the baseline findings, phased scope, risks, rollback
strategy, acceptance criteria, and decisions still requiring founder approval.
