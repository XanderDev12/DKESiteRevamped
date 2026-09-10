import Link from 'next/link';

import { ContentPage } from '@/components/content-page';

export default function NotFoundPage() {
  return (
    <ContentPage eyebrow="404" title="Page not found">
      <p className="text-muted-foreground">
        The requested route does not exist.{' '}
        <Link href="/" className="font-medium text-foreground underline">
          Return home
        </Link>
        .
      </p>
    </ContentPage>
  );
}
