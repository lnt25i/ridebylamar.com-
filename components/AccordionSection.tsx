'use client';

import { Card3DTilt } from '@/components/Card3DTilt';
import { cn } from '@/lib/cn';
import { ChevronDown } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';

type AccordionSectionProps = {
  title: string;
  subtitle?: string;
  index?: number;
  defaultOpen?: boolean;
  children: ReactNode;
  /** When false, skips Card3DTilt (e.g. legal pages). */
  tilt?: boolean;
};

export function AccordionSection({
  title,
  subtitle,
  index = 0,
  defaultOpen = false,
  children,
  tilt = true,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const intensity = index % 2 === 0 ? 8 : 12;

  const card = (
      <article className="glass-card mb-4 overflow-hidden">
        <button
          type="button"
          className="flex w-full items-start justify-between gap-4 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-ride-muted">{subtitle}</p> : null}
          </span>
          <ChevronDown
            className={cn(
              'mt-1 h-5 w-5 shrink-0 text-ride-accent transition-transform duration-200',
              open && 'rotate-180'
            )}
            aria-hidden
          />
        </button>
        <div
          id={panelId}
          className={cn(
            'grid transition-[grid-template-rows] duration-300 ease-out',
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-4 text-ride-muted">{children}</div>
          </div>
        </div>
      </article>
  );

  if (!tilt) return card;
  return (
    <Card3DTilt className="mb-4" intensity={intensity}>
      {card}
    </Card3DTilt>
  );
}
