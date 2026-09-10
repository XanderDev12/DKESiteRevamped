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
      eyebrow="Calendar"
      title="Events"
      description="This area is ready for current event information from an approved source."
    >
      <EventList events={events} />
    </ContentPage>
  );
}
