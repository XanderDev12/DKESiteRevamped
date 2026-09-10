import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { BrotherList } from '@/features/brothers/brother-list';
import { getBrothers } from '@/features/brothers/data';

export const metadata: Metadata = {
  title: 'Brothers',
};

export default async function BrothersPage() {
  const brothers = await getBrothers();

  return (
    <ContentPage
      accent="blue"
      eyebrow="The chapter"
      marker="01"
      title="Brothers & Leadership"
      description="Meet the members and leaders who make up the current chapter."
    >
      <BrotherList brothers={brothers} />
    </ContentPage>
  );
}
