interface ContentEmptyStateProps {
  description: string;
  title: string;
}

export function ContentEmptyState({
  description,
  title,
}: ContentEmptyStateProps) {
  return (
    <div className="flex min-h-52 items-center justify-center rounded-xl border border-dashed border-brand-gold bg-card px-6 py-10 text-center">
      <div className="max-w-md">
        <h2 className="font-semibold tracking-tight text-brand-blue">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
