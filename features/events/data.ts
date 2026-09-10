import type { ChapterEvent } from './types';

// Intentionally empty. Replace this adapter when the event source is selected.
const eventRecords: readonly ChapterEvent[] = [];

export async function getEvents(): Promise<readonly ChapterEvent[]> {
  return eventRecords;
}
