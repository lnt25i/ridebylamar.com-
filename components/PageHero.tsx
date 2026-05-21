'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  centered?: boolean;
};

export function PageHero({ eyebrow, title, description, children, centered = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ride-border bg-hero-gradient py-16 md:py-20">
      <div className={`container-site ${centered ? 'text-center' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          {description ? (
            <p className={`max-w-2xl text-lg text-ride-muted ${centered ? 'mx-auto' : ''}`}>{description}</p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
