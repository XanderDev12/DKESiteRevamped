import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import type { NavigationAccent } from '@/lib/navigation';

interface PageHeroProps {
  accent?: NavigationAccent;
  description?: string;
  eyebrow?: string;
  marker?: string;
  title: string;
}

const accentClasses: Record<NavigationAccent, string> = {
  blue: 'bg-brand-blue',
  gold: 'bg-brand-gold',
  red: 'bg-brand-red',
};

export function PageHero({
  accent = 'blue',
  description,
  eyebrow,
  marker,
  title,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-card">
      <div aria-hidden="true" className="page-hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className={cn(
          'absolute -right-24 -top-28 size-80 rounded-full opacity-10 blur-3xl',
          accentClasses[accent],
        )}
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-4xl">
            {eyebrow ? (
              <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
                <span
                  aria-hidden="true"
                  className={cn(
                    'h-1.5 w-8 rounded-full',
                    accentClasses[accent],
                  )}
                />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display text-[clamp(3.75rem,9vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-brand-blue text-balance">
              {title}
            </h1>
            {description ? (
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {description}
              </p>
            ) : null}
          </div>

          {marker ? (
            <p
              aria-hidden="true"
              className="hidden font-display text-[9rem] font-medium leading-none tracking-[-0.08em] text-brand-blue/[0.06] lg:block"
            >
              {marker}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
