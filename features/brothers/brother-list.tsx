import { ContentEmptyState } from '@/components/content-empty-state';

import type { BrotherProfile } from './types';

interface BrotherListProps {
  brothers: readonly BrotherProfile[];
}

export function BrotherList({ brothers }: BrotherListProps) {
  if (brothers.length === 0) {
    return (
      <ContentEmptyState
        title="No profiles published"
        description="Current brother and leadership profiles will appear here once they are verified."
      />
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {brothers.map((brother) => (
        <li key={brother.id}>
          <article className="h-full rounded-xl border border-t-4 border-border border-t-brand-blue bg-card p-6">
            <h2 className="font-semibold tracking-tight text-brand-blue">
              {brother.name}
            </h2>
            {brother.classYear ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Class of {brother.classYear}
              </p>
            ) : null}
            {brother.leadershipRoles?.length || brother.biography ? (
              <div className="mt-4 space-y-3 text-muted-foreground">
                {brother.leadershipRoles?.length ? (
                  <ul aria-label={`${brother.name}'s leadership roles`}>
                    {brother.leadershipRoles.map((role) => (
                      <li key={`${role.title}-${role.term ?? ''}`}>
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
        </li>
      ))}
    </ul>
  );
}
