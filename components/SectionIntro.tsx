'use client';

import { Reveal } from '@/components/motion/Reveal';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionIntro({ eyebrow, title, lead, className }: SectionIntroProps) {
  return (
    <Reveal className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>
      {lead ? <p className="max-w-2xl text-ride-muted">{lead}</p> : null}
    </Reveal>
  );
}
