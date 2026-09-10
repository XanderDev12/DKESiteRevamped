import Link from 'next/link';

import { SiteNavigation } from '@/components/site-navigation';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-blue-deep/95 text-white shadow-header backdrop-blur-xl">
      <div aria-hidden="true" className="brand-stripe h-1" />
      <Container className="relative flex min-h-[4.6875rem] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="inline-flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <span className="font-display text-3xl font-semibold tracking-[-0.04em] text-brand-gold">
            {siteConfig.shortName}
          </span>
          <span className="h-6 w-px bg-white/20" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            {siteConfig.chapterLabel}
          </span>
        </Link>
        <SiteNavigation />
      </Container>
    </header>
  );
}
