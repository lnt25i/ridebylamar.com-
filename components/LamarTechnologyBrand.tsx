import type { ReactNode } from 'react';

import { siteContent } from '@/content/site';
import { cn } from '@/lib/cn';

const BRAND = siteContent.brand.techBrand;

export function LamarTechnologyName({ className }: { className?: string }) {
  return <span className={cn('text-ride-accent font-semibold', className)}>{BRAND}</span>;
}

export function PoweredByLamarTechnology({
  className,
  prefixClassName,
}: {
  className?: string;
  prefixClassName?: string;
}) {
  return (
    <p className={className}>
      <span className={prefixClassName}>Powered by </span>
      <LamarTechnologyName />
    </p>
  );
}

export function highlightLamarTechnology(text: string): ReactNode {
  const parts = text.split(BRAND);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, <LamarTechnologyName key={`lt-${i}`} />]
      : [part]
  );
}
