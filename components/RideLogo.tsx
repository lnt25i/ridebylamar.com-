import Image from 'next/image';

import { siteContent } from '@/content/site';
import { cn } from '@/lib/cn';

type RideLogoProps = {
  width?: number;
  priority?: boolean;
  className?: string;
};

/** Official RIDE wordmark — replace public/ride-logo.png (from assets/branding/ride-animation-logo-official.png). */
export function RideLogo({ width = 220, priority = false, className }: RideLogoProps) {
  const height = Math.round(width * (346 / 804));
  return (
    <Image
      src={siteContent.assets.logoPath}
      alt={siteContent.brand.appName}
      width={width}
      height={height}
      priority={priority}
      className={cn('h-auto max-w-full', className)}
      style={{ width, height: 'auto' }}
    />
  );
}
