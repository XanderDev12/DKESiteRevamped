import Link from 'next/link';
import type { CSSProperties } from 'react';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';

interface ExplorePanelProps {
  description: string;
  href: string;
  index: number;
  title: string;
  total: number;
}

const panelThemes = [
  {
    action: 'bg-brand-gold text-brand-blue-deep hover:bg-white',
    description: 'text-white/70',
    focus: 'focus-visible:ring-brand-gold',
    grid: 'opacity-70',
    index: 'text-white/[0.055]',
    kicker: 'text-brand-gold',
    shell: 'border-white/15 bg-brand-blue text-white',
    title: 'text-white',
  },
  {
    action: 'bg-brand-blue-deep text-white hover:bg-brand-red',
    description: 'text-brand-blue-deep/70',
    focus: 'focus-visible:ring-brand-blue-deep',
    grid: 'panel-grid-dark opacity-35',
    index: 'text-brand-blue/[0.07]',
    kicker: 'text-brand-blue-deep',
    shell: 'border-brand-blue/15 bg-brand-gold text-brand-blue-deep',
    title: 'text-brand-blue-deep',
  },
  {
    action: 'bg-brand-gold text-brand-blue-deep hover:bg-white',
    description: 'text-white/90',
    focus: 'focus-visible:ring-brand-gold',
    grid: 'opacity-55',
    index: 'text-white/[0.07]',
    kicker: 'text-white',
    shell: 'border-white/15 bg-brand-red text-white',
    title: 'text-white',
  },
  {
    action:
      'bg-brand-red text-white hover:bg-brand-gold hover:text-brand-blue-deep',
    description: 'text-white/70',
    focus: 'focus-visible:ring-brand-gold',
    grid: 'opacity-65',
    index: 'text-white/[0.055]',
    kicker: 'text-brand-gold',
    shell: 'border-white/15 bg-brand-blue-deep text-white',
    title: 'text-white',
  },
  {
    action: 'bg-brand-blue text-white hover:bg-brand-red',
    description: 'text-muted-foreground',
    focus: 'focus-visible:ring-brand-blue',
    grid: 'panel-grid-dark opacity-25',
    index: 'text-brand-blue/[0.06]',
    kicker: 'text-brand-red',
    shell: 'border-brand-blue/15 bg-surface-soft text-brand-blue-deep',
    title: 'text-brand-blue',
  },
] as const;

type StackPanelStyle = CSSProperties & {
  '--panel-offset': string;
  '--panel-z': number;
};

export function ExplorePanel({
  description,
  href,
  index,
  title,
  total,
}: ExplorePanelProps) {
  const theme = panelThemes[(index - 1) % panelThemes.length];
  const position = String(index).padStart(2, '0');
  const count = String(total).padStart(2, '0');
  const stackStyle: StackPanelStyle = {
    '--panel-offset': `${(index - 1) * 0.75}rem`,
    '--panel-z': index + 10,
  };

  return (
    <li className="scroll-stack-panel relative" style={stackStyle}>
      <article
        className={cn(
          'scroll-stack-surface relative isolate overflow-hidden rounded-t-[2rem] border-t shadow-[0_-18px_60px_rgb(10_9_40_/_18%)] sm:rounded-t-[2.75rem]',
          theme.shell,
        )}
      >
        <div
          aria-hidden="true"
          className={cn('panel-grid absolute inset-0', theme.grid)}
        />
        <p
          aria-hidden="true"
          className={cn(
            'absolute -bottom-[0.24em] right-[-0.02em] font-display text-[clamp(15rem,45vw,38rem)] font-medium leading-none tracking-[-0.1em]',
            theme.index,
          )}
        >
          {position}
        </p>

        <Container className="relative flex flex-1 items-center py-12 sm:py-16">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-4xl">
              <p
                className={cn(
                  'flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em]',
                  theme.kicker,
                )}
              >
                <span className="h-px w-10 bg-current" aria-hidden="true" />
                {position} / {count}
              </p>
              <h3
                className={cn(
                  'mt-7 font-display text-[clamp(4.5rem,13vw,10rem)] font-medium leading-[0.82] tracking-[-0.06em] text-balance',
                  theme.title,
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  'mt-7 max-w-xl text-lg leading-8 sm:text-xl sm:leading-9',
                  theme.description,
                )}
              >
                {description}
              </p>
            </div>

            <Link
              href={href}
              className={cn(
                'group inline-flex min-h-14 w-fit items-center gap-5 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent motion-reduce:transform-none',
                theme.action,
                theme.focus,
              )}
            >
              Open {title}
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
              >
                ↗
              </span>
            </Link>
          </div>
        </Container>
      </article>
    </li>
  );
}
