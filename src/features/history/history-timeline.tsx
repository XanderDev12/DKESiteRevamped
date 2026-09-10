import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { HistoryEntry } from './types';

interface HistoryTimelineProps {
  entries: readonly HistoryEntry[];
}

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  if (entries.length === 0) {
    return (
      <ContentEmptyState
        accent="gold"
        title="The archive is taking shape"
        description="A sourced chapter timeline will be published here."
      />
    );
  }

  return (
    <ol className="space-y-8 border-l-2 border-brand-gold pl-7 sm:pl-10">
      {entries.map((entry) => (
        <li key={entry.id} className="relative max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute -left-[2.08rem] top-8 size-3 rounded-full border-2 border-background bg-brand-red sm:-left-[2.86rem]"
          />
          <SurfaceCard accent="gold" className="p-7 sm:p-8">
            {entry.dateLabel ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
                {entry.dateLabel}
              </p>
            ) : null}
            <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
              {entry.title}
            </h2>
            {entry.body?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {entry.sources?.length ? (
              <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                {entry.sources.map((source) => (
                  <li key={`${source.label}-${source.url ?? ''}`}>
                    {source.url ? (
                      <a
                        href={source.url}
                        className="font-semibold text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-red"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {source.label}
                      </a>
                    ) : (
                      source.label
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </SurfaceCard>
        </li>
      ))}
    </ol>
  );
}
