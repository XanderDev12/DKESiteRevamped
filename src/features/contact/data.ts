import type { ChapterContact } from './types';

// Intentionally empty. Add only current, consented contact information.
const chapterContacts: readonly ChapterContact[] = [];

export async function getChapterContacts(): Promise<readonly ChapterContact[]> {
  return chapterContacts;
}
