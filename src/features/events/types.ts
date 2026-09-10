export type EventStatus = 'scheduled' | 'postponed' | 'cancelled';
export type EventVisibility = 'public' | 'members' | 'invite-only';
export type EventAudience = 'current-members' | 'alumni' | 'community';

export interface ChapterEvent {
  allDay?: boolean;
  audiences: readonly EventAudience[];
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

export interface EventQuery {
  audience?: EventAudience;
}
