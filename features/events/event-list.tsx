import { ContentEmptyState } from '@/components/content-empty-state';

import type { ChapterEvent } from './types';

interface EventListProps {
  events: readonly ChapterEvent[];
}

function formatStart(event: ChapterEvent) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: event.timeZone,
  }).format(new Date(event.startsAt));
}

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <ContentEmptyState
        title="No events published"
        description="Current event information will appear here when an approved source is connected."
      />
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {events.map((event) => (
        <li key={event.id}>
          <article className="h-full rounded-xl border border-t-4 border-border border-t-brand-red bg-card p-6">
            <h2 className="font-semibold tracking-tight text-brand-blue">
              {event.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              <time dateTime={event.startsAt}>{formatStart(event)}</time>
            </p>
            {event.location || event.description ? (
              <div className="mt-4 space-y-2 text-muted-foreground">
                {event.location ? <p>{event.location}</p> : null}
                {event.description ? <p>{event.description}</p> : null}
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
