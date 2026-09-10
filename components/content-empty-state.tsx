import { cn } from '@/lib/cn';
import type { NavigationAccent } from '@/lib/navigation';

interface ContentEmptyStateProps {
  accent?: NavigationAccent;
  description: string;
  title: string;
}

const accentClasses: Record<NavigationAccent, string> = {
  blue: 'bg-brand-blue',
  gold: 'bg-brand-gold',
  red: 'bg-brand-red',
};

export function ContentEmptyState({
  accent = 'blue',
  description,
  title,
}: ContentEmptyStateProps) {
  return (
    <section className="relative flex min-h-[25rem] items-center justify-center overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-card sm:px-10">
      <div aria-hidden="true" className="section-glow absolute inset-0" />
      <div className="relative max-w-lg">
        <div
          aria-hidden="true"
          className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full border border-border bg-background"
        >
          <span className="flex items-end gap-1.5">
            <span
              className={cn('h-5 w-1.5 rounded-full', accentClasses[accent])}
            />
            <span className="h-9 w-1.5 rounded-full bg-brand-gold" />
            <span className="h-7 w-1.5 rounded-full bg-brand-red" />
          </span>
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          Coming soon
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.035em] text-brand-blue sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
