import { cn } from '@/lib/cn';
import type { NavigationAccent } from '@/lib/navigation';

interface ContentEmptyStateProps {
  accent?: NavigationAccent;
  compact?: boolean;
  description: string;
  headingLevel?: 2 | 3;
  title: string;
}

const accentClasses: Record<NavigationAccent, string> = {
  blue: 'bg-brand-blue',
  gold: 'bg-brand-gold',
  red: 'bg-brand-red',
};

export function ContentEmptyState({
  accent = 'blue',
  compact = false,
  description,
  headingLevel = 2,
  title,
}: ContentEmptyStateProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-card px-6 text-center shadow-card sm:px-10',
        compact ? 'min-h-64 py-10' : 'min-h-[25rem] py-14',
      )}
    >
      <div aria-hidden="true" className="section-glow absolute inset-0" />
      <div className="relative max-w-lg">
        <div
          aria-hidden="true"
          className={cn(
            'mx-auto flex items-center justify-center rounded-full border border-border bg-background',
            compact ? 'mb-6 size-16' : 'mb-8 size-20',
          )}
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
        <Heading
          className={cn(
            'mt-4 font-display font-medium tracking-[-0.035em] text-brand-blue',
            compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl',
          )}
        >
          {title}
        </Heading>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
