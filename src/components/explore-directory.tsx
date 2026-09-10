'use client';

import Link from 'next/link';
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
} from 'react';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import type { NavigationAccent, NavigationItem } from '@/lib/navigation';

interface ExploreDirectoryProps {
  items: readonly NavigationItem[];
}

type DepthCardStyle = CSSProperties & {
  '--depth-base-angle'?: string;
};

const accentThemes: Record<
  NavigationAccent,
  {
    accent: string;
    hover: string;
    number: string;
  }
> = {
  blue: {
    accent: 'bg-brand-blue',
    hover: 'hover:border-brand-blue/60',
    number: 'text-brand-blue',
  },
  gold: {
    accent: 'bg-brand-gold',
    hover: 'hover:border-brand-gold/70',
    number: 'text-brand-red',
  },
  red: {
    accent: 'bg-brand-red',
    hover: 'hover:border-brand-red/65',
    number: 'text-brand-red',
  },
};

const depthMediaQuery =
  '(min-width: 64rem) and (min-height: 50rem) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function ExploreDirectory({ items }: ExploreDirectoryProps) {
  const regionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const exitRef = useRef<HTMLDivElement>(null);
  const focusWithinRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [depthReady, setDepthReady] = useState(false);

  const itemCount = items.length;
  const supportsItemCount = itemCount >= 3 && itemCount <= 7;
  const angleStep = itemCount > 0 ? 360 / itemCount : 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia(depthMediaQuery);
    const supportsDepth =
      CSS.supports('perspective', '1000px') &&
      CSS.supports('transform-style', 'preserve-3d');

    const syncPresentation = () => {
      setDepthReady(mediaQuery.matches && supportsDepth && supportsItemCount);
    };

    syncPresentation();
    mediaQuery.addEventListener('change', syncPresentation);

    return () => mediaQuery.removeEventListener('change', syncPresentation);
  }, [supportsItemCount]);

  useEffect(() => {
    const region = regionRef.current;
    const stage = stageRef.current;

    if (!depthReady || !region || !stage || itemCount < 2) {
      region?.style.removeProperty('--depth-rotation');
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return;
    }

    let animationFrame = 0;

    const updateDepth = () => {
      animationFrame = 0;

      if (focusWithinRef.current) {
        return;
      }

      const regionRect = region.getBoundingClientRect();
      const stickyTop =
        Number.parseFloat(window.getComputedStyle(stage).top) || 0;
      const exitHeight = exitRef.current?.offsetHeight ?? 0;
      const travel = Math.max(
        region.offsetHeight - stage.offsetHeight - exitHeight,
        1,
      );
      const progress = clamp((stickyTop - regionRect.top) / travel, 0, 1);
      const position = progress * (itemCount - 1);
      const degrees = position * angleStep;
      const nextActiveIndex = clamp(Math.round(position), 0, itemCount - 1);

      region.style.setProperty('--depth-rotation', `${-degrees}deg`);

      if (nextActiveIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextActiveIndex;
        setActiveIndex(nextActiveIndex);
      }
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateDepth);
      }
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(region);
    resizeObserver.observe(stage);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [angleStep, depthReady, itemCount]);

  const handleLinkFocus = (index: number) => {
    focusWithinRef.current = true;
    activeIndexRef.current = index;
    regionRef.current?.style.setProperty(
      '--depth-rotation',
      `${index * -angleStep}deg`,
    );
    setActiveIndex(index);
  };

  const handleNavBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      focusWithinRef.current = false;
    }
  };

  if (itemCount === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="explore-heading"
      className="explore-depth-section relative isolate -mt-px bg-brand-blue-deep text-white"
      data-depth-ready={depthReady ? 'true' : 'false'}
    >
      <a
        href="#site-footer"
        className="sr-only z-40 rounded-full bg-brand-gold px-5 py-3 font-semibold text-brand-blue-deep shadow-xl focus:not-sr-only focus:absolute focus:left-5 focus:top-5"
      >
        Skip destinations
      </a>

      <div ref={regionRef} className="explore-depth-region">
        <div ref={stageRef} className="explore-depth-stage">
          <div
            aria-hidden="true"
            className="explore-depth-grid pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="explore-depth-glow pointer-events-none absolute inset-0"
          />

          <Container className="explore-depth-layout relative">
            <header className="explore-depth-copy">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold sm:text-sm">
                  <span className="h-px w-9 bg-brand-red" aria-hidden="true" />
                  Chapter directory
                </p>
                <h2
                  id="explore-heading"
                  className="mt-5 max-w-md font-display text-[clamp(3rem,4.5vw,4.75rem)] font-medium leading-[0.9] tracking-[-0.05em] text-balance"
                >
                  Explore{' '}
                  <span className="italic text-brand-gold">Psi Omega.</span>
                </h2>
              </div>

              <div className="explore-depth-cue">
                <p className="text-sm leading-6 text-white/58">
                  Scroll to bring each destination forward.
                </p>
                <p
                  aria-hidden="true"
                  className="mt-3 font-mono text-xs font-semibold tracking-[0.2em] text-brand-gold"
                >
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(itemCount).padStart(2, '0')}
                </p>
              </div>
            </header>

            <nav
              aria-label="Explore Psi Omega"
              aria-describedby="explore-depth-instructions"
              className="explore-depth-nav"
              onBlurCapture={handleNavBlur}
            >
              <p id="explore-depth-instructions" className="sr-only">
                Choose from five chapter destinations. On large screens, focus
                brings each link to the front of a decorative depth carousel.
              </p>

              <div aria-hidden="true" className="explore-depth-axis">
                <span />
                <span />
              </div>

              <ol className="explore-depth-deck m-0 list-none p-0">
                {items.map((item, index) => {
                  const theme = accentThemes[item.accent];
                  const position = String(index + 1).padStart(2, '0');
                  const descriptionId = `explore-${index + 1}-description`;
                  const titleId = `explore-${index + 1}-title`;
                  const baseAngle = index * angleStep;
                  const isActive = index === activeIndex;

                  return (
                    <li
                      key={item.href}
                      className="explore-depth-item"
                      data-active={isActive ? 'true' : 'false'}
                      style={
                        {
                          '--depth-base-angle': `${baseAngle}deg`,
                        } as DepthCardStyle
                      }
                    >
                      <Link
                        href={item.href}
                        aria-labelledby={titleId}
                        aria-describedby={descriptionId}
                        className={cn('explore-depth-link group', theme.hover)}
                        onFocus={() => handleLinkFocus(index)}
                      >
                        <span
                          aria-hidden="true"
                          className={cn('explore-depth-accent', theme.accent)}
                        />
                        <span className="flex items-start justify-between gap-5">
                          <span
                            id={titleId}
                            className="explore-depth-title font-display font-medium tracking-[-0.045em]"
                          >
                            {item.label}
                          </span>
                          <span
                            aria-hidden="true"
                            className={cn(
                              'font-mono text-[0.68rem] font-bold tracking-[0.18em]',
                              theme.number,
                            )}
                          >
                            {position}
                          </span>
                        </span>
                        <p
                          id={descriptionId}
                          className="explore-depth-description mt-4 max-w-md text-base leading-7"
                        >
                          {item.description}
                        </p>
                        <span
                          aria-hidden="true"
                          className="explore-depth-action mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em]"
                        >
                          Explore {item.label}
                          <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                            ↗
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </Container>
        </div>

        <div aria-hidden="true" className="explore-depth-steps">
          {items.slice(1).map((item) => (
            <div key={item.href} className="explore-depth-step" />
          ))}
          <div ref={exitRef} className="explore-depth-exit" />
        </div>
      </div>
    </section>
  );
}
