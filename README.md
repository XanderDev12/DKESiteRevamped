# DKESiteRevamped

An intentionally content-neutral React and TypeScript scaffold for the Psi Omega Chapter of Delta Kappa Epsilon at RPI. It includes the symbol supplied for this rebuild, but no names, dates, events, historical claims, contact details, or copy from the previous site.

## Brand foundation

- The approved fraternity symbol is stored at `public/fraternity-symbol.png`.
- Blue (`#221E73`), gold (`#FDB710`), and red (`#B22117`) are defined as shared theme tokens in `src/app/globals.css`.
- The layout uses those colors without retaining the previous site's broader visual design.

## Design system

- Geist handles interface and body text; Newsreader provides the editorial display voice.
- Shared semantic tokens control color, radius, shadow, typography, and motion.
- Reusable containers, buttons, surfaces, page heroes, navigation, and brand components keep new routes consistent.
- On spacious screens, the homepage directory becomes a bounded scroll-driven depth carousel: five destination cards travel left through a vertical depth path while staying front-facing, with the centered destination highlighted before the section releases naturally into the footer. The document remains the only scroll container.
- Motion is ornamental and progressive; mobile, short, zoomed, JavaScript-free, and reduced-motion layouts use a compact static directory instead.
- Public site identity is centralized in `src/lib/site-config.ts` so chapter-specific naming can be updated once.

## Prepared sections

- Current members and chapter leadership
- Verified chapter history
- A shared event calendar with audience-aware records
- An alumni hub for alumni events, donations, involvement, and the alumni board
- Verified ways to contact current members

Each data-backed section has a typed model, empty data adapter, and presentation component. The adapters currently return empty arrays by design and can later be replaced by approved static content, a CMS, or another data source without restructuring the page layer.

## Project structure

```text
src/
  app/
    alumni/         Alumni hub and anchored subsections
    brothers/       Current members and leadership route
    contact/        Current-member contact route
    events/         Shared event calendar route
    history/        History route
    layout.tsx      Shared application shell and metadata
    page.tsx        Homepage hero and chapter directory
  components/
    brand/           Approved identity components
    ui/              Reusable layout and interaction primitives
    explore-directory.tsx Progressive 3D chapter carousel and static directory fallback
    page-hero.tsx    Shared interior-page introduction
    site-*.tsx       Responsive navigation shell
  features/
    alumni/         Board and alumni-resource adapters
    brothers/       Types, data adapter, and list UI
    contact/        Verified contact-channel adapter
    events/         Audience-aware calendar model and UI
    history/        Types, data adapter, and timeline UI
  lib/
    navigation.ts    Shared route metadata
    site-config.ts   Public identity and metadata
```

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run typecheck
npm run lint
npm run build
```

## Adding content later

Begin with the types in each `src/features/*/types.ts` module. Add a verified source through the corresponding `data.ts` adapter, or replace that adapter with a CMS/API integration. Page components already consume those adapters and provide intentional empty states until records exist.

The feature boundaries are ready to grow independently: members can be grouped by leadership role or class year, history can be divided into sourced eras, and the shared event source can power both the full calendar and alumni-only events. Alumni anchors can become dedicated routes later without changing their data adapters.
