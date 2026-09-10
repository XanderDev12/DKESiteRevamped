import type { ReactNode } from 'react';

import { PageHero } from '@/components/page-hero';
import { Container } from '@/components/ui/container';
import type { NavigationAccent } from '@/lib/navigation';

interface ContentPageProps {
  accent?: NavigationAccent;
  children?: ReactNode;
  description?: string;
  eyebrow?: string;
  marker?: string;
  title: string;
}

export function ContentPage({
  accent,
  children,
  description,
  eyebrow,
  marker,
  title,
}: ContentPageProps) {
  return (
    <>
      <PageHero
        accent={accent}
        description={description}
        eyebrow={eyebrow}
        marker={marker}
        title={title}
      />
      <Container className="py-14 sm:py-20">{children}</Container>
    </>
  );
}
