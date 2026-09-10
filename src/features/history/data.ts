import type { HistoryEntry } from './types';

// Intentionally empty. Add only sourced and reviewed history records here.
const historyRecords: readonly HistoryEntry[] = [];

export async function getHistoryEntries(): Promise<readonly HistoryEntry[]> {
  return historyRecords;
}
