export function cn(...classes: readonly (false | null | string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
