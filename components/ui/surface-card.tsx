import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import type { NavigationAccent } from '@/lib/navigation';

interface SurfaceCardProps {
  accent?: NavigationAccent;
  children: ReactNode;
  className?: string;
  href?: string;
}

const accentClasses: Record<NavigationAccent, string> = {
  blue: 'border-t-brand-blue',
  gold: 'border-t-brand-gold',
  red: 'border-t-brand-red',
};

export function SurfaceCard({
  accent = 'blue',
  children,
  className,
  href,
}: SurfaceCardProps) {
  const classes = cn(
    'rounded-2xl border border-t-4 border-border bg-card shadow-card',
    accentClasses[accent],
    href &&
      'transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-card-hover focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4 focus-visible:shadow-card-hover motion-reduce:transform-none',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
