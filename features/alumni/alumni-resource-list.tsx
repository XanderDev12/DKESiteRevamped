import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';
import type { NavigationAccent } from '@/lib/navigation';

import type { AlumniResource } from './types';

interface AlumniResourceListProps {
  accent?: NavigationAccent;
  emptyDescription: string;
  emptyTitle: string;
  resources: readonly AlumniResource[];
}

export function AlumniResourceList({
  accent = 'blue',
  emptyDescription,
  emptyTitle,
  resources,
}: AlumniResourceListProps) {
  if (resources.length === 0) {
    return (
      <ContentEmptyState
        accent={accent}
        compact
        headingLevel={3}
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {resources.map((resource) => (
        <li key={resource.id}>
          <SurfaceCard accent={accent} className="h-full p-7">
            <article>
              <h3 className="font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                {resource.title}
              </h3>
              {resource.description ? (
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {resource.description}
                </p>
              ) : null}
              {resource.action ? (
                <a
                  href={resource.action.href}
                  target={resource.action.external ? '_blank' : undefined}
                  rel={resource.action.external ? 'noreferrer' : undefined}
                  className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  {resource.action.label}
                </a>
              ) : null}
            </article>
          </SurfaceCard>
        </li>
      ))}
    </ul>
  );
}
