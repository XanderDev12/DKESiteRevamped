import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { ChapterEvent, EventAudience, EventStatus } from './types';

interface EventCalendarProps {
  compactEmptyState?: boolean;
  emptyDescription?: string;
  emptyTitle?: string;
  events: readonly ChapterEvent[];
  headingLevel?: 2 | 3;
}

const audienceLabels: Record<EventAudience, string> = {
  'current-members': 'Current members',
  alumni: 'Alumni',
  community: 'Community',
};

const statusLabels: Record<EventStatus, string> = {
  scheduled: 'Scheduled',
  postponed: 'Postponed',
  cancelled: 'Cancelled',
};

interface ParsedEventDate {
  date: Date;
  timeZone: string;
}

function parseDateOnly(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day, 12));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function parseEventDate(
  event: ChapterEvent,
  value: string,
): ParsedEventDate | null {
  const dateOnly = parseDateOnly(value);

  if (dateOnly) {
    return event.allDay ? { date: dateOnly, timeZone: 'UTC' } : null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return { date, timeZone: event.timeZone };
}

function formatEventDate(
  event: ChapterEvent,
  value: string,
  options: Intl.DateTimeFormatOptions,
  fallback: string,
) {
  const parsed = parseEventDate(event, value);
  if (!parsed) return fallback;

  try {
    return new Intl.DateTimeFormat('en-US', {
      ...options,
      timeZone: parsed.timeZone,
    }).format(parsed.date);
  } catch {
    return fallback;
  }
}

function formatMonth(event: ChapterEvent) {
  return formatEventDate(
    event,
    event.startsAt,
    { month: 'long', year: 'numeric' },
    'Date to be confirmed',
  );
}

function formatDay(event: ChapterEvent) {
  return formatEventDate(event, event.startsAt, { day: 'numeric' }, '—');
}

function formatWeekday(event: ChapterEvent) {
  return formatEventDate(event, event.startsAt, { weekday: 'short' }, 'TBD');
}

function formatFullDate(event: ChapterEvent) {
  return formatEventDate(
    event,
    event.startsAt,
    { day: 'numeric', month: 'long', year: 'numeric' },
    'Date to be confirmed',
  );
}

function dateKey(event: ChapterEvent, value: string) {
  return formatEventDate(
    event,
    value,
    { day: '2-digit', month: '2-digit', year: 'numeric' },
    '',
  );
}

function EventSchedule({ event }: { event: ChapterEvent }) {
  const endKey = event.endsAt ? dateKey(event, event.endsAt) : '';
  const startKey = dateKey(event, event.startsAt);
  const hasValidEnd = Boolean(event.endsAt && endKey);

  if (event.allDay) {
    if (!hasValidEnd || endKey === startKey) return <span>All day</span>;

    const rangeOptions: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const startLabel = formatEventDate(
      event,
      event.startsAt,
      rangeOptions,
      'Date to be confirmed',
    );
    const endLabel = formatEventDate(
      event,
      event.endsAt!,
      rangeOptions,
      'Date to be confirmed',
    );

    return (
      <>
        <span>All day · </span>
        <time dateTime={event.startsAt}>{startLabel}</time>
        <span className="sr-only"> to </span>
        <span aria-hidden="true"> – </span>
        <time dateTime={event.endsAt}>{endLabel}</time>
      </>
    );
  }

  const sameDay = hasValidEnd && startKey === endKey;
  const startLabel = formatEventDate(
    event,
    event.startsAt,
    hasValidEnd && !sameDay
      ? {
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          month: 'short',
          year: 'numeric',
        }
      : {
          hour: 'numeric',
          minute: '2-digit',
          timeZoneName: hasValidEnd ? undefined : 'short',
        },
    'Time to be confirmed',
  );

  if (!hasValidEnd) {
    return <time dateTime={event.startsAt}>{startLabel}</time>;
  }

  const endLabel = formatEventDate(
    event,
    event.endsAt!,
    sameDay
      ? { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }
      : {
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          month: 'short',
          timeZoneName: 'short',
          year: 'numeric',
        },
    'Time to be confirmed',
  );

  return (
    <>
      <time dateTime={event.startsAt}>{startLabel}</time>
      <span className="sr-only"> to </span>
      <span aria-hidden="true"> – </span>
      <time dateTime={event.endsAt}>{endLabel}</time>
    </>
  );
}

function groupEvents(events: readonly ChapterEvent[]) {
  const groups = new Map<string, ChapterEvent[]>();

  events.forEach((event) => {
    const month = formatMonth(event);
    const existing = groups.get(month);

    if (existing) {
      existing.push(event);
    } else {
      groups.set(month, [event]);
    }
  });

  return Array.from(groups, ([label, groupedEvents]) => ({
    events: groupedEvents,
    label,
  }));
}

export function EventCalendar({
  compactEmptyState = false,
  emptyDescription = 'Upcoming events and important dates will be published here.',
  emptyTitle = 'The calendar is being prepared',
  events,
  headingLevel = 2,
}: EventCalendarProps) {
  if (events.length === 0) {
    return (
      <ContentEmptyState
        accent="red"
        compact={compactEmptyState}
        headingLevel={headingLevel}
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  const groups = groupEvents(events);
  const MonthHeading = headingLevel === 2 ? 'h2' : 'h3';
  const EventHeading = headingLevel === 2 ? 'h3' : 'h4';

  return (
    <div aria-label="Event calendar" className="space-y-12">
      {groups.map((group, index) => {
        const headingId = `event-month-${index + 1}`;

        return (
          <section key={group.label} aria-labelledby={headingId}>
            <div className="mb-5 flex items-center gap-4">
              <MonthHeading
                id={headingId}
                className="font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue sm:text-4xl"
              >
                {group.label}
              </MonthHeading>
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </div>

            <ol className="grid gap-4">
              {group.events.map((event) => (
                <li key={event.id}>
                  <SurfaceCard accent="red" className="p-6 sm:p-7">
                    <article className="grid gap-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start">
                      <time
                        dateTime={event.startsAt}
                        aria-label={formatFullDate(event)}
                        className="block rounded-2xl bg-brand-blue-deep px-3 py-4 text-center text-white"
                      >
                        <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
                          {formatWeekday(event)}
                        </span>
                        <span className="mt-1 block font-display text-4xl font-medium leading-none">
                          {formatDay(event)}
                        </span>
                      </time>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                          <p className="text-brand-red">
                            <EventSchedule event={event} />
                          </p>
                          {event.status && event.status !== 'scheduled' ? (
                            <span className="rounded-full bg-muted px-3 py-1 text-foreground">
                              {statusLabels[event.status]}
                            </span>
                          ) : null}
                        </div>
                        <EventHeading className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                          {event.title}
                        </EventHeading>
                        {event.location || event.description ? (
                          <div className="mt-4 space-y-2 text-base leading-7 text-muted-foreground">
                            {event.location ? <p>{event.location}</p> : null}
                            {event.description ? (
                              <p>{event.description}</p>
                            ) : null}
                          </div>
                        ) : null}
                        {event.audiences.length ? (
                          <ul
                            aria-label="Event audiences"
                            className="mt-5 flex flex-wrap gap-2"
                          >
                            {event.audiences.map((audience) => (
                              <li
                                key={audience}
                                className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                              >
                                {audienceLabels[audience]}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {event.registrationUrl ? (
                          <a
                            href={event.registrationUrl}
                            className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                          >
                            Event details
                          </a>
                        ) : null}
                      </div>
                    </article>
                  </SurfaceCard>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
