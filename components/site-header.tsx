import Link from 'next/link';

import { primaryNavigation } from '@/lib/navigation';

export function SiteHeader() {
  return (
    <header className="border-b border-brand-blue/15 bg-background/95">
      <div aria-hidden="true" className="brand-stripe h-1.5" />
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          DKESiteRevamped
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-brand-blue">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
