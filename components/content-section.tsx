import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import type { NavigationAccent } from '@/lib/navigation';

interface ContentSectionProps {
  accent?: NavigationAccent;
  children: ReactNode;
  description: string;
  id: string;
  index: string;
  title: string;
}

const accentClasses: Record<NavigationAccent, string> = {
  blue: 'text-brand-blue',
  gold: 'text-brand-gold',
  red: 'text-brand-red',
};

export function ContentSection({
  accent = 'blue',
  children,
  description,
  id,
  index,
  title,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-t border-border py-12 first:border-t-0 first:pt-0 sm:py-16 sm:first:pt-0"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(13rem,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
        <header>
          <p
            className={cn(
              'font-mono text-sm font-semibold tracking-[0.18em]',
              accentClasses[accent],
            )}
          >
            {index}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-4 font-display text-4xl font-medium tracking-[-0.035em] text-brand-blue sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </header>

        <div>{children}</div>
      </div>
    </section>
  );
}
