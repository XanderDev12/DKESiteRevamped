import type { LeadershipOfficeId, LeadershipOfficeTitle } from './offices';

export interface LeadershipOfficer {
  readonly biography?: string;
  readonly classYear?: number;
  readonly name: string;
  readonly term?: string;
}

export interface LeadershipOffice {
  readonly id: LeadershipOfficeId;
  readonly officer?: LeadershipOfficer;
  readonly title: LeadershipOfficeTitle;
}
