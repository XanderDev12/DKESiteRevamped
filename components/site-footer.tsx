import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { alumniAreas, primaryNavigation } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

const exploreNavigation = primaryNavigation.filter(
  (item) => item.href !== '/alumni',
);

const alumniNavigation = [
  { href: '/alumni', label: 'Alumni Home' },
  ...alumniAreas.map(({ href, label }) => ({ href, label })),
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue-deep text-white">
      <div aria-hidden="true" className="brand-stripe h-1" />
      <Container className="grid gap-12 py-14 sm:py-16 md:grid-cols-[1.2fr_0.55fr_0.65fr]">
        <div className="max-w-md">
          <p className="font-display text-5xl font-medium tracking-[-0.04em] text-brand-gold">
            {siteConfig.shortName}
          </p>
          <p className="mt-4 text-base leading-7 text-white/65">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Chapter links">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Explore
          </p>
          <ul className="grid gap-y-3 text-sm">
            {exploreNavigation.map((item) => (
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

        <nav aria-label="Alumni links">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Alumni
          </p>
          <ul className="grid gap-y-3 text-sm">
            {alumniNavigation.map((item) => (
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
          <p>Psi Omega chapter information will be added as it is verified.</p>
        </Container>
      </div>
    </footer>
  );
}
