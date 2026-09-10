import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { getHistoryEntries } from '@/features/history/data';
import { HistoryTimeline } from '@/features/history/history-timeline';

export const metadata: Metadata = {
  title: 'History',
};

export default async function HistoryPage() {
  const entries = await getHistoryEntries();

  return (
    <ContentPage
      accent="gold"
      eyebrow="Our story"
      marker="02"
      title="Chapter History"
      description="Explore a sourced record of the people and moments that shaped the chapter."
    >
      <HistoryTimeline entries={entries} />
    </ContentPage>
  );
}
