import Link from 'next/link';

import { ContentPage } from '@/components/content-page';

export default function NotFoundPage() {
  return (
    <ContentPage accent="red" eyebrow="404" marker="404" title="Page not found">
      <p className="text-lg text-muted-foreground">
        The requested page does not exist.{' '}
        <Link
          href="/"
          className="font-semibold text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-red"
        >
          Return home
        </Link>
        .
      </p>
    </ContentPage>
  );
}
