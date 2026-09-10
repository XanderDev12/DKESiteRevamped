import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { getEvents } from '@/features/events/data';
import { EventCalendar } from '@/features/events/event-calendar';

export const metadata: Metadata = {
  title: 'Event Calendar',
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <ContentPage
      accent="red"
      eyebrow="What is ahead"
      marker="03"
      title="Event Calendar"
      description="Find chapter events, important dates, and alumni gatherings in one place."
    >
      <EventCalendar events={events} />
    </ContentPage>
  );
}
