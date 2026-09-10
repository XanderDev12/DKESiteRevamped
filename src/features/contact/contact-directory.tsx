import { ContentEmptyState } from '@/components/content-empty-state';
import { SurfaceCard } from '@/components/ui/surface-card';

import type { ChapterContact } from './types';

interface ContactDirectoryProps {
  contacts: readonly ChapterContact[];
}

const areaLabels = {
  general: 'General',
  recruitment: 'Recruitment',
  events: 'Events',
  alumni: 'Alumni',
} as const;

export function ContactDirectory({ contacts }: ContactDirectoryProps) {
  if (contacts.length === 0) {
    return (
      <ContentEmptyState
        accent="red"
        title="Contact details are being prepared"
        description="Verified ways to reach the appropriate current chapter members will appear here."
      />
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <SurfaceCard accent="red" className="h-full p-7">
            <article>
              {contact.areas?.length ? (
                <ul
                  aria-label={`${contact.role} contact areas`}
                  className="mb-5 flex flex-wrap gap-2"
                >
                  {contact.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-brand-blue"
                    >
                      {areaLabels[area]}
                    </li>
                  ))}
                </ul>
              ) : null}
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-brand-blue">
                {contact.role}
              </h2>
              {contact.memberName ? (
                <p className="mt-2 font-medium text-foreground">
                  {contact.memberName}
                </p>
              ) : null}
              {contact.description ? (
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {contact.description}
                </p>
              ) : null}
              <a
                href={contact.action.href}
                target={contact.action.external ? '_blank' : undefined}
                rel={contact.action.external ? 'noreferrer' : undefined}
                className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                {contact.action.label}
              </a>
            </article>
          </SurfaceCard>
        </li>
      ))}
    </ul>
  );
}
