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
    label: 'Members',
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
    label: 'Calendar',
    description: 'Find chapter events, important dates, and gatherings.',
  },
  {
    accent: 'gold',
    href: '/alumni',
    label: 'Alumni',
    description: 'Stay connected through events, giving, and involvement.',
  },
  {
    accent: 'red',
    href: '/contact',
    label: 'Contact',
    description: 'Reach the current members of Psi Omega.',
  },
] as const satisfies readonly NavigationItem[];

export const alumniAreas = [
  {
    accent: 'red',
    href: '/alumni#events',
    label: 'Alumni Events',
    description: 'Find gatherings and dates intended for alumni.',
  },
  {
    accent: 'gold',
    href: '/alumni#donations',
    label: 'Donations',
    description: 'Access verified ways to support the chapter.',
  },
  {
    accent: 'blue',
    href: '/alumni#involvement',
    label: 'Involvement',
    description: 'Explore ways to volunteer, mentor, and reconnect.',
  },
  {
    accent: 'gold',
    href: '/alumni#board',
    label: 'Alumni Board',
    description: 'Meet the alumni serving the chapter community.',
  },
] as const satisfies readonly NavigationItem[];

export const headerNavigation = contentAreas.map(({ href, label }) => ({
  href,
  label,
}));

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  ...headerNavigation,
] as const;
