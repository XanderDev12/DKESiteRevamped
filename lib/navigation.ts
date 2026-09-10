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
    description: 'Meet chapter members and leadership.',
  },
  {
    accent: 'gold',
    href: '/history',
    label: 'History',
    description: 'Explore the chapter story, milestone by milestone.',
  },
  {
    accent: 'red',
    href: '/events',
    label: 'Events',
    description: 'See what is happening and what is coming up.',
  },
] as const satisfies readonly NavigationItem[];

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  ...contentAreas.map(({ href, label }) => ({ href, label })),
] as const;
