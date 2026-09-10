import type { AlumniBoardMember, AlumniResource } from './types';

// Intentionally empty. Connect only verified donation destinations.
const donationOptions: readonly AlumniResource[] = [];

// Intentionally empty. Connect only verified alumni opportunities.
const involvementOpportunities: readonly AlumniResource[] = [];

// Intentionally empty. Add the current alumni board when it is confirmed.
const alumniBoard: readonly AlumniBoardMember[] = [];

export async function getDonationOptions(): Promise<readonly AlumniResource[]> {
  return donationOptions;
}

export async function getInvolvementOpportunities(): Promise<
  readonly AlumniResource[]
> {
  return involvementOpportunities;
}

export async function getAlumniBoard(): Promise<readonly AlumniBoardMember[]> {
  return alumniBoard;
}
