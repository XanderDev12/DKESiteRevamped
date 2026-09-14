import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { getLeadershipOffices } from '@/features/leadership/data';
import { LeadershipGrid } from '@/features/leadership/leadership-grid';

export const metadata: Metadata = {
  title: 'Chapter Leadership',
  description: 'The leadership offices of the Psi Omega Chapter.',
};

export default async function LeadershipPage() {
  const offices = await getLeadershipOffices();

  return (
    <ContentPage
      accent="blue"
      eyebrow="The chapter"
      marker="01"
      title="Chapter Leadership"
    >
      <LeadershipGrid offices={offices} />
    </ContentPage>
  );
}
