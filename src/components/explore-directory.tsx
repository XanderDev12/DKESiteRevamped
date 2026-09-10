import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import type { NavigationAccent, NavigationItem } from '@/lib/navigation';

interface ExploreDirectoryProps {
  items: readonly NavigationItem[];
}

const accentThemes: Record<
  NavigationAccent,
  {
    action: string;
    number: string;
    rule: string;
    wash: string;
  }
> = {
  blue: {
    action: 'bg-brand-blue text-white group-hover:bg-brand-red',
    number: 'text-brand-blue',
    rule: 'bg-brand-blue',
    wash: 'from-brand-blue/[0.09]',
  },
  gold: {
    action:
      'bg-brand-gold text-brand-blue-deep group-hover:bg-brand-blue-deep group-hover:text-white',
    number: 'text-brand-red',
    rule: 'bg-brand-gold',
    wash: 'from-brand-gold/[0.16]',
  },
  red: {
    action: 'bg-brand-red text-white group-hover:bg-brand-blue',
    number: 'text-brand-red',
    rule: 'bg-brand-red',
    wash: 'from-brand-red/[0.09]',
  },
};

export function ExploreDirectory({ items }: ExploreDirectoryProps) {
  return (
    <section
      aria-labelledby="explore-heading"
      className="explore-flow relative isolate z-10 -mt-px pb-20 sm:pb-28 lg:pb-32"
    >
      <div className="explore-flow-intro relative">
        <div
          aria-hidden="true"
          className="explore-flow-grid pointer-events-none absolute inset-0"
        />

        <Container className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
          <header className="grid gap-8 border-b border-white/20 pb-10 sm:pb-12 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)] lg:items-end lg:gap-16">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              Explore the chapter
            </p>
            <div>
              <h2
                id="explore-heading"
                className="max-w-4xl font-display text-[clamp(3.5rem,6.5vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white text-balance"
              >
                Find your way through{' '}
                <span className="italic text-brand-gold">Psi Omega.</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
                Members, history, events, alumni connections, and the people to
                contact.
              </p>
            </div>
          </header>
        </Container>
      </div>

      <div
        aria-hidden="true"
        className="explore-flow-transition relative h-[clamp(8rem,18vw,14rem)] overflow-hidden"
      >
        <div className="absolute -right-20 -top-24 size-72 rounded-full border border-brand-gold/25 sm:size-96" />
      </div>

      <Container>
        {items.length > 0 ? (
          <nav aria-label="Explore Psi Omega">
            <ol className="m-0 list-none border-y border-brand-blue/15 p-0">
              {items.map((item, index) => {
                const theme = accentThemes[item.accent];
                const position = String(index + 1).padStart(2, '0');
                const descriptionId = `explore-${index + 1}-description`;

                return (
                  <li
                    key={item.href}
                    className="explore-directory-item group relative grid min-h-[clamp(13rem,25svh,17rem)] scroll-mt-[calc(var(--site-header-height)+1rem)] border-b border-brand-blue/15 px-4 py-8 last:border-b-0 focus-within:ring-4 focus-within:ring-inset focus-within:ring-brand-blue sm:px-7 sm:py-10"
                  >
                    <div
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none',
                        theme.wash,
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute inset-y-8 left-0 w-1 rounded-r-full transition-[width] duration-300 group-hover:w-2 group-focus-within:w-2 motion-reduce:transition-none',
                        theme.rule,
                      )}
                    />

                    <div className="grid self-center gap-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_auto] lg:items-center">
                      <p
                        aria-hidden="true"
                        className={cn(
                          'self-start font-mono text-sm font-semibold tracking-[0.18em] sm:pt-3 lg:self-center lg:pt-0',
                          theme.number,
                        )}
                      >
                        {position}
                      </p>

                      <div>
                        <h3 className="font-display text-[clamp(3rem,5.25vw,5.25rem)] font-medium leading-[0.88] tracking-[-0.05em] text-brand-blue transition-colors duration-300 group-hover:text-brand-red group-focus-within:text-brand-red motion-reduce:transition-none">
                          {item.label}
                        </h3>
                        <p
                          id={descriptionId}
                          className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                        >
                          {item.description}
                        </p>
                      </div>

                      <Link
                        href={item.href}
                        aria-describedby={descriptionId}
                        className={cn(
                          "inline-flex min-h-12 w-fit items-center gap-3 rounded-full px-5 text-sm font-semibold transition-all duration-300 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none motion-reduce:transform-none motion-reduce:transition-none sm:col-start-2 lg:col-start-auto lg:justify-self-end",
                          theme.action,
                        )}
                      >
                        Explore {item.label}
                        <span
                          aria-hidden="true"
                          className="text-lg transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                        >
                          ↗
                        </span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
