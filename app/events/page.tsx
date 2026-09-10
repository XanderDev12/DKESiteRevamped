import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { getEvents } from '@/features/events/data';
import { EventList } from '@/features/events/event-list';

export const metadata: Metadata = {
  title: 'Events',
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <ContentPage
      accent="red"
      eyebrow="What is ahead"
      marker="03"
      title="Events"
      description="Find upcoming chapter events, important dates, and ways to take part."
    >
      <EventList events={events} />
    </ContentPage>
  );
}
