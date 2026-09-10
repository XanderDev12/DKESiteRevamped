import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { ChapterEvent } from './types';

interface EventListProps {
  events: readonly ChapterEvent[];
}

function formatStart(event: ChapterEvent) {
  const startsAt = new Date(event.startsAt);

  if (Number.isNaN(startsAt.getTime())) return 'Date to be confirmed';

  try {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: event.timeZone,
    }).format(startsAt);
  } catch {
    return 'Date to be confirmed';
  }
}

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <ContentEmptyState
        accent="red"
        title="Events are on the way"
        description="Upcoming events and important dates will be published here."
      />
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {events.map((event) => (
        <li key={event.id}>
          <SurfaceCard accent="red" className="h-full p-7">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
                <time dateTime={event.startsAt}>{formatStart(event)}</time>
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                {event.title}
              </h2>
              {event.location || event.description ? (
                <div className="mt-5 space-y-2 text-base leading-7 text-muted-foreground">
                  {event.location ? <p>{event.location}</p> : null}
                  {event.description ? <p>{event.description}</p> : null}
                </div>
              ) : null}
            </article>
          </SurfaceCard>
        </li>
      ))}
    </ul>
  );
}
