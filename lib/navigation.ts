export type NavigationAccent = 'blue' | 'gold' | 'red';

export interface NavigationItem {
  accent: NavigationAccent;
  description: string;
  href: string;
  label: string;
}

export const contentAreas = [
  {
    accent: 'blue',
    href: '/brothers',
    label: 'Brothers',
    description: 'Member profiles and chapter leadership.',
  },
  {
    accent: 'gold',
    href: '/history',
    label: 'History',
    description: 'A sourced timeline of chapter history.',
  },
  {
    accent: 'red',
    href: '/events',
    label: 'Events',
    description: 'Current and upcoming chapter events.',
  },
] as const satisfies readonly NavigationItem[];

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  ...contentAreas.map(({ href, label }) => ({ href, label })),
] as const;
