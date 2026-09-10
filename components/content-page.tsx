import type { ReactNode } from 'react';

interface ContentPageProps {
  children?: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
}

export function ContentPage({
  children,
  description,
  eyebrow,
  title,
}: ContentPageProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="mb-10 max-w-3xl border-b border-border pb-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </header>
      {children}
    </div>
  );
}
