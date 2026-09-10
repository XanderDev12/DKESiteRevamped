# DKESiteRevamped

An intentionally content-neutral React and TypeScript scaffold for a future fraternity website. It includes the symbol supplied for this rebuild, but no names, dates, events, historical claims, or copy from the previous site.

## Brand foundation

- The approved fraternity symbol is stored at `public/fraternity-symbol.png`.
- Blue (`#221E73`), gold (`#FDB710`), and red (`#B22117`) are defined as shared theme tokens in `app/globals.css`.
- The layout uses those colors without retaining the previous site's broader visual design.

## Design system

- Geist handles interface and body text; Newsreader provides the editorial display voice.
- Shared semantic tokens control color, radius, shadow, typography, and motion.
- Reusable containers, buttons, surfaces, page heroes, navigation, and brand components keep new routes consistent.
- Motion is ornamental, CSS-only, and disabled when reduced motion is requested.
- Public site identity is centralized in `lib/site-config.ts` so chapter-specific naming can be updated once.

## Prepared sections

- Brothers and chapter leadership
- Verified chapter history
- Current and upcoming events

Each section has a route, typed model, empty data adapter, and presentation component. The adapters currently return empty arrays by design and can later be replaced by approved static content, a CMS, or another data source without restructuring the page layer.

## Project structure

```text
app/
  brothers/       Brothers and leadership route
  events/         Events route
  history/        History route
  layout.tsx      Shared application shell and metadata
  page.tsx        Content-neutral starting page
components/
  brand/           Approved identity components
  ui/              Reusable layout and interaction primitives
  page-hero.tsx    Shared interior-page introduction
  site-*.tsx       Responsive navigation shell
features/
  brothers/       Types, data adapter, and list UI
  events/         Types, data adapter, and list UI
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

Begin with the types in each `features/*/types.ts` module. Add a verified source through the corresponding `data.ts` adapter, or replace that adapter with a CMS/API integration. Page components already consume those adapters and provide intentional empty states until records exist.

The feature boundaries are ready to grow independently: brothers can be grouped by leadership role or class year, history can be divided into sourced eras, and events can gain featured records, filters, or calendar views without changing the shared site shell.
