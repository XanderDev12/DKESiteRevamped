import { SurfaceCard } from '@/components/ui/surface-card';
import type { NavigationAccent } from '@/lib/navigation';

interface ExploreCardProps {
  accent: NavigationAccent;
  description: string;
  href: string;
  index: number;
  title: string;
}

export function ExploreCard({
  accent,
  description,
  href,
  index,
  title,
}: ExploreCardProps) {
  return (
    <SurfaceCard
      accent={accent}
      href={href}
      className="group flex min-h-72 flex-col p-7 sm:p-8"
    >
      <p className="font-mono text-sm font-semibold tracking-[0.18em] text-brand-red">
        {String(index).padStart(2, '0')}
      </p>
      <div className="mt-auto pt-16">
        <h3 className="font-display text-4xl font-medium tracking-[-0.03em] text-brand-blue sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
          {description}
        </p>
        <span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-brand-blue">
          Explore
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
          >
            →
          </span>
        </span>
      </div>
    </SurfaceCard>
  );
}
