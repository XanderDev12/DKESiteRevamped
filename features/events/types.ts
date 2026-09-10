export type EventStatus = 'scheduled' | 'postponed' | 'cancelled';
export type EventVisibility = 'public' | 'members' | 'invite-only';

export interface ChapterEvent {
  description?: string;
  endsAt?: string;
  id: string;
  location?: string;
  registrationUrl?: string;
  startsAt: string;
  status?: EventStatus;
  timeZone: string;
  title: string;
  visibility?: EventVisibility;
}
