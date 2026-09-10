# DKESiteRevamped

An intentionally content-neutral React and TypeScript scaffold for a future fraternity website. No names, dates, events, historical claims, imagery, or copy from the previous site are included.

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
  content-*.tsx   Shared content layout and empty states
  site-*.tsx      Shared navigation shell
features/
  brothers/       Types, data adapter, and list UI
  events/         Types, data adapter, and list UI
  history/        Types, data adapter, and timeline UI
lib/
  navigation.ts   Shared route metadata
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
