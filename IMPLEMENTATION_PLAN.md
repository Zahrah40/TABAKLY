# Tabakly Implementation Plan

Prepared: 29 July 2026
Status: Phases 1-5 implemented and production-build verified; Phases 6-12 remain
proposed

## Goal

Evolve the existing prototype into a credible, bilingual, responsive research landing page for Tabakly's Ankara market-validation stage without turning it into a marketplace application or adding unnecessary infrastructure.

Phase 1 may begin after the founders review `CODEBASE_AUDIT.md` and authorize the foundation work. The release-blocking inputs below are required by their relevant later phases and before public release; they do not block safe mechanical cleanup.

## Recommended technical direction

- Retain Next.js App Router, React, TypeScript, Tailwind CSS v4, Biome, npm, and the existing repository.
- Keep a single public landing route. Do not add authentication, ordering, delivery, payments, a database, or a custom survey backend.
- Keep most sections as server components. Add client JavaScript only where required for the error boundary, mobile menu, and language selection/persistence.
- Use Tailwind v4's CSS-first `@theme` configuration in `globals.css`; do not add a JavaScript Tailwind config merely to create tokens.
- Use lightweight English/Turkish JSON dictionaries and typed helper code; do not add an i18n library.
- Resolve locale in Phase 4 with precedence `tabakly_locale` cookie > request `Accept-Language` beginning with `tr` > English. The selector will write both the functional cookie and `localStorage`, update the document language, and refresh the route so server-rendered sections and metadata agree. This makes `/` request-aware/dynamic and reduces static caching; that tradeoff must be measured and documented. Do not redirect by language or add `hreflang` without stable locale URLs.
- Prefer external survey links in new tabs with clear new-tab wording and a visible privacy/KVKK notice. This is more robust than an embed and avoids provider-specific modal code.
- Use Next's required `NEXT_PUBLIC_` prefix for browser-visible survey URLs:
  - `NEXT_PUBLIC_MERCHANT_SURVEY_URL`
  - `NEXT_PUBLIC_CONSUMER_SURVEY_URL`
- Add a server-only `SITE_URL` setting for canonical and sitemap generation.
- Keep analytics absent until a privacy decision is approved. Design CTA event names, but do not load an analytics SDK.
- Replace the decorative hero carousel when the Hero is rebuilt in Phase 5, using one approved, accurately sized visual. Later accessibility/performance phases will verify that it remains absent.
- Use platform-native HTML where possible: links, buttons, `<details>` for FAQ, CSS grid/flex, `localStorage`, cookies, and URL parsing.

## Approval inputs required before implementation

### Blocking for public release

1. Merchant survey URL and consumer survey URL
2. Whether each linked survey is bilingual or whether language-specific survey URLs will be required later
3. Official contact email, LinkedIn URL, and decision on Instagram visibility
4. Canonical production domain and the existing Render service URL/settings
5. KVKK/privacy facts: controller/contact, survey provider, data categories, purpose, legal basis, recipients/transfers, retention period, rights/request method, and separate optional marketing-consent decision
6. Approval of all three names and public roles:
   - Emmanuel Alabi - Co-founder, CEO and Product Lead
   - Fateemah Amosure - Co-founder and CTO
   - David Chamberline - Founding Team Member and CMO/Communications Lead
7. Approval of English positioning and a qualified/native review of Turkish copy
8. Approved food-safety wording that does not promise an operating control system that does not yet exist
9. Ownership/license status of all current photographs and creator/license,
   exclusivity, and trademark provenance for the supplied logo and its exports

### Can be resolved during implementation

- Whether to display "pre-incorporation and pre-revenue" publicly or use the simpler "currently conducting market research" statement
- Whether a Render Blueprint (`render.yaml`) should become the source of truth or the existing dashboard configuration should remain authoritative
- Whether to add the proposed Playwright test dependency
- Whether the supplied remote-first fact should appear publicly in the Team or Footer content

## Proposed file architecture

The exact names may be adjusted during implementation, but the target should remain small and predictable:

```text
src/
|-- app/
|   |-- error.tsx
|   |-- favicon.ico              # branded convention favicon
|   |-- globals.css
|   |-- layout.tsx
|   |-- not-found.tsx
|   |-- page.tsx
|   |-- robots.ts
|   `-- sitemap.ts
|-- components/
|   |-- Footer.tsx
|   |-- Header.tsx
|   |-- LanguageSelector.tsx
|   |-- SurveyCTA.tsx
|   |-- sections/
|   |   |-- Audiences.tsx
|   |   |-- Differentiators.tsx
|   |   |-- FAQ.tsx
|   |   |-- Hero.tsx
|   |   |-- HowItWorks.tsx
|   |   |-- PrivacyNotice.tsx
|   |   |-- Problem.tsx
|   |   |-- ProposedSolution.tsx
|   |   |-- Research.tsx
|   |   `-- Team.tsx
|   `-- ui/
|       |-- ButtonLink.tsx
|       |-- Card.tsx
|       |-- Container.tsx
|       |-- SectionHeading.tsx
|       `-- Tag.tsx
|-- config/
|   |-- site.ts
|   `-- site.server.ts
|-- lib/
|   |-- i18n.ts
|   `-- surveys.ts
`-- locales/
    |-- en.json
    `-- tr.json

public/
`-- brand/
    |-- apple-touch-icon.png
    |-- favicon.ico
    |-- favicon.png
    |-- favicon.svg
    |-- social-preview.png
    |-- social-preview.svg
    |-- tabakly-logo-dark.svg
    |-- tabakly-logo-full.png
    |-- tabakly-logo-full.svg
    |-- tabakly-logo-horizontal.png
    |-- tabakly-logo-horizontal.svg
    |-- tabakly-logo-light.svg
    `-- tabakly-mark.svg
```

The site is small; this structure must not be expanded with unnecessary barrel files, generic abstraction layers, or a design-system package.

## Phase plan

### Phase 0 - Audit and planning

Status: complete when the two documents are reviewed.

Deliverables:

- `CODEBASE_AUDIT.md`
- `IMPLEMENTATION_PLAN.md`

Gate:

- Founders accept the audit and authorize Phase 1. Later-phase inputs remain release gates.

### Phase 1 - Cleanup and project foundation

Status: implemented on 29 July 2026. The native SWC restriction observed during
the original audit was resolved on the host, and the exact production build was
revalidated successfully during Phase 2. No landing-page content rewrite was
included.

Implemented work:

1. Add `.gitattributes` to normalize text files to LF and eliminate CRLF/Biome churn.
2. Run Biome's safe formatting/import organization as a dedicated mechanical change, then fix the three substantive lint findings manually.
3. Make `npm run lint` pass and add a dedicated `typecheck` script.
4. Rewrite README for Tabakly, npm-only local setup, translation/theme structure, survey variables, and Render deployment.
5. Add `.env.example` and update `.gitignore` with `!.env.example`.
6. Pin the tested project runtime to Node `24.x` and npm `11.16.0`. Verify that the actual Render service honors this repository metadata in Phase 12.
7. Add `src/app/error.tsx` and `src/app/not-found.tsx` with simple extractable English copy. `error.tsx` is an intentional Client Component; both pages move into locale dictionaries in Phase 4.
8. Remove only confirmed dead scaffold files after a final reference check:
   - `public/file.svg`
   - `public/globe.svg`
   - `public/next.svg`
   - `public/vercel.svg`
   - `public/window.svg`
   - `src/app/To-DO.txt`
   - `public/hero-images/hero-image-2.jpg` if it is not selected as the final approved hero visual
9. Preserve the user-approved `public/logo.jpg` byte-for-byte as the current beta raster reference. Production PNG/SVG variants remain Phase 3 work.
10. Use consistent `@/` imports for application modules.

Expected file changes:

- `.gitattributes` (new)
- `.gitignore`
- `.env.example` (new)
- `README.md`
- `package.json`
- `package-lock.json` only if script/metadata or an approved dependency change requires it
- `biome.json` only if a narrow configuration correction is justified
- `src/app/error.tsx` (new)
- `src/app/not-found.tsx` (new)
- Existing TS/TSX/config files for mechanical format normalization
- Confirmed unused files listed above (delete only after rechecking imports)

Acceptance criteria:

- Clean `npm ci`
- `npm run lint` passes
- `npm run typecheck` passes
- Production build passes in a normal supported environment
- README commands and paths are accurate
- `.env.example` is tracked and contains no real secrets/URLs
- No user-owned or unconfirmed asset is deleted

Rollback:

- Keep mechanical formatting/file cleanup in its own commit so it can be reverted without affecting features.
- Restore any mistakenly classified asset from Git; keep `public/logo.jpg` unchanged throughout cleanup.

Completion notes:

- Added `.gitattributes`, `.env.example`, Node 24/npm 11.16 project metadata,
  `typecheck`, README foundation documentation, `error.tsx`, and `not-found.tsx`.
- Made Biome lint pass, standardized application imports, and removed only the
  five confirmed scaffold SVGs plus `src/app/To-DO.txt`.
- Retained all hero photographs and the approved beta logo unchanged.
- Clean install, lint, type-check, diagnostic build, root HTTP 200, and custom
  HTTP 404 checks pass.
- Three known high-severity transitive audit findings remain for the focused
  Phase 11 dependency review; no force fix or dependency upgrade was applied.

### Phase 2 - Semantic theme system

Status: implemented on 29 July 2026. The semantic theme was applied to the
existing prototype without starting the Phase 3 asset work or later content and
information-architecture changes.

Implemented work:

1. Replace generic root colors with the specified RGB channel tokens:

   ```css
   :root {
     --brand-primary: 34 197 94;
     --brand-accent: 255 122 0;
     --brand-dark: 15 90 42;
     --brand-surface: 255 247 230;
     --brand-muted: 168 213 162;
     --brand-text: 15 90 42;
     --brand-white: 255 255 255;
   }
   ```

2. Connect tokens to Tailwind v4 semantic theme names using `rgb(var(...) / 1)` values. Tailwind's generated `color-mix()` rules provide alpha modifiers such as `/80`, `/40`, and `/15`.
3. Add only the supporting semantic tokens required for accessible UI, such as neutral body text, borders, focus ring, and "on color" text.
4. Use deep green with white for primary actions. Do not use lively green or citrus orange as text/background combinations where they fail contrast.
5. Create small reusable primitives/recipes for ButtonLink, Container, Card, SectionHeading, Tag, navigation links, and form-field styles even though the current survey flow has no form.
6. Remove the incomplete automatic dark mode unless a fully designed dark theme is explicitly approved.
7. Add global focus-visible and reduced-motion rules.

Expected file changes:

- `src/app/globals.css`
- `src/components/ui/ButtonLink.tsx` (new)
- `src/components/ui/Card.tsx` (new)
- `src/components/ui/Container.tsx` (new)
- `src/components/ui/SectionHeading.tsx` (new)
- `src/components/ui/Tag.tsx` (new)
- Existing components as they adopt semantic classes

Acceptance criteria:

- Core UI contains no scattered brand hex values
- Brand UI uses semantic tokens rather than Tailwind palette names
- Primary, secondary, focus, link, body text, and control-boundary contrast meet WCAG AA
- Focus indicators remain visible on every interactive surface
- Reduced-motion preference disables nonessential transitions

Rollback:

- Land tokens and primitives before migrating sections; revert section migrations independently if visual review fails.

Completion notes:

- Added the seven approved channel tokens plus narrowly scoped strong-text,
  neutral text, border, focus, and error roles.
- Added `ButtonLink`, `Card`, `Container`, `SectionHeading`, and `Tag`; added
  focused CSS recipes for native buttons, navigation links, and future fields.
- Migrated the current sections, error boundary, and 404 page away from raw
  brand hex values and generic green/orange/gray color utilities.
- Removed the incomplete automatic dark mode and added dual-color
  `focus-visible`, forced-colors, and reduced-motion behavior.
- Verified WCAG contrast for the current roles: deep green/white `8.35:1`, deep
  green/cream `7.83:1`, deep green/sage `5.05:1`, strong green/white `5.02:1`,
  strong orange/white `5.18:1`, muted text/white `6.80:1`, and strong control
  border/white `4.12:1`.
- Source scanning finds no remaining core-brand hex values or generic
  green/orange/gray palette utilities in `src`.
- Lint, strict type-check, exact Turbopack production build, generated alpha CSS,
  root HTTP 200, and custom HTTP 404 checks pass.
- Phase 2 added no dependency. The pre-existing lockfile refresh associated with
  the host SWC repair was preserved and validates through the declared
  dependency tree and production build.

### Phase 3 - Logo and brand assets

Status: implemented on 29 July 2026. The supplied SVG became the geometry master;
all supplied source files remain byte-for-byte unchanged.

Implemented work:

1. Preserved `public/logo.svg`, `public/logo.png`, and `public/logo.jpg` as
   archival sources and recorded their SHA-256 hashes. The raw PNG contains
   Canva/XMP creator and template identifiers and is not referenced by the app.
2. Created self-contained, path-only full, horizontal, compact, dark, and light
   SVG variants. The dark variant is dark-green artwork for light surfaces; the
   light variant is cream artwork for dark surfaces.
3. Exported clean full and horizontal PNG fallbacks, SVG/PNG/ICO favicons, a
   180 x 180 Apple touch icon, and SVG/PNG 1200 x 630 social-preview artwork.
4. Integrated the horizontal lockup for wider header/footer use and the compact
   mark for narrow mobile use, with one accessible name per home link and
   explicit image dimensions.
5. Replaced the scaffold convention favicon and declared branded icon metadata.
   The social-preview asset is ready for Phase 9 metadata without prematurely
   adding the later SEO configuration.
6. Recorded artwork colors, asset roles, export dimensions, source hashes,
   metadata handling, rollback, and the remaining release gate in README.

Asset dimensions:

- Full: SVG 1500 x 1500; PNG 1600 x 1600
- Horizontal: SVG/PNG 1760 x 512
- Compact mark and favicon source: 512 x 512
- Dark/light wordmarks: 1380 x 470
- Apple touch icon: 180 x 180
- ICO frames: 16, 32, 48, and 256 px
- Social preview: SVG/PNG 1200 x 630

Acceptance notes:

- Required variants exist under `public/brand` and retain the supplied geometry.
- SVGs use paths only, with no fonts, embedded raster data, scripts, or external
  references.
- The source artwork colors remain `#305B3F`, `#FF7A00`, and `#F9F4EF`.
- Founder confirmation of ownership, licensing, exclusivity, and trademark
  suitability remains a public-release gate.
- Biome lint, strict type-check, and the exact Turbopack production build pass.
- Production runtime smoke checks return HTTP 200 for `/` and every integrated
  brand asset, while an unknown route returns the custom HTTP 404.
- Asset validation confirms the documented dimensions, stripped raster
  metadata, opaque Apple icon, valid ICO frames, safe SVG structure, and
  unchanged source hashes.

Rollback:

- Restore the previous header/footer/icon references and remove only the derived
  `public/brand` exports. Keep all three supplied originals unchanged.

### Phase 4 - Complete English and Turkish support

Status: implemented on 29 July 2026 together with Phase 5 so the dictionaries
were created against the final research information architecture rather than
the outgoing prototype.

Implemented work:

1. Create complete, key-matched `en.json` and `tr.json` dictionaries.
2. Move every visible string into dictionaries, including metadata, nav, status labels, sections, CTAs, team roles, FAQ, privacy, missing-survey fallbacks, errors, footer, and new-tab notices.
3. Resolve the initial locale in this order:
   - valid `tabakly_locale` cookie (`en` or `tr`)
   - request `Accept-Language` beginning with `tr`
   - English fallback
4. Persist a selector override to `localStorage` and a functional `tabakly_locale` cookie with `Path=/`, `SameSite=Lax`, and an appropriate finite `Max-Age`; use `Secure` in production. The selector then refreshes the route so server-rendered content, metadata, and `<html lang>` agree.
5. Treat the resulting request-aware/dynamic rendering and reduced full-page static caching as an explicit performance/SEO tradeoff. Measure it before release; do not add `hreflang` without stable language URLs.
6. Use accessible text buttons labelled EN and TR; no flag-only controls.
7. Update `<html lang>` and localized metadata when the language changes.
8. Do not redirect users and do not render both languages at once.
9. Validate dictionaries at development/build time for missing or extra keys.

Expected file changes:

- `src/locales/en.json` (new)
- `src/locales/tr.json` (new)
- `src/lib/i18n.ts` (new)
- `src/components/LanguageSelector.tsx` (new)
- `src/components/Header.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- All visible-content components
- `src/app/error.tsx`
- `src/app/not-found.tsx`

Acceptance criteria:

- Browser/request language beginning `tr` selects Turkish on first visit
- All other browser languages select English
- EN/TR override works, persists after reload, and updates document language
- No automatic redirect
- No mixed-language page state
- Dictionary key parity passes
- Turkish is natural for Türkiye and founder/native reviewed
- Error/fallback/metadata strings are localized

Rollback:

- Keep English as the stable fallback dictionary. If locale detection has a defect, disable automatic detection while retaining manual EN/TR selection.

Completion notes:

- Added complete key-matched English and Turkish JSON dictionaries and an
  import-time recursive shape validator, including array structure.
- Added cookie-first locale resolution with `Accept-Language` and English
  fallbacks, accessible EN/TR text controls, one-year cookie/localStorage
  persistence, document-language updates, and a server refresh.
- Localized the root document language, page metadata, navigation, every page
  section, research fallback states, error boundary, custom 404, and footer.
- Confirmed through production HTTP checks that English/Turkish request
  detection works and that a valid cookie takes precedence over the opposing
  request language.
- The production build records `/` and `/_not-found` as request-time dynamic
  routes, which is the planned caching tradeoff. No redirect or `hreflang` was
  added.
- Qualified/native Turkish review remains a public-release gate.

### Phase 5 - Research-focused information architecture

Status: implemented on 29 July 2026 together with Phase 4. Survey destinations
and legally specific privacy/KVKK facts remain deliberately assigned to Phase
6.

Implemented work:

1. Rebuild the page in this order:
   - Header
   - Hero with explicit Ankara research status and two audience CTAs
   - Problem
   - Proposed Solution
   - How It Could Work (four steps and validation caveat)
   - For Food Businesses
   - For Consumers
   - Intended Future Differentiation
   - Research/Survey pathways
   - Team
   - FAQ
   - Privacy/KVKK notice
   - Footer
2. Replace all present-tense marketplace claims with approved "developing," "proposed," "research," and "pilot" language.
3. Delete the masked Impact statistics. Do not substitute numbers.
4. Describe analytics, markdown recommendations, impact measurement, and donation fallback only as intended future directions.
5. Use the supplied three names/roles without invented biographies.
6. Include the supplied remote-first fact in founder-approved Team or Footer wording.
7. Remove the automatic hero carousel and use one approved static visual.
8. Use four concise workflow steps and explicitly state that the model may change after research.

Expected file changes:

- `src/app/page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/sections/*` (new files in target architecture)
- `src/locales/en.json`
- `src/locales/tr.json`
- Retire/replace `Navbar.tsx`, `Impact.tsx`, `Benefits.tsx`, and `TabaklyModel.tsx` after their replacements are referenced

Acceptance criteria:

- Every required section is present in a logical heading hierarchy
- No unverified traction, environmental, partnership, funding, award, or AI claim appears
- Page clearly states market research in Ankara and proposed/future behavior
- Both audience CTAs are prominent in the Hero and both paths are repeated in the Research section without forcing a cramped 320px layout
- Team and FAQ content match founder-approved facts

Rollback:

- Replace one section at a time and keep each section change independently reviewable.

Completion notes:

- Rebuilt the page in the planned order with Problem, Proposed Solution, four
  proposed workflow steps, both audiences, intended future directions,
  Research, the three-person Team, FAQ, safe pre-launch Privacy/KVKK status,
  and a research-stage Footer.
- Removed all masked impact figures, dead sign-in routes, literal survey
  placeholders, achieved-impact language, and the automatic hero carousel.
- The hero now uses one static local photograph with its correct 1290 x 860
  intrinsic dimensions, responsive `sizes`, localized alt text, and an explicit
  research-stage caption.
- Business and consumer calls to action are prominent in the Hero and lead to
  separate Research panels. Those panels use disabled, localized “not yet open”
  fallbacks until Phase 6 can validate approved external URLs.
- Food-safety, delivery, analytics/measurement, price recommendations, and
  donation fallback are described only as unsettled or intended future work.
- Founder confirmation of team names/roles, approved food-safety wording,
  photography provenance, and both language reviews remain release gates.
- Biome lint, strict TypeScript, the exact Turbopack production build, dynamic
  English/Turkish HTTP rendering, cookie precedence, Turkish 404 rendering, and
  legacy-claim/link scans pass.

Awareness-page revision:

- The founders subsequently clarified that the landing page should introduce
  Tabakly first and use surveys as a supporting validation path rather than its
  primary identity.
- The active flow is now Hero, Problem, Tabakly Model, Benefits, Survey,
  Privacy/KVKK, and Contact/Footer. Team, FAQ, intended future directions, and
  the separate proposed-solution/workflow sections were removed or consolidated.
- The hero returned to the approved “Save Good Food / Save Money / Reduce
  Waste” visual direction and the matching static bakery photograph.
- Navigation now contains About, Tabakly Model, Benefits, Contact Us, and Take
  Survey, with the Problem intentionally absent from navigation.
- Survey cards retain environment-driven URL validation but no longer display
  “Not Open Yet” labels. The complete legal notice and approved missing-URL
  contact fallback remain Phase 6 work.

### Phase 6 - Survey integration and privacy/KVKK

Proposed work:

1. Add `.env.example` entries:

   ```dotenv
   NEXT_PUBLIC_MERCHANT_SURVEY_URL=
   NEXT_PUBLIC_CONSUMER_SURVEY_URL=
   SITE_URL=
   ```

2. Keep server-only configuration (`SITE_URL`) in a server-only module. Keep approved browser-safe contact/social/location values in a separate public config module so server data cannot be imported into Header/LanguageSelector bundles.
3. Create a reusable `SurveyCTA` with audience type, title, description, label, URL, language, and optional icon.
4. Read `NEXT_PUBLIC_MERCHANT_SURVEY_URL` and `NEXT_PUBLIC_CONSUMER_SURVEY_URL` through explicit static property access, validate them with the platform URL API, and permit only `https:` (and optionally `http:` in development). Pass only sanitized values to CTAs.
5. Open valid external surveys in a new tab with `noopener noreferrer` and visible/screen-reader new-tab context.
6. If a URL is absent/invalid, render a localized contact-email fallback and no broken button.
7. Place a concise, founder-approved KVKK/privacy information notice before the CTAs.
8. Keep optional future-marketing consent separate. Do not add a checkbox because the landing page itself is not collecting data.
9. Define non-sensitive event names (`merchant_survey_clicked`, `consumer_survey_clicked`, `language_selected`) for future use, but do not transmit them without an approved analytics/privacy decision.

Expected file changes:

- `.env.example`
- `.gitignore`
- `src/config/site.ts` (new)
- `src/config/site.server.ts` (new, server-only canonical configuration)
- `src/lib/surveys.ts` (new)
- `src/components/SurveyCTA.tsx` (new)
- `src/components/sections/Research.tsx`
- `src/components/sections/PrivacyNotice.tsx`
- Locale dictionaries
- `README.md`

Acceptance criteria:

- Merchant and consumer CTAs resolve only from configuration
- Both valid production survey URLs open correctly
- Missing/invalid values show an actionable localized email fallback
- No provider URL is duplicated in components
- KVKK/privacy notice is visible before leaving the site
- No analytics/network tracking request occurs

Rollback:

- Environment variables are additive. Removing a URL automatically returns the site to the safe contact fallback.

### Phase 7 - Responsive implementation

Proposed work:

1. Build mobile-first typography, spacing, grids, and CTA widths.
2. Implement a compact accessible header for 320-390px and a full horizontal layout at suitable breakpoints.
3. Add a real mobile menu; do not simply hide navigation.
4. Make hero CTAs full-width/stacked on narrow screens and inline only when space permits.
5. Add correct scroll padding/margins for every anchor under the sticky header.
6. Use fluid heading sizes and avoid fixed content heights.
7. Use one/two/three-column grids only where content remains readable.
8. Add correct `sizes`, width, and height data to all images.
9. Test portrait widths 320, 375, 390, 768, 1024, 1280, and 1440+, plus representative landscape mobile.

Expected file changes:

- `src/app/globals.css`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- All section and UI components
- Browser tests if Playwright is approved

Acceptance criteria:

- No horizontal document overflow at any required width
- Header never overlaps anchored headings
- Tap targets are approximately 44px or larger
- Buttons do not become too narrow or clip text
- Footer and cards stack cleanly
- Menu is usable in portrait and landscape mobile
- Desktop content does not stretch beyond readable limits at 1440+

Rollback:

- Keep breakpoint/spacing work in focused component groups; use screenshots from the last accepted group as the comparison baseline.

### Phase 8 - Accessibility

Proposed work:

1. Put Header and Footer outside Main and add a single skip link to `#main-content`.
2. Maintain one H1 and logical H2/H3 section structure.
3. Implement mobile menu button semantics (`aria-expanded`, `aria-controls`), Escape close, focus return, and no focusable hidden links.
4. Add visible `:focus-visible` styling and verify it in Windows high-contrast/forced-colors where practical.
5. Use descriptive or intentionally empty alt text based on the image's purpose.
6. Keep important meaning in text, not only color/iconography.
7. Respect `prefers-reduced-motion` and verify the Phase 5 carousel removal; do not reintroduce automatic motion.
8. Use ARIA only where semantic HTML is insufficient.
9. Verify keyboard order, links, language selection, FAQ details, and survey CTAs.
10. Perform manual WCAG AA checks in addition to automated assertions.

Expected file changes:

- `src/app/page.tsx`
- `src/app/globals.css`
- Header/Footer, UI primitives, all section components
- Browser tests if approved

Acceptance criteria:

- Full page is operable with keyboard only
- Skip link and focus indicators are visible
- Mobile menu focus/close behavior is correct
- Heading and landmark outline is logical
- No automated critical accessibility violations in the selected checker/environment
- Manual contrast checks meet WCAG AA
- Reduced-motion users receive no nonessential automatic motion

Rollback:

- Accessibility semantics are acceptance gates, not optional polish. Revert only the faulty implementation while preserving the requirement.

### Phase 9 - SEO and sharing

Proposed work:

1. Replace scaffold metadata with accurate, non-operational Tabakly title/description.
2. Configure `metadataBase`/canonical from validated `SITE_URL`.
3. Add Open Graph and Twitter card metadata using the approved social preview.
4. Add localized metadata where request locale supports it, with English fallback.
5. Add `robots.ts` and `sitemap.ts`.
6. Add branded favicon metadata.
7. Keep structured data minimal; add Organization schema only when official URL/contact facts are approved and no fields are invented.

Expected file changes:

- `src/app/layout.tsx`
- `src/app/robots.ts` (new)
- `src/app/sitemap.ts` (new)
- `public/brand/social-preview.png`
- Favicon assets
- `src/config/site.ts`
- Locale dictionaries
- `.env.example`

Acceptance criteria:

- Accurate title/description appear in rendered HTML
- Canonical, Open Graph, and Twitter fields use the production URL
- Social preview is 1200 x 630 and loads publicly
- Robots and sitemap return valid responses
- No metadata claims an operating marketplace

Rollback:

- Use English generic research-stage metadata as a safe fallback if localized/canonical configuration is missing.

### Phase 10 - Performance

Proposed work:

1. Verify the Phase 5 hero carousel removal and optimize the approved static image/illustration.
2. Use SVG for logo/simple graphics and modern raster formats where useful.
3. Provide accurate image dimensions and responsive `sizes`; preload only the true LCP image.
4. Lazy-load below-the-fold media.
5. Verify the Phase 1 Geist Mono removal. Use one font family/weight set; decide between one optimized Geist family and an approved local/system fallback to reduce network/build risk.
6. Keep section rendering server-side; isolate client JavaScript to Header/LanguageSelector.
7. Do not add animation, carousel, tracking, or UI-framework bundles.
8. Measure production output and Lighthouse as guidance, not as a target to game.

Expected file changes:

- `src/app/layout.tsx`
- Hero/Header/Footer and image-using sections
- `src/app/globals.css`
- Public image/brand assets
- Possible deletion of unused hero images after approval

Acceptance criteria:

- No autoplay media or carousel
- No unnecessary client component boundary
- No layout shift from incorrect image dimensions
- One font family with only required weights
- Reasonable production JS/CSS/image transfer size
- Strong Lighthouse results with no regressions hidden by removing useful content

Rollback:

- Keep previous optimized assets until visual and performance comparison is accepted.

### Phase 11 - Dependency cleanup and security

Proposed work:

1. Re-run import/config analysis after the final component tree exists.
2. Retain every direct dependency still used deliberately.
3. Re-run `npm audit` and evaluate the smallest compatible patched Next release for the nested PostCSS/Sharp findings.
4. Never run `npm audit fix --force`; never accept the proposed Next 9 downgrade.
5. Test any dependency patch as its own change group with clean install, lint, type-check, build, image rendering, and browser smoke tests.
6. Do not add overrides for framework-pinned transitive packages unless Next officially supports the combination and all build/runtime checks pass.
7. Remove a direct dependency only after proving it is not imported, configured, or required by the build.
8. Decide whether to add and test minimal response security headers. Add a CSP only after confirming compatibility with Next scripts, fonts, images, and survey destinations; otherwise document an explicit, time-bounded deferral.

Expected file changes:

- `package.json`
- `package-lock.json`
- Imports only if a dependency is genuinely replaced
- `README.md` if runtime requirements change

Acceptance criteria:

- Every direct dependency has a documented use
- Dev tools remain in `devDependencies`
- No major framework migration
- Production build and image handling pass after any patch
- Audit findings are resolved or explicitly documented with upstream status and risk acceptance

Rollback:

- One dependency change per commit; revert package and lockfile together. Preserve the last known-good build artifact/version.

### Phase 12 - Render deployment and documentation

Proposed work:

1. Obtain and inspect the actual Render service before changing deployment settings.
2. Confirm/pin a Render-supported Node version consistent with local and framework requirements.
3. Configure a Node web service, not a static publish:
   - install/build: `npm ci && npm run build`
   - start: `npm run start`
4. Configure survey URLs and `SITE_URL` in Render for both preview/staging and production as applicable.
5. Decide whether to add `render.yaml`. Do not create a second conflicting source of truth without founder approval.
6. Verify Linux case-sensitive imports/assets, `PORT`, cache behavior, root route, missing-route handling, HTTPS, canonical URL, robots, sitemap, and social image.
7. Document local setup, scripts, env, translations, theme tokens, brand assets, surveys, and Render workflow in README.
8. Deploy to a preview/staging service first when available; promote only after acceptance checks.
9. Verify any selected security headers/CSP in the deployed environment; do not ship an untested blanket policy.

Expected file changes:

- `README.md`
- `package.json`
- `.node-version` or `.nvmrc` (choose one convention)
- `render.yaml` only if approved
- `.env.example`
- Deployment metadata/config files discovered in the actual service workflow

Acceptance criteria:

- Clean Render build from the lockfile
- Production service starts and binds Render's port
- Both surveys or their intentional fallback states work in production
- HTTPS and canonical URL are correct
- Assets work with Linux case sensitivity
- Root, 404, robots, sitemap, favicon, and social preview return correct responses
- README exactly matches deployed configuration

Rollback:

- Preserve the current live Render version and environment set before deployment.
- Use a preview/staging service or Render rollback to the last good version if smoke checks fail.
- Environment changes remain reversible and are applied separately from source changes.

## Dependency decisions

### Retain

| Dependency | Decision |
| --- | --- |
| Next, React, React DOM | Retain existing framework/runtime |
| Tailwind CSS and PostCSS plugin | Retain CSS-first v4 setup |
| TypeScript and React/Node type packages | Retain strict type checking |
| Biome | Retain and make it a passing quality gate |
| Lucide React | Retain; multiple small icons are used/planned and imports remain tree-shakeable |
| React Compiler plugin | Retain while `reactCompiler: true` remains enabled |

### Proposed for removal

No current direct package is confirmed removable. Reassess only after final imports exist.

The following are file/code removals, not dependency removals:

- Scaffold SVG assets
- Unreferenced `To-DO.txt`
- Unselected hero images
- Hero interval/carousel code (removed with the Phase 5 Hero rebuild)
- Geist Mono import/configuration (removed in Phase 1)
- Replaced prototype components after their new equivalents are referenced

### Proposed new dependency

One optional development dependency is proposed:

- `@playwright/test`: enables repeatable checks for the seven required viewport widths, horizontal overflow, language persistence, mobile-menu keyboard behavior, survey URL/fallback behavior, broken links, and browser console/page errors.

Justification: these acceptance requirements are difficult to verify consistently with source inspection alone. It is development-only and adds no production bundle code, but its browser download is sizeable. If approved, expected changes are `package.json`, `package-lock.json`, `playwright.config.ts`, and `tests/landing.spec.ts`, plus a documented browser-install/CI step. Run it on an approved supported Linux/CI host if Windows Application Control prevents the normal Next server. If the founders prefer no new dependency, the same matrix must be executed manually and documented, but regression coverage will be weaker.

No i18n, form, state-management, UI-framework, backend, database, payment, map, analytics, or AI dependency is proposed.

## Change-group and validation strategy

Use small, reviewable change groups rather than one rewrite:

1. Line endings/formatting/lint foundation
2. README/env/runtime metadata and safe dead-file cleanup
3. Theme tokens and UI primitives
4. Brand assets
5. Locale dictionaries and selection behavior
6. Research-stage content sections
7. Survey/privacy integration
8. Responsive/mobile navigation
9. Accessibility pass
10. SEO/performance assets
11. Dependency security patch
12. Render configuration/deployment

After every logical group:

- `npm run lint`
- `npm run typecheck`
- Tests when present
- `npm run build`
- Targeted browser smoke check proportional to the change
- `git diff --check`
- Secret/config scan before commit/deploy

Do not combine a dependency upgrade with a broad UI rewrite.

## Cross-phase risks and rollback strategy

| Risk | Plan | Rollback |
| --- | --- | --- |
| Translation hydration/flash | Resolve request locale server-side; mirror override to cookie/localStorage; test first load and reload | Fall back to English server rendering plus manual selector |
| Incomplete Turkish copy | Treat native review as release gate | Keep reviewed English live; do not publish partial Turkish |
| Missing survey URLs | URL validation and email fallback | Remove env value to activate safe fallback |
| Incorrect privacy copy | Founder/legal fact checklist before merge | Keep generic "research not yet open" fallback; do not collect data |
| Logo/asset rejection | Keep reference and new variants separate until approval | Restore previous approved asset references |
| Mobile-menu focus defect | Automated and manual keyboard tests | Revert interactive menu group while retaining accessible static CTA |
| Security patch regression | Patch-only commit with full build/image/browser test | Revert `package.json` and lockfile together |
| Render failure | Preview deploy and last-known-good version | Roll back Render version/env set |
| Scope creep toward marketplace | Enforce no auth/order/backend routes in review | Reject or revert out-of-scope feature group |

There are no database or user-data migrations in this plan, so source and environment rollbacks remain straightforward.

## Final acceptance checklist

### Product and content

- [ ] Page clearly says Tabakly is developing and validating a proposed model in Ankara
- [ ] No fake traction, environmental, partnership, commercial-operation, funding, award, or AI claims
- [ ] All required information-architecture sections exist
- [ ] Team names and roles are founder-approved
- [ ] Food-safety and privacy wording is approved

### Language

- [ ] English and Turkish dictionaries have complete key parity
- [ ] Turkish-browser first visit defaults to Turkish
- [ ] Other browsers default to English
- [ ] EN/TR override persists and updates `<html lang>`
- [ ] No mixed-language state or automatic redirect
- [ ] Natural Turkish reviewed by a qualified speaker

### Surveys and privacy

- [ ] Merchant and consumer paths use their correct environment variables
- [ ] Both configured URLs are tested in production
- [ ] Missing/invalid URL fallback shows the approved email and no broken button
- [ ] KVKK/privacy notice appears before survey departure
- [ ] Optional marketing consent is separate
- [ ] No analytics/tracking loads without approval

### Responsive and accessibility

- [ ] Test 320, 375, 390, 768, 1024, 1280, and 1440+ widths
- [ ] Test representative landscape mobile
- [ ] No horizontal overflow
- [ ] Mobile menu works by touch and keyboard
- [ ] All tap targets are approximately 44px or larger
- [ ] Anchored headings are not hidden by the header
- [ ] Skip link, landmarks, heading order, alt text, and focus states are correct
- [ ] Reduced-motion preference is respected
- [ ] WCAG AA contrast verified

### SEO, performance, and links

- [ ] Accurate localized title/description and canonical URL
- [ ] Open Graph/Twitter preview, favicon, robots, and sitemap work
- [ ] No broken internal/external link
- [ ] No browser console/page error
- [ ] Correct image dimensions/sizes and no autoplay/carousel
- [ ] One font family with necessary weights only
- [ ] Production bundle and Lighthouse results reviewed without score gaming

### Engineering and deployment

- [ ] Clean `npm ci`
- [ ] Lint passes
- [ ] Type-check passes
- [ ] Tests pass if added
- [ ] Production build passes
- [ ] Dependency audit is resolved or explicitly risk-accepted without a force downgrade
- [ ] No secret, personal key, or real private `.env` value is committed
- [ ] Render build/start/Node/env settings verified
- [ ] Live HTTPS, root, 404, assets, survey paths/fallbacks, metadata, robots, and sitemap tested
- [ ] Changed files, removed files/dependencies, limitations, and founder decisions summarized
