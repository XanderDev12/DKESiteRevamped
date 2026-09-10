import { ContentEmptyState } from '@/components/content-empty-state';

import type { HistoryEntry } from './types';

interface HistoryTimelineProps {
  entries: readonly HistoryEntry[];
}

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  if (entries.length === 0) {
    return (
      <ContentEmptyState
        title="No history entries published"
        description="Verified chapter history will appear here after source review."
      />
    );
  }

  return (
    <ol className="space-y-8 border-l-2 border-brand-gold pl-6">
      {entries.map((entry) => (
        <li key={entry.id} className="relative max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute -left-[1.84rem] top-2 size-3 rounded-full border-2 border-background bg-brand-red"
          />
          {entry.dateLabel ? (
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              {entry.dateLabel}
            </p>
          ) : null}
          <h2 className="text-xl font-semibold tracking-tight text-brand-blue">
            {entry.title}
          </h2>
          {entry.body?.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {entry.sources?.length ? (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {entry.sources.map((source) => (
                <li key={`${source.label}-${source.url ?? ''}`}>
                  {source.url ? (
                    <a
                      href={source.url}
                      className="underline underline-offset-4"
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
        </li>
      ))}
    </ol>
  );
}
