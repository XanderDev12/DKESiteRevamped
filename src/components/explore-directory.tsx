'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const count = String(items.length).padStart(2, '0');
  const activePosition = items.length
    ? String(activeIndex + 1).padStart(2, '0')
    : '00';
  const progress = items.length ? (activeIndex + 1) / items.length : 0;

  useEffect(() => {
    const itemElements = itemRefs.current.filter(
      (item): item is HTMLLIElement => item !== null,
    );

    if (!itemElements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => {
            const viewportCenter = window.innerHeight * 0.4;
            const firstCenter =
              first.boundingClientRect.top +
              first.boundingClientRect.height / 2;
            const secondCenter =
              second.boundingClientRect.top +
              second.boundingClientRect.height / 2;

            return (
              Math.abs(firstCenter - viewportCenter) -
              Math.abs(secondCenter - viewportCenter)
            );
          })[0];

        if (!visibleEntry) return;

        setActiveIndex(
          Number((visibleEntry.target as HTMLElement).dataset.index),
        );
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    );

    itemElements.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section
      aria-labelledby="explore-heading"
      className="relative z-10 -mt-8 rounded-t-[clamp(2.5rem,6vw,5rem)] bg-background py-20 sm:-mt-12 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[inherit]"
      >
        <div className="section-glow absolute inset-0" />
        <div className="absolute -right-24 top-40 size-72 rounded-full border border-brand-gold/30 sm:size-96" />
      </div>

      <Container className="relative grid items-start gap-14 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-20 xl:gap-28">
        <div className="explore-directory-anchor">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Explore the chapter
          </p>
          <h2
            id="explore-heading"
            className="mt-7 max-w-xl font-display text-[clamp(3.5rem,6.5vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-brand-blue text-balance"
          >
            Find your way through{' '}
            <span className="italic text-brand-red">Psi Omega.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted-foreground">
            Members, history, events, alumni connections, and the people to
            contact.
          </p>

          <div
            aria-hidden="true"
            className="mt-10 border-t border-brand-blue/15 pt-6 sm:mt-12"
          >
            <div className="flex items-end gap-4">
              <span className="font-display text-7xl font-medium leading-none tracking-[-0.06em] text-brand-blue">
                {activePosition}
              </span>
              <p className="pb-1 font-mono text-sm font-semibold tracking-[0.16em] text-brand-red">
                / {count}
              </p>
            </div>
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-brand-blue/10">
              <span
                className="block h-full origin-left rounded-full brand-stripe transition-[width] duration-500 motion-reduce:transition-none"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue/70">
              Scroll through
            </p>
          </div>
        </div>

        <nav aria-label="Explore Psi Omega">
          <ol className="m-0 list-none border-y border-brand-blue/15 p-0">
            {items.map((item, index) => {
              const theme = accentThemes[item.accent];
              const position = String(index + 1).padStart(2, '0');
              const descriptionId = `explore-${index + 1}-description`;
              const isActive = activeIndex === index;

              return (
                <li
                  key={item.href}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  onFocusCapture={() => setActiveIndex(index)}
                  data-index={index}
                  className="explore-directory-item group relative grid min-h-[clamp(16rem,34svh,22rem)] scroll-mt-[calc(var(--site-header-height)+1rem)] border-b border-brand-blue/15 px-4 py-8 last:border-b-0 focus-within:ring-4 focus-within:ring-inset focus-within:ring-brand-blue sm:px-7 sm:py-10"
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      'pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none',
                      isActive ? 'opacity-100' : 'opacity-0',
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
                      <h3
                        className={cn(
                          'font-display text-[clamp(3rem,5.5vw,5.75rem)] font-medium leading-[0.88] tracking-[-0.05em] transition-colors duration-300 group-hover:text-brand-red group-focus-within:text-brand-red motion-reduce:transition-none',
                          isActive ? 'text-brand-red' : 'text-brand-blue',
                        )}
                      >
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
      </Container>
    </section>
  );
}
