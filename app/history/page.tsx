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
      eyebrow="Archive"
      title="Chapter History"
      description="This area is ready for a sourced and verified chapter timeline."
    >
      <HistoryTimeline entries={entries} />
    </ContentPage>
  );
}
