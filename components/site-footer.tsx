import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { primaryNavigation } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue-deep text-white">
      <div aria-hidden="true" className="brand-stripe h-1" />
      <Container className="grid gap-12 py-14 sm:grid-cols-[1.3fr_0.7fr] sm:py-16">
        <div className="max-w-md">
          <p className="font-display text-5xl font-medium tracking-[-0.04em] text-brand-gold">
            {siteConfig.shortName}
          </p>
          <p className="mt-4 text-base leading-7 text-white/65">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="sm:justify-self-end">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Explore
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-8 items-center text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex min-h-16 items-center text-sm text-white/50">
          <p>Chapter information will be added as it is verified.</p>
        </Container>
      </div>
    </footer>
  );
}
