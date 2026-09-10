interface SectionJumpItem {
  href: string;
  label: string;
}

interface SectionJumpNavigationProps {
  items: readonly SectionJumpItem[];
  label: string;
}

export function SectionJumpNavigation({
  items,
  label,
}: SectionJumpNavigationProps) {
  return (
    <nav aria-label={label} className="mb-12 sm:mb-16">
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-brand-blue shadow-sm transition-colors hover:border-brand-gold hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
