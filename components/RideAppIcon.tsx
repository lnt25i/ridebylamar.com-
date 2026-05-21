import Image from 'next/image';

import { siteContent } from '@/content/site';
import { cn } from '@/lib/cn';

type RideAppIconProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/** Official phone home-screen app icon — replace public/app-icon.png if the asset changes. */
export function RideAppIcon({ size = 96, className, priority = false }: RideAppIconProps) {
  return (
    <Image
      src={siteContent.assets.appIconPath}
      alt={`${siteContent.brand.appName} app icon`}
      width={size}
      height={size}
      priority={priority}
      className={cn('rounded-[22%] shadow-glow', className)}
      style={{ width: size, height: size }}
    />
  );
}
