import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ButtonLinkVariant = 'gold' | 'outline' | 'primary' | 'text';

interface ButtonLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonLinkVariant;
}

const variantClasses: Record<ButtonLinkVariant, string> = {
  gold: 'bg-brand-gold text-brand-blue-deep hover:bg-white',
  outline:
    'border border-white/30 bg-white/5 text-white hover:border-white hover:bg-white hover:text-brand-blue-deep',
  primary: 'bg-brand-blue text-white hover:bg-brand-red',
  text: 'text-brand-blue hover:text-brand-red',
};

export function ButtonLink({
  children,
  className,
  href,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 motion-reduce:transform-none',
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
      >
        →
      </span>
    </Link>
  );
}
