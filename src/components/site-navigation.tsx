'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/cn';
import { headerNavigation, primaryNavigation } from '@/lib/navigation';

function isCurrentPath(pathname: string, href: string) {
  return href === '/'
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-1">
          {headerNavigation.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'relative inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold',
                    isCurrent && 'bg-white/10 text-brand-gold',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold lg:hidden"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={cn(
              'absolute left-0 top-1 h-0.5 w-5 bg-current transition-transform duration-300',
              isOpen && 'translate-y-1 rotate-45',
            )}
          />
          <span
            className={cn(
              'absolute bottom-1 left-0 h-0.5 w-5 bg-current transition-transform duration-300',
              isOpen && '-translate-y-1 -rotate-45',
            )}
          />
        </span>
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={cn(
          'absolute inset-x-0 top-full border-y border-white/10 bg-brand-blue-deep px-5 py-4 shadow-2xl sm:px-8 lg:hidden',
          !isOpen && 'hidden',
        )}
      >
        <ul className="grid gap-1">
          {primaryNavigation.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold',
                    isCurrent && 'bg-white/10 text-brand-gold',
                  )}
                >
                  {item.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
