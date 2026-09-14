import { SurfaceCard } from '@/components/ui/surface-card';
import type { NavigationAccent } from '@/lib/navigation';

import type { LeadershipOffice } from './types';

interface LeadershipGridProps {
  offices: readonly LeadershipOffice[];
}

const officeAccents: readonly NavigationAccent[] = ['blue', 'gold', 'red'];

export function LeadershipGrid({ offices }: LeadershipGridProps) {
  return (
    <section aria-labelledby="leadership-offices-heading">
      <h2
        id="leadership-offices-heading"
        className="mb-7 font-display text-3xl font-medium tracking-[-0.035em] text-brand-blue"
      >
        Officer positions
      </h2>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {offices.map((office, index) => {
          const accent = officeAccents[index % officeAccents.length];

          return (
            <li key={office.id}>
              <SurfaceCard
                accent={accent}
                className="h-full overflow-hidden p-6 sm:p-7"
              >
                <article className="flex h-full flex-col">
                  <h3 className="max-w-xs font-display text-3xl font-medium leading-[0.98] tracking-[-0.035em] text-brand-blue sm:text-[2.15rem]">
                    {office.title}
                  </h3>

                  {office.officer ? (
                    <div className="mt-7 border-t border-border pt-5">
                      <h4 className="font-display text-2xl font-medium tracking-[-0.025em] text-foreground">
                        {office.officer.name}
                      </h4>
                      {office.officer.classYear || office.officer.term ? (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {office.officer.classYear
                            ? `Class of ${office.officer.classYear}`
                            : null}
                          {office.officer.classYear && office.officer.term
                            ? ' · '
                            : null}
                          {office.officer.term ?? null}
                        </p>
                      ) : null}
                      {office.officer.biography ? (
                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                          {office.officer.biography}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              </SurfaceCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
