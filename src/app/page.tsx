import { BrandMark } from '@/components/brand/brand-mark';
import { ExploreDirectory } from '@/components/explore-directory';
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

        <Container className="relative grid min-h-[clamp(38rem,76svh,48rem)] items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.72fr)] lg:gap-20 lg:py-24">
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
            <div className="brand-mark-float relative">
              <figure className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-surface-soft p-7 shadow-emblem sm:p-9">
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
          </div>
        </Container>
      </section>

      <ExploreDirectory items={contentAreas} />
    </>
  );
}
