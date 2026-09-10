import Image from 'next/image';
import Link from 'next/link';

import { ContentPage } from '@/components/content-page';
import { contentAreas } from '@/lib/navigation';

const accentClasses = {
  blue: 'border-t-brand-blue hover:border-brand-blue',
  gold: 'border-t-brand-gold hover:border-brand-gold',
  red: 'border-t-brand-red hover:border-brand-red',
} as const;

export default function HomePage() {
  return (
    <ContentPage
      eyebrow="Site scaffold"
      title="DKESiteRevamped"
      description="A content-neutral foundation ready for verified chapter information as it becomes available."
    >
      <div className="grid items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <figure className="rounded-2xl border border-brand-gold/60 bg-muted p-6">
          <Image
            src="/fraternity-symbol.png"
            alt="Delta Kappa Epsilon coat of arms"
            width={1433}
            height={2150}
            priority
            className="mx-auto h-auto max-h-[30rem] w-full object-contain"
            sizes="(min-width: 1024px) 18rem, 70vw"
          />
        </figure>

        <section aria-labelledby="content-areas-heading">
          <div className="mb-5 max-w-2xl">
            <h2
              id="content-areas-heading"
              className="text-xl font-semibold tracking-tight text-brand-blue"
            >
              Prepared content areas
            </h2>
          </div>

          <div className="grid gap-4">
            {contentAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className={`group block rounded-xl border border-t-4 bg-card p-6 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${accentClasses[area.accent]}`}
              >
                <h3 className="font-semibold tracking-tight text-brand-blue">
                  {area.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </ContentPage>
  );
}
