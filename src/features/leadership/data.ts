import { leadershipOfficeDefinitions } from './offices';
import type { LeadershipOffice } from './types';

// The offices are confirmed; officer details remain empty until they are verified.
const leadershipOffices: readonly LeadershipOffice[] =
  leadershipOfficeDefinitions;

export async function getLeadershipOffices(): Promise<
  readonly LeadershipOffice[]
> {
  return leadershipOffices;
}
