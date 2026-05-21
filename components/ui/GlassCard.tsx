import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type GlassCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
};

export function GlassCard({ title, children, className, as: Tag = 'article' }: GlassCardProps) {
  return (
    <Tag className={cn('glass-card transition hover:border-ride-accent/25', className)}>
      {title ? <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3> : null}
      <div className="text-ride-muted [&_a]:text-ride-accent [&_a]:no-underline hover:[&_a]:underline">{children}</div>
    </Tag>
  );
}
