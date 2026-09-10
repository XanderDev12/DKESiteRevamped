import Link from 'next/link';

import { ContentPage } from '@/components/content-page';
import { contentAreas } from '@/lib/navigation';

export default function HomePage() {
  return (
    <ContentPage
      eyebrow="Site scaffold"
      title="DKESiteRevamped"
      description="A content-neutral foundation ready for verified chapter information as it becomes available."
    >
      <section aria-labelledby="content-areas-heading">
        <div className="mb-5 max-w-2xl">
          <h2
            id="content-areas-heading"
            className="text-xl font-semibold tracking-tight"
          >
            Prepared content areas
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contentAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group block h-full rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <h3 className="font-semibold tracking-tight">{area.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
