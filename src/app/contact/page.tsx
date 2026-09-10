import type { Metadata } from 'next';

import { ContentPage } from '@/components/content-page';
import { ContactDirectory } from '@/features/contact/contact-directory';
import { getChapterContacts } from '@/features/contact/data';

export const metadata: Metadata = {
  title: 'Contact Current Members',
};

export default async function ContactPage() {
  const contacts = await getChapterContacts();

  return (
    <ContentPage
      accent="red"
      eyebrow="Get in touch"
      marker="05"
      title="Contact the Chapter"
      description="Reach the appropriate current members of Psi Omega."
    >
      <ContactDirectory contacts={contacts} />
    </ContentPage>
  );
}
