import type { BrotherProfile } from './types';

// Intentionally empty. Replace this adapter when a verified content source is chosen.
const brotherRecords: readonly BrotherProfile[] = [];

export async function getBrothers(): Promise<readonly BrotherProfile[]> {
  return brotherRecords;
}
