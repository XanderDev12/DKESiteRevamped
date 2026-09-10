import type { ChapterEvent, EventQuery } from './types';

// Intentionally empty. Replace this adapter when the event source is selected.
const eventRecords: readonly ChapterEvent[] = [];

export async function getEvents(
  query: EventQuery = {},
): Promise<readonly ChapterEvent[]> {
  return eventRecords
    .filter((event) => !event.visibility || event.visibility === 'public')
    .filter(
      (event) => !query.audience || event.audiences.includes(query.audience),
    )
    .slice()
    .sort((left, right) => {
      const leftTime = new Date(left.startsAt).getTime();
      const rightTime = new Date(right.startsAt).getTime();

      if (Number.isNaN(leftTime) && Number.isNaN(rightTime)) return 0;
      if (Number.isNaN(leftTime)) return 1;
      if (Number.isNaN(rightTime)) return -1;
      return leftTime - rightTime;
    });
}
