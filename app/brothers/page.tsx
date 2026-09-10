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
      eyebrow="People"
      title="Brothers & Leadership"
      description="This area is ready for current, verified profiles and leadership roles."
    >
      <BrotherList brothers={brothers} />
    </ContentPage>
  );
}
