# Tabakly Codebase Audit

Audit date: 29 July 2026
Scope: Phase 0 repository, source, dependency, build, runtime, content, design, accessibility, responsiveness, SEO, and deployment audit
Baseline commit: `fb6abac` (`main`)

## Executive summary

The repository is a small, understandable Next.js landing-page prototype and is a suitable foundation for the requested research site. There is no critical reason to migrate the framework or package manager. The highest risks are product credibility and conversion failure, not architecture:

1. The page describes Tabakly as an operating marketplace, while the company is still validating a proposed model.
2. Masked pseudo-statistics imply unverified food saved, customer savings, and partner-shop traction.
3. Every primary conversion path is broken: the hero routes do not exist and both survey URLs are literal placeholders.
4. There is no Turkish experience, language selector, team, FAQ, privacy/KVKK notice, or explicit Ankara market-research status.
5. The mobile header and hero CTA row are likely to overflow at the required narrow widths; the desktop navigation simply disappears below `lg`.
6. Accessibility, brand tokens, metadata, sharing assets, and Render documentation are incomplete.
7. The production source compiles and prerenders successfully under a diagnostic compiler fallback, but the exact default Next commands cannot load their native SWC binary on this managed Windows host because of system Application Control. This is an audit-environment restriction, not a source compile failure.
8. `npm audit --package-lock-only` reports three high-severity transitive findings in Next's nested PostCSS and Sharp dependency paths. The offered force-fix is unsafe because it proposes a breaking downgrade to Next 9.3.3.

Recommendation: retain Next.js, React, Tailwind, Biome, npm, and the current direct dependencies. Begin implementation with positioning and broken-path remediation, then establish the theme/content/i18n foundation before rebuilding sections.

## Audit scope and worktree note

- All tracked files, configuration, imports, routes, assets, scripts, dependency metadata, and recent Git history were inspected.
- No application source, configuration, dependency manifest, or existing asset was changed during Phase 0.
- `public/logo.jpg` appeared as an untracked file during the audit after the baseline inventory. After the audit, the user confirmed it is Tabakly's approved beta logo for current project use. It is a 1600 x 1600 raster reference and remains unmodified; optimized PNG/SVG variants are deferred. Its original creator/license provenance was not separately documented.
- Generated `node_modules`, `.next`, and `next-env.d.ts` outputs are ignored and are not deliverables.

## Phase 1 completion addendum

Phase 1 was authorized and implemented after this baseline audit. The following
baseline findings are now resolved in the working tree:

- Biome formatting/import issues and all 21 lint diagnostics
- Missing `typecheck` script and reproducible Node/npm project metadata
- Missing `.gitattributes`, `.env.example`, and environment-template exception
- Generic README and absent local/Render foundation documentation
- Missing route-level error and custom 404 pages
- Five unused create-next-app SVGs and `src/app/To-DO.txt`
- Inconsistent application import paths, invalid Hero hover utility, unsafe
  blank-target attributes, array-index key, unnecessary Navbar client boundary,
  unused Geist Mono load, and incorrect Geist variable consumption
- Broken Navbar logo anchor (`#hero` now points to the existing `#about` target)

The approved beta logo remains unchanged at `public/logo.jpg` (1600 x 1600,
139,514 bytes, SHA-256
`E29E4DFA2CF463F8E5FA7D435AA28C263583AD65598C7039D53F116922D5A53E`).
`hero-image-2.jpg` was retained pending final hero selection.

Phase 1 validation passed clean install, lint, type-check, diagnostic production
build, root HTTP 200, and custom HTTP 404 checks. At that point, the exact default
build was blocked by this managed Windows host's native-SWC Application Control
policy. The host issue was resolved before Phase 2 validation, and the exact
Turbopack production build now passes.
The three high-severity transitive audit findings and all product/content,
bilingual, survey, responsive, broader accessibility, SEO, and live Render work
remain assigned to later phases.

## Phase 2 completion addendum

Phase 2 was authorized and implemented after the foundation work. The working
tree now includes:

- The seven approved Tabakly RGB-channel tokens and accessible supporting roles
- Tailwind v4 semantic color names with verified alpha-modifier output
- Shared `ButtonLink`, `Card`, `Container`, `SectionHeading`, and `Tag` primitives
- Shared button, navigation-link, and future form-field CSS recipes
- Semantic color migration across every current section, error page, and 404
- A dual-color focus-visible indicator, forced-colors fallback, and
  reduced-motion override
- Removal of the incomplete starter automatic dark mode

Measured current-role contrast includes deep green/white `8.35:1`, deep
green/cream `7.83:1`, deep green/sage `5.05:1`, strong green/white `5.02:1`,
strong orange/white `5.18:1`, muted text/white `6.80:1`, and strong control
border/white `4.12:1`. The lively primary green and citrus orange remain exact
brand tokens but are not used for normal text or white-text controls because
those combinations fail WCAG AA.

Phase 2 validation passes Biome lint, strict TypeScript, the exact Turbopack
production build, generated alpha-color inspection, root HTTP 200, and custom
HTTP 404 checks. The approved beta logo remains byte-for-byte unchanged. Content,
brand-asset, bilingual, survey, full responsive/accessibility, SEO, and live
Render work remain assigned to their later phases.

Phase 2 added no dependency. The lockfile platform-metadata and transitive patch
refresh already present after the host SWC repair was preserved; the declared
dependency tree and production build validate cleanly.

## Phase 3 completion addendum

Phase 3 was authorized and implemented on 29 July 2026. The supplied
`public/logo.svg` is now the geometry master, while all three supplied originals
remain byte-for-byte unchanged:

- `public/logo.svg` — SHA-256
  `422DEF3ED0A804F3275F4E1B765A8227F9D777730FA23981E595A181CF3DF8CA`
- `public/logo.png` — SHA-256
  `BA1FA13D6F47F80A408E2859563BCC57A1DD03862E3DC3115A4256AF94CFEE54`
- `public/logo.jpg` — SHA-256
  `E29E4DFA2CF463F8E5FA7D435AA28C263583AD65598C7039D53F116922D5A53E`

The new `public/brand` set contains full (1500 x 1500 SVG and 1600 x 1600
PNG), horizontal (1760 x 512 SVG/PNG), compact mark (512 x 512 SVG), dark and
light wordmarks (1380 x 470 SVG), favicon (512 x 512 SVG/PNG plus 16/32/48/256
ICO), Apple touch icon (180 x 180 PNG), and social-preview (1200 x 630 SVG/PNG)
exports. The dark variant is dark-green artwork for light surfaces; the light
variant is cream artwork for dark surfaces. Artwork preserves the source green
`#305B3F`, orange `#FF7A00`, and cream `#F9F4EF`.

All derived SVGs are self-contained paths with no fonts, embedded raster data,
scripts, or external references. The supplied PNG contains Canva/XMP creator and
template identifiers, so it remains archival only; application references use
clean derivatives. Header and footer logo usage is responsive, image dimensions
are explicit, duplicate accessible names are avoided, and the scaffold favicon
has been replaced with the brand set. The 1200 x 630 sharing asset is prepared
for Phase 9 metadata rather than wiring that later SEO scope early.

For rollback, restore the prior header/footer/icon references and remove only
the derived `public/brand` set; never modify the three supplied originals.
Founder confirmation of ownership, licensing, exclusivity, and trademark
suitability remains a public-release gate. Biome lint, strict type-check, and
the exact Turbopack production build pass. Production runtime smoke checks
return HTTP 200 for `/` and every integrated brand asset, while an unknown route
returns the custom HTTP 404. Asset validation also confirms the documented
dimensions, stripped metadata, opaque Apple icon, valid ICO frames, safe SVG
structure, and unchanged source hashes.

## Phases 4 and 5 completion addendum

Phases 4 and 5 were authorized and implemented together on 29 July 2026. This
avoided translating the outgoing prototype before immediately replacing its
content model. The working tree now includes:

- Complete key-matched English and Turkish dictionaries with recursive
  import-time shape validation
- Request-time locale precedence of a valid `tabakly_locale` cookie, then an
  `Accept-Language` value beginning with `tr`, then English
- Accessible EN/TR controls with one-year cookie and `localStorage` persistence,
  document-language updates, and a server refresh
- Localized metadata, navigation, all landing sections, safe survey fallbacks,
  errors, custom 404, and footer content
- The complete research-stage information architecture: Problem, Proposed
  Solution, four-step proposed workflow, both audiences, intended future
  directions, Research, Team, FAQ, pre-launch Privacy/KVKK status, and Footer
- One static, correctly dimensioned hero photograph instead of the automatic
  carousel
- No masked impact statistics, achieved-impact wording, dead sign-in routes, or
  literal survey placeholders

Survey panels are intentionally unavailable until Phase 6 receives approved
destinations and privacy/KVKK facts. The current notice states only the missing
facts and safeguard; it does not invent a controller, provider, legal basis,
retention period, or transfer arrangement. Qualified/native Turkish review,
founder confirmation of team roles and food-safety wording, and photography
provenance remain public-release gates.

Biome lint, strict TypeScript, and the exact Turbopack production build pass.
The build correctly reports `/` and `/_not-found` as dynamic because locale
selection reads request cookies/headers. Production HTTP checks confirm English
and Turkish browser-language defaults, localized metadata/content, cookie
precedence, Turkish custom 404, and the absence of legacy claims and broken
placeholder paths.

### Awareness-page revision after Phases 4 and 5

Founder feedback subsequently shifted the page emphasis from research to
product awareness. The current page retains honest early-stage language and the
bilingual/request-aware foundation, but now uses the simpler Hero, Problem,
Tabakly Model, Benefits, Survey, Privacy/KVKK, and Contact/Footer flow. Team,
FAQ, intended future directions, and the separate proposed-solution/four-step
workflow sections were removed or consolidated. Navigation is now About,
Tabakly Model, Benefits, Contact Us, and Take Survey; Problem remains the first
content section without receiving a navigation item.

The reference-style three-line hero and matching static bakery photograph were
restored. Food-business and consumer survey cards now read and validate their
existing environment variables, omit “Not Open Yet” labels, and avoid broken
links when a destination is missing. Complete KVKK facts and the approved
missing-URL contact fallback remain later release work.

## Phase 0 baseline verification results

These results record the pre-implementation baseline. The Phase 1 completion
addendum above records the latest foundation checks.

Environment: Windows, Node `v24.18.0`, npm `11.16.0`. PowerShell blocks the `npm.ps1` shim, so checks used the equivalent `npm.cmd` executable.

| Check | Result | Evidence / interpretation |
| --- | --- | --- |
| `npm ci --no-audit --no-fund` | Pass after network approval | Installed the 53 locked packages. npm warned that the local allow-scripts policy did not run Sharp's install check. No tracked manifest changed. |
| `npm run lint` | Fail at baseline; pass after Phase 1 | Biome originally reported 21 diagnostics: 14 formatting findings, four import-order findings, two unsafe blank-target links, and one array-index key. Phase 1 resolved them and normalized LF handling. |
| `tsc --noEmit --incremental false` | Pass | Strict TypeScript checking succeeds. |
| `npm run build` | Environment-blocked | Windows Application Control blocks `@next/swc-win32-x64-msvc`; the managed host then cannot use the default native Turbopack compiler. |
| Diagnostic `npm run build -- --webpack` with matching Next 16.2.12 WASM SWC | Pass | Compiled, type-checked, generated four static pages, and prerendered `/` plus `/_not-found`. This confirms the application source builds when the host compiler restriction is bypassed. |
| `npm run dev -- --hostname 127.0.0.1 --port 3401` | Environment-blocked | The exact dev command reaches the Next startup banner, then fails while loading the blocked native SWC binary. |
| Diagnostic dev server with matching WASM SWC and webpack | Pass | `/` returned HTTP 200 with title `Create Next App`. The four known missing paths returned HTTP 404. |
| `npm audit --package-lock-only` | Fail | Three high-severity transitive findings; see Dependency findings. No audit fix was run. |
| Automated tests | Not available | There is no test script, test runner, or test suite. |
| Browser console / viewport suite | Not available in repository | No `console.*` calls exist in source, and the HTTP smoke test produced a working root page. That smoke test did not request `/_next/image`, so optimized-image/Sharp runtime behavior remains unverified. A repeatable real-browser console, keyboard, image, and viewport suite remains an implementation acceptance task. |

The production build initially also demonstrated that `next/font/google` requires network access to fetch Geist and Geist Mono. After network access was available, the diagnostic build passed. This makes font availability an avoidable build-time dependency.

## Current stack

| Area | Current implementation |
| --- | --- |
| Framework | Next.js `16.2.12`, App Router |
| UI runtime | React and React DOM `19.2.4` |
| Language | TypeScript; resolved version `5.9.3`; strict mode enabled |
| Build/dev tool | Next CLI; Turbopack is the default in the installed Next version |
| Styling | Tailwind CSS `4.3.3` through `@tailwindcss/postcss` `4.3.3` |
| Lint/format | Biome `2.2.0` |
| Icons | `lucide-react` `1.27.0` |
| Compiler option | React Compiler enabled through `reactCompiler: true` and `babel-plugin-react-compiler` |
| Package manager | npm `11.16.0` pinned through `packageManager`; lockfile version 3 |
| Project Node runtime | Node `24.x` (Next's framework minimum remains `>=20.9.0`) |

### Tailwind configuration

Tailwind uses the valid v4 CSS-first setup:

- `postcss.config.mjs` registers `@tailwindcss/postcss`.
- `src/app/globals.css` imports Tailwind with `@import "tailwindcss"`.
- There is no `tailwind.config.*`; that absence is not itself a defect in this Tailwind v4 setup.
- The current `@theme inline` exposes only background, foreground, and font variables. It does not define semantic Tabakly brand colors.

## Current folder structure

```text
.
|-- public/
|   |-- hero-images/
|   |   |-- hero-image-1.jpg       # used
|   |   |-- hero-image-2.jpg       # unused
|   |   `-- hero-image-3.jpg       # used
|   |-- file.svg                   # unused scaffold asset
|   |-- globe.svg                  # unused scaffold asset
|   |-- next.svg                   # unused scaffold asset
|   |-- vercel.svg                 # unused scaffold asset
|   |-- window.svg                 # unused scaffold asset
|   `-- logo.jpg                   # untracked concurrent file; unreferenced
|-- src/
|   |-- app/
|   |   |-- favicon.ico            # convention-based favicon
|   |   |-- globals.css            # Tailwind and global tokens
|   |   |-- layout.tsx             # root HTML/layout/metadata entry
|   |   |-- page.tsx               # only application route: /
|   |   `-- To-DO.txt              # unreferenced development note
|   `-- components/
|       |-- Benefits.tsx
|       |-- Footer.tsx
|       |-- Hero.tsx
|       |-- Impact.tsx
|       |-- Navbar.tsx
|       `-- TabaklyModel.tsx
|-- .gitignore
|-- biome.json
|-- next.config.ts
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- README.md
`-- tsconfig.json
```

### Application entry points and routing

- `src/app/layout.tsx` is the root layout and metadata entry.
- `src/app/page.tsx` is the only page route and renders `/`.
- `src/app/globals.css` is the global CSS entry.
- `src/app/favicon.ico` is served by App Router convention.
- There are no API routes, route handlers, server actions, middleware, nested routes, custom `not-found.tsx`, `error.tsx`, or loading state.
- All page components are server components by default except `Hero` and `Navbar`. `Hero` needs client JavaScript for its carousel. `Navbar` currently has no client behavior, so its `"use client"` boundary is unnecessary until a mobile menu is implemented.

## Existing features

- A single English landing page with fixed header, hero, proposed marketplace steps, masked impact statistics, audience benefits, survey placeholders, and footer contact text.
- Two automatically rotating local hero photographs rendered through `next/image`.
- Anchor navigation for About, Model, Impact, Benefits, Surveys, and Contact, although one logo anchor is broken.
- Responsive grids in Model, Impact, and Footer at the `md` breakpoint.
- Local icon rendering through Lucide.
- Dynamic copyright year.

### Integrations and data flow

| Concern | Current state |
| --- | --- |
| Languages | English only; all visible text is hard-coded; `<html lang="en">` is fixed |
| Forms | None |
| Surveys | Literal placeholder anchors, not an integration |
| Environment variables | No references and no `.env.example` |
| API calls | None (`fetch`, XHR, Axios, route handlers, and server actions are absent) |
| Backend/database/auth | None |
| Analytics/tracking | None |
| Local/session storage | None |
| Error handling | Framework defaults only; no missing-survey fallback or custom error/404 UI |

## Existing strengths

- Small, easy-to-understand codebase with a committed deterministic lockfile.
- No unnecessary state manager, form library, backend, database, payment, mapping, AI, or UI-framework dependency.
- Strict TypeScript configuration and a passing type check.
- Components already separate the prototype's major page sections.
- No duplicate component files or duplicate hero image hashes were found.
- `next/image` is used instead of raw image tags.
- Main content uses consistent bounded containers (`max-w-7xl`).
- Most current CTA boxes are approximately 44px or taller.
- Model, Impact, and Footer layouts already collapse to one column.
- Semantic `header`, `nav`, `main`, `section`, and `footer` elements exist, although their nesting needs correction.
- Tracked import and asset path casing is correct.
- `.env*` and private key files are ignored, and no likely committed secret/key pattern was found.
- The footer's survey placeholder anchors include `noopener noreferrer`.
- Ankara, Türkiye is stated accurately, and there are no claims about AI, awards, funding, or named partnerships.

## Technical problems

### Critical/high

1. **Broken primary paths**
   - Navbar logo links to `#hero`, but the hero is `#about`.
   - `/signin/customer` and `/signin/merchant` do not exist.
   - `CUSTOMER_SURVEY_LINK` and `MERCHANT_SURVEY_LINK` are literal relative paths.
   - HTTP smoke testing confirmed all four route-like paths return 404.

2. **No survey configuration or safe fallback**
   - No public environment variables are read.
   - No URL validation or missing-value fallback exists.
   - `.gitignore` currently ignores every `.env*` file, including a future `.env.example`, unless an explicit `!.env.example` rule is added.

3. **Lint is not a working quality gate**
   - `npm run lint` fails with 21 diagnostics.
   - Unsafe blank-target findings occur on the two hero links.
   - `TabaklyModel` uses an array index as a key.
   - Imports and formatting are inconsistent.
   - `core.autocrlf=true`, the checkout is CRLF, and there is no `.gitattributes`, while Biome expects LF output. This will cause recurring cross-platform formatting churn.

4. **Dependency audit findings**
   - See the dedicated dependency section. Do not run the suggested force fix.

### Medium

- `Hero` ships client state and an interval for a decorative photo rotation that adds JavaScript without improving the research conversion path.
- The hero's `transition-opacity` never changes opacity, so the image swaps abruptly.
- `hover:orange-500` is not a valid Tailwind property utility and silently has no intended hover effect.
- `next/font/google` downloads two font families at build time. Geist Mono is unused, and the body requests literal `"Geist"` rather than consuming `var(--font-geist-sans)`.
- The source images are 1290 x 860 but the component declares 700 x 700 dimensions, creating an incorrect intrinsic aspect-ratio contract.
- The image `priority` prop is deprecated by the installed Next image types in favor of `preload`.
- `allowJs` is enabled although the repository contains no JavaScript application files; this is harmless but broader than necessary.
- No dedicated `typecheck` or `test` script exists.
- No custom error boundary or 404 page exists. The current static page has little runtime failure surface, but survey configuration needs explicit error/fallback handling.
- Source imports mix the `@/` alias and relative paths.
- The dynamic footer year is evaluated during static generation and changes only when the site is rebuilt.

### Low

- Generic create-next-app comments and `src/app/To-DO.txt` remain.
- `README.md` points to `app/page.tsx` rather than `src/app/page.tsx` and lists alternative package managers despite the npm lockfile.
- Automatic dark root variables coexist with hard-coded light sections; there is no coherent dark theme.

## Product and content problems

### Critical

- Current copy says Tabakly "connects" businesses and customers and that shops upload, customers browse, and users reserve/purchase. This describes a live marketplace rather than a proposed model under validation.
- Hero "Join" and "Partner" sign-in CTAs imply active commercial onboarding.
- `Impact.tsx` renders `**00+ kg`, `$***,000+`, and `*0+` under achieved-sounding labels. These are still unverified traction claims even though the digits are masked. The dollar amount is also inappropriate localization for the intended Türkiye audience.
- No visible copy states that Tabakly is pre-incorporation, pre-revenue, conducting market research, or developing a proposed solution in Ankara.

### Missing required content

- Explicit problem framing
- Honest proposed-solution framing and workflow validation caveat
- Separate food-business and consumer research pathways
- Intended future differentiation, clearly described as future work
- Current-stage/status statement
- Three-person team section
- FAQ, including food safety and delivery status
- Privacy/KVKK information notice
- Current-stage footer disclaimer
- Actionable LinkedIn and email links

## Design problems

- No semantic brand token system exists. Core UI uses scattered `green-*`, `orange-*`, `gray-*`, white, and black utilities.
- `#F8FAF7` is duplicated in Benefits and Footer.
- The requested cream and sage colors are absent, and the specified lively green/orange/deep-green palette is not represented semantically.
- CTA, container, card, heading, badge, navigation, and form-field styles have no shared primitive or documented recipe.
- The header uses a placeholder "T" circle rather than a brand asset.
- There is no `public/brand/` structure, horizontal/compact/light/dark logo set, branded favicon set, or social preview.
- The approved beta `public/logo.jpg` is square, raster, opaque, and currently unreferenced. It is suitable as the present brand reference but cannot by itself satisfy scalable horizontal, compact, light/dark, favicon, and transparent SVG needs.
- Hero photos are generic stock-style bakery imagery with no documented license/provenance.
- `hero-image-2.jpg` is unused.
- Benefits stay in a single column even on wider screens, making the two audiences harder to compare.
- The automatically changing hero image is unnecessary for this focused research page.

## Accessibility problems

### High

- Header and Footer are rendered inside `<main>`, weakening their expected global banner/contentinfo landmark semantics.
- There is no skip-to-content link.
- Navigation links disappear below `lg`, with no keyboard-accessible mobile replacement.
- The image carousel changes indefinitely every three seconds with no pause/stop control. Phase 2 removes its CSS transition for reduced-motion users, but stopping the JavaScript image swap remains part of the later carousel removal.
- No language selector exists, and the document language cannot follow Turkish content.
- The Impact values are marked as `h2` and labels as `h3` despite not being useful section headings; the section lacks a descriptive heading.

### Medium

- There is no authored `focus-visible` system; controls rely on browser defaults.
- `alt="Tabakly Hero"` does not describe either changing photograph.
- Decorative logo and footer emoji contribute noisy accessible text.
- New-tab behavior is not communicated. Hero blank-target links also lack explicit `rel="noopener noreferrer"`; Biome flags both.
- Email and social identifiers are plain spans and cannot be activated by keyboard or pointer.
- Fixed-header offsets are absent on Survey and Contact targets, so anchored headings can be obscured.
- Pale borders do not clearly define survey controls.
- No privacy notice is available before a user leaves for a third-party survey.

### Contrast

Calculated against the current rendered colors:

| Pair | Contrast | Result |
| --- | ---: | --- |
| Tailwind orange-500 (`#f97316`) on white | 2.80:1 | Fails AA for normal and large text |
| Tailwind orange-500 on `#F8FAF7` | 2.67:1 | Fails AA |
| Gray-500 on `#F8FAF7` | 4.61:1 | Passes normal-text AA narrowly |
| Green-700 on white | 5.02:1 | Passes normal-text AA |
| Green-900 on white | 9.11:1 | Passes AAA |

Orange-500 is currently used for small eyebrow text, card headings, hero text, and navigation hover states, so this is not only a theoretical palette issue.

## Responsiveness problems

Findings are based on source/layout inspection plus HTTP runtime verification. A repeatable real-browser viewport suite does not yet exist.

### Definite/high-confidence risks

- At 320px, the hero content width is roughly 256px after `px-8`, but both padded CTAs remain in one non-wrapping row. Their combined intrinsic widths exceed the container, causing horizontal overflow.
- The mobile header retains a full "T + Tabakly" treatment, a padded survey CTA, `px-8` nav padding, and an outer `px-4` gutter. Its minimum content width exceeds the available space at 320px and is also unsafe around 375px.
- Desktop navigation is `hidden` below `lg`, and there is no mobile menu.
- The hero headline remains `text-6xl` at 320-390px, creating excessive wrapping and crowding.
- The fixed header is removed from normal flow; the hero begins without a dedicated header-height offset, so overlap is possible.
- Survey and Contact anchor targets lack scroll margin.

### Additional issues

- Mobile sections use desktop-like `py-24` and cards use `p-10`, reducing useful space on 320px screens.
- Benefits never become a multi-column comparison on wider screens.
- No landscape-mobile-specific check or handling exists.
- No explicit global overflow defense exists; the correct fix is to make child layouts fit, not hide overflow.
- Existing strengths: Hero naturally changes from one to two columns at `lg`; Model, Impact, and Footer grids stack below `md`; images use Next's responsive defaults; content sections avoid fixed heights.

## SEO metadata and sharing

- Title is still `Create Next App`.
- Description is still `Generated by create next app`.
- No `metadataBase`, canonical URL, Open Graph data, Twitter card data, localized metadata, or social preview exists.
- No `robots.txt`/`robots.ts` or sitemap exists.
- The convention favicon is a valid 256 x 256 ICO but is still the scaffold asset rather than an approved Tabakly brand set.
- The page has one clear H1, which is a strength, but the current indexed copy would misrepresent the operating stage.
- No structured data is present; none is required for the initial scope unless a valid organization schema can be populated without invented facts.

## Unused and duplicate findings

### Confirmed unused files/assets

- `public/hero-images/hero-image-2.jpg`
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`
- `src/app/To-DO.txt`
- Untracked `public/logo.jpg` is currently unreferenced, but must not be deleted until its owner/provenance is confirmed.

### Components

- All six component files are referenced.
- No duplicate component implementation was found.
- `Navbar` has an unnecessary current client boundary, but it will need client behavior once an accessible mobile menu is introduced.

### Repetition

- Repeated content-container, heading, card, badge, and CTA class groups should become shared styling primitives.
- `#F8FAF7` is duplicated.
- Two PostCSS versions exist in the dependency tree, but this is a transitive framework requirement rather than duplicate user-selected functionality.

## Dependency findings

### Direct dependency classification

| Dependency | Classification | Evidence / decision |
| --- | --- | --- |
| `next` | Required production | Framework, routing, build, images, fonts |
| `react` | Required production | UI runtime |
| `react-dom` | Required production | Next renderer |
| `lucide-react` | Required production | Imported by four page components; retain and tree-shake |
| `@biomejs/biome` | Required development | Existing lint/format tool |
| `@tailwindcss/postcss` | Required development | PostCSS Tailwind plugin |
| `tailwindcss` | Required development | Styling/build dependency |
| `typescript` | Required development | Type checking and Next config/source compilation |
| `@types/node` | Required development | Next/config Node types |
| `@types/react` | Required development | React TypeScript types |
| `@types/react-dom` | Required development | React DOM TypeScript types |
| `babel-plugin-react-compiler` | Required development while configured | Required by `reactCompiler: true` |

No direct dependency is confirmed unused, misplaced, or duplicative enough to remove. No production dependency is actually a development tool.

The diagnostic-only `@next/swc-wasm-nodejs` installation was made with `--no-save --package-lock=false` to work around this host's native-binary policy. It is not in `package.json` or `package-lock.json` and is not a proposed project dependency.

### Security audit

`npm audit --package-lock-only` reports:

- A high-severity vulnerable nested PostCSS range under Next, covering XSS, attacker-controlled source-map file reads, and source-map path traversal advisories.
- A high-severity Sharp/libvips advisory affecting locked Sharp `0.34.5`.
- Three high-severity dependency-tree findings in total because Next depends on both affected paths.

npm proposes `npm audit fix --force`, but that would install Next `9.3.3`, a breaking and inappropriate downgrade. It must not be run. The safe action is to evaluate the smallest compatible patched Next release or an upstream framework resolution in a focused dependency change, then rerun lint, type-check, build, image rendering, and audit.

The current site accepts no user input and exposes no API, which limits application attack surface, but that does not remove the supply-chain maintenance requirement. No CSP or other custom security headers are configured.

## Deployment findings

- No `render.yaml`/`render.yml`, Dockerfile, Procfile, CI workflow, `.nvmrc`, `.node-version`, `engines`, or `packageManager` field exists.
- No Render service URL, production URL, canonical URL, or dashboard configuration is documented in the repository or its three-commit history.
- A live Render service could not be identified, so deployment health, HTTPS redirect behavior, production 404s, build cache, environment variables, and current release status could not be verified.
- README documents Vercel boilerplate rather than Render.
- `next.config.ts` only enables React Compiler; there are no headers, redirects, rewrites, `basePath`, `assetPrefix`, export mode, or standalone output.
- The project must be deployed as a Node web service, not by publishing `.next` as a static directory. The existing `build` and `start` scripts are the appropriate foundation.
- `next start` reads Render's `PORT` environment variable through Next; no custom server is required.
- The lockfile includes platform-specific Linux optional packages for Next SWC, Tailwind Oxide, and Sharp.
- Referenced asset and import casing is correct for Linux.
- Future `NEXT_PUBLIC_*` survey URLs must be present during the Render build because browser-exposed Next variables are compiled into the client bundle.
- A SPA rewrite is not appropriate for the current Next server deployment. Next should own routes and 404 behavior.
- The current Google-font build dependency requires outbound network access. Self-hosting or a system font would make builds more deterministic.

## Risks

| Risk | Severity | Consequence | Mitigation |
| --- | --- | --- | --- |
| Live-marketplace wording and pseudo-traction | Critical | Loss of trust; misleading research participants | Replace first; founder-review both languages |
| Broken survey and hero paths | Critical | No research conversion | Environment-driven URLs plus visible email fallback |
| Missing KVKK/privacy details | High | Participants lack required information | Founder/legal review of controller, purpose, provider, retention, rights, and contact details |
| Narrow-screen overflow and missing mobile nav | High | Required mobile widths become unusable | Mobile-first header/CTA layout and viewport tests |
| Transitive audit findings | High | Known dependency risk | Compatible framework patch assessment; never use force downgrade |
| Unreviewed Turkish copy | High | Awkward or inaccurate public communication | Native/qualified Turkish review before release |
| Unknown Render service state | High | Deployment changes cannot be validated | Obtain service URL/dashboard settings and stage changes |
| Unconfirmed survey URLs/contact/social links | High | Broken or incorrect public destinations | Founder supplies and tests final destinations |
| Logo/photo provenance | Medium | Brand or photo licensing/exclusivity risk | Preserve supplied originals and derived exports; confirm creator, license, exclusivity, trademark suitability, and photo licensing before release |
| Browser-only language initialization | Medium | Flash/hydration mismatch or mixed-language moment | Design deterministic default and hydration behavior; test both locales |
| Build-time Google font download | Medium | Build failure during network outage | Use one self-hosted/local/system family |
| Broad one-pass rewrite | Medium | Hard review and rollback | Small phase commits with lint/type/build gates |

## Recommended priorities

1. **P0 - Credibility and conversion:** remove implied operations and pseudo-statistics; add explicit Ankara research status; replace dead sign-in/survey paths with configured research CTAs and fallback contact behavior.
2. **P0 - Privacy inputs:** obtain the survey providers/URLs and founder-approved KVKK/privacy facts before publishing participant-facing notices.
3. **P1 - Foundation:** normalize line endings/formatting, make lint pass, add type-check/test scripts as justified, improve README and `.env.example`, and document Node/npm/Render requirements.
4. **P1 - Theme and accessibility primitives:** add semantic tokens and shared CTA/container/card/heading/badge/focus styles with verified contrast.
5. **P1 - Bilingual content architecture:** add complete English/Turkish dictionaries, detection, user override, persistence, and document language updates without a large i18n library.
6. **P1 - Information architecture:** implement Problem, Proposed Solution, How It Could Work, audience sections, intended differentiation, Research, Team, FAQ, Privacy, and accurate Footer content.
7. **P1 - Responsive and keyboard behavior:** build an accessible mobile menu and validate every required width, landscape mobile, focus order, anchors, and reduced motion.
8. **P2 - Brand/SEO/performance:** Phase 3 supplied the vector logo variants,
   favicon set, and sharing asset; add sharing metadata/robots/sitemap, remove
   unnecessary carousel/font/client JavaScript, and confirm image/logo licenses.
9. **P2 - Dependency/deployment:** resolve compatible audited dependency versions, verify the actual Render service and environment, and perform a production smoke test.

## Information still required from founders

- Final merchant and consumer survey URLs, plus whether each survey itself supports both languages
- Official public contact email and LinkedIn URL; whether Instagram should be shown
- Canonical production domain and existing Render service URL/settings
- KVKK/privacy facts: data controller/contact, survey provider, data categories, purpose, legal basis, recipients/transfers, retention, participant rights, and optional marketing-consent decision
- Approval of English positioning and natural Turkish copy
- Confirmation of team names, exact public roles, and whether "pre-incorporation/pre-revenue" should appear publicly or only as "market research"
- Food-safety wording and intended allocation of merchant/consumer/Tabakly responsibilities
- Ownership/licensing status of the hero photographs and creator/license,
  exclusivity, and trademark provenance for the supplied logo and its exports
- Whether analytics should remain absent for the pilot (recommended until a privacy decision is made)
