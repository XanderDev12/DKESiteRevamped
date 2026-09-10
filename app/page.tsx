import { BrandMark } from '@/components/brand/brand-mark';
import { ExploreCard } from '@/components/explore-card';
import { ButtonLink } from '@/components/ui/button-link';
import { Container } from '@/components/ui/container';
import { contentAreas } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-blue-deep text-white">
        <div aria-hidden="true" className="hero-field absolute inset-0" />
        <div aria-hidden="true" className="hero-grid absolute inset-0" />

        <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.72fr)] lg:gap-20 lg:py-24">
          <div className="hero-copy max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              {siteConfig.fraternityName} at {siteConfig.institutionName}
            </p>
            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.86] tracking-[-0.055em] text-balance">
              {siteConfig.chapterName},
              <span className="block italic text-brand-gold">connected.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
              Meet the active chapter, explore our history, and stay connected
              through events and alumni life.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/events" variant="gold">
                View the calendar
              </ButtonLink>
              <ButtonLink href="/alumni" variant="outline">
                Alumni hub
              </ButtonLink>
            </div>
          </div>

          <div className="hero-mark relative mx-auto w-full max-w-sm lg:mr-0">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-brand-gold/30 sm:-inset-7"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-7 -left-7 size-32 rounded-full bg-brand-red/70 blur-3xl"
            />
            <figure className="brand-mark-float relative overflow-hidden rounded-[2rem] border border-white/15 bg-surface-soft p-7 shadow-emblem sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 brand-stripe"
              />
              <BrandMark priority sizes="(min-width: 1024px) 22rem, 70vw" />
            </figure>
            <div className="absolute -bottom-5 -right-4 rounded-full border-4 border-brand-blue-deep bg-brand-red px-5 py-3 font-display text-2xl font-semibold text-white shadow-xl sm:-right-7">
              {siteConfig.shortName}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden="true" className="section-glow absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-5 border-b border-border pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
              Explore the chapter
            </p>
            <h2 className="max-w-3xl font-display text-5xl font-medium leading-[0.96] tracking-[-0.04em] text-brand-blue sm:text-6xl">
              One place for the people, the story, and what comes next.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contentAreas.map((area, index) => (
              <ExploreCard
                key={area.href}
                accent={area.accent}
                description={area.description}
                href={area.href}
                index={index + 1}
                title={area.label}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
