export interface NavigationItem {
  description: string;
  href: string;
  label: string;
}

export const contentAreas = [
  {
    href: '/brothers',
    label: 'Brothers',
    description: 'Member profiles and chapter leadership.',
  },
  {
    href: '/history',
    label: 'History',
    description: 'A sourced timeline of chapter history.',
  },
  {
    href: '/events',
    label: 'Events',
    description: 'Current and upcoming chapter events.',
  },
] as const satisfies readonly NavigationItem[];

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  ...contentAreas.map(({ href, label }) => ({ href, label })),
] as const;
