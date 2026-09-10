export interface LeadershipRole {
  title: string;
  term?: string;
}

export interface BrotherProfile {
  biography?: string;
  classYear?: number;
  id: string;
  imageAlt?: string;
  imageUrl?: string;
  leadershipRoles?: readonly LeadershipRole[];
  name: string;
}
