import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { ContentSection } from '@/components/content-section';
import { SectionJumpNavigation } from '@/components/section-jump-navigation';
import { AlumniBoard } from '@/features/alumni/alumni-board';
import { AlumniResourceList } from '@/features/alumni/alumni-resource-list';
import {
  getAlumniBoard,
  getDonationOptions,
  getInvolvementOpportunities,
} from '@/features/alumni/data';
import { getEvents } from '@/features/events/data';
import { EventCalendar } from '@/features/events/event-calendar';
import { alumniAreas } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Alumni',
};

export default async function AlumniPage() {
  const [events, donationOptions, involvementOpportunities, boardMembers] =
    await Promise.all([
      getEvents({ audience: 'alumni' }),
      getDonationOptions(),
      getInvolvementOpportunities(),
      getAlumniBoard(),
    ]);

  return (
    <ContentPage
      accent="gold"
      eyebrow="Stay connected"
      marker="04"
      title="Alumni"
      description="A dedicated home for Psi Omega alumni events, chapter support, involvement, and board information."
    >
      <SectionJumpNavigation items={alumniAreas} label="Alumni page sections" />

      <div>
        <ContentSection
          accent="red"
          id="events"
          index="01"
          title="Alumni Events"
          description="Gatherings and important dates created for the alumni community."
        >
          <EventCalendar
            compactEmptyState
            emptyTitle="Alumni events are being prepared"
            emptyDescription="Confirmed alumni gatherings and dates will appear here."
            events={events}
            headingLevel={3}
          />
        </ContentSection>

        <ContentSection
          accent="gold"
          id="donations"
          index="02"
          title="Donations"
          description="Verified opportunities to support Psi Omega and its priorities."
        >
          <AlumniResourceList
            accent="gold"
            emptyTitle="Donation options are being prepared"
            emptyDescription="Verified giving destinations and details will appear here."
            resources={donationOptions}
          />
        </ContentSection>

        <ContentSection
          accent="blue"
          id="involvement"
          index="03"
          title="Get Involved"
          description="Ways for alumni to volunteer, mentor, contribute, and reconnect."
        >
          <AlumniResourceList
            accent="blue"
            emptyTitle="Involvement opportunities are coming"
            emptyDescription="Confirmed ways to participate will appear here."
            resources={involvementOpportunities}
          />
        </ContentSection>

        <ContentSection
          accent="gold"
          id="board"
          index="04"
          title="Alumni Board"
          description="The alumni leadership serving the chapter community."
        >
          <AlumniBoard members={boardMembers} />
        </ContentSection>
      </div>
    </ContentPage>
  );
}
