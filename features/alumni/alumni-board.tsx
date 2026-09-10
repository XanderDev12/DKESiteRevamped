import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { AlumniBoardMember } from './types';

interface AlumniBoardProps {
  members: readonly AlumniBoardMember[];
}

export function AlumniBoard({ members }: AlumniBoardProps) {
  if (members.length === 0) {
    return (
      <ContentEmptyState
        accent="gold"
        compact
        headingLevel={3}
        title="Board details are being prepared"
        description="The current alumni board and its roles will appear here once confirmed."
      />
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {members.map((member) => (
        <li key={member.id}>
          <SurfaceCard accent="gold" className="h-full p-7">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
                {member.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                {member.name}
              </h3>
              {member.classYear || member.term ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  {[member.classYear, member.term].filter(Boolean).join(' · ')}
                </p>
              ) : null}
              {member.biography ? (
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {member.biography}
                </p>
              ) : null}
            </article>
          </SurfaceCard>
        </li>
      ))}
    </ul>
  );
}
