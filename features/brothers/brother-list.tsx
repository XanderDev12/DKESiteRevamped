import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { BrotherProfile } from './types';

interface BrotherListProps {
  brothers: readonly BrotherProfile[];
}

export function BrotherList({ brothers }: BrotherListProps) {
  if (brothers.length === 0) {
    return (
      <ContentEmptyState
        accent="blue"
        title="Profiles are on the way"
        description="The current chapter roster and leadership will be published here."
      />
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {brothers.map((brother) => (
        <li key={brother.id}>
          <SurfaceCard accent="blue" className="h-full p-7">
            <article>
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                {brother.name}
              </h2>
              {brother.classYear ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Class of {brother.classYear}
                </p>
              ) : null}
              {brother.leadershipRoles?.length || brother.biography ? (
                <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                  {brother.leadershipRoles?.length ? (
                    <ul
                      aria-label={`${brother.name}'s leadership roles`}
                      className="flex flex-wrap gap-2"
                    >
                      {brother.leadershipRoles.map((role) => (
                        <li
                          key={`${role.title}-${role.term ?? ''}`}
                          className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-brand-blue"
                        >
                          {role.title}
                          {role.term ? `, ${role.term}` : ''}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {brother.biography ? <p>{brother.biography}</p> : null}
                </div>
              ) : null}
            </article>
          </SurfaceCard>
        </li>
      ))}
    </ul>
  );
}
