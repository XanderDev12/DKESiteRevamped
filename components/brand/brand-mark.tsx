import Image from 'next/image';

import { cn } from '@/lib/cn';
import { siteConfig } from '@/lib/site-config';

interface BrandMarkProps {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function BrandMark({
  className,
  decorative = false,
  priority = false,
  sizes = '(min-width: 1024px) 22rem, 70vw',
}: BrandMarkProps) {
  return (
    <Image
      src={siteConfig.symbol.src}
      alt={decorative ? '' : siteConfig.symbol.alt}
      width={siteConfig.symbol.width}
      height={siteConfig.symbol.height}
      priority={priority}
      sizes={sizes}
      className={cn('h-auto w-full object-contain', className)}
    />
  );
}
