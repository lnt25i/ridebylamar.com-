'use client';

import { useEffect, useRef, type ReactNode } from 'react';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { animate, runFadeUp } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { contactContent } from '@/content/contact';
import { siteContent } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const fieldClass =
  'w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white outline-none transition-[border-color,box-shadow] duration-300';

export function ContactForm() {
  const email = siteContent.contact.supportEmail;
  const c = contactContent;
  const reduced = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (reduced || !formRef.current) return;
    runFadeUp(formRef.current, false, { translateY: 16 });
  }, [reduced]);

  return (
    <RevealOnScroll className="w-full max-w-xl">
      <form
        ref={formRef}
        className={cn('glass-card w-full', !reduced && 'opacity-0')}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent(String(data.get('topic') || 'RIDE Contact'));
          const phone = data.get('phone') ? `\nPhone: ${data.get('phone')}` : '';
          const body = encodeURIComponent(
            `Name: ${data.get('fullName')}\nEmail: ${data.get('email')}${phone}\n\n${data.get('message')}`
          );
          window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }}
      >
        <p className="mb-2 text-lg font-semibold text-white">{c.page.lead}</p>
        <p className="mb-6 text-sm text-ride-muted">{c.helperText}</p>

        <Field label={c.fields.fullName} id="fullName" reduced={reduced} index={0}>
          <input id="fullName" name="fullName" required autoComplete="name" className={fieldClass} />
        </Field>

        <Field label={c.fields.email} id="email" reduced={reduced} index={1}>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>

        <Field label={c.fields.phone} id="phone" reduced={reduced} index={2}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>

        <Field label={c.fields.topic} id="topic" reduced={reduced} index={3}>
          <select id="topic" name="topic" defaultValue={c.topics[0]} className={fieldClass}>
            {c.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label={c.fields.message} id="message" reduced={reduced} index={4}>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us how we can help…"
            className={cn(fieldClass, 'min-h-[160px] resize-y placeholder:text-ride-muted/60')}
          />
        </Field>

        <div className="flex flex-wrap gap-3">
          <AnimatedButton type="submit">{c.submitLabel}</AnimatedButton>
          <AnimatedButton href={`mailto:${email}`} variant="secondary">
            {c.directLabel}
          </AnimatedButton>
        </div>
        <p className="mt-4 text-xs text-ride-muted">{c.directEmailNote}</p>
      </form>
    </RevealOnScroll>
  );
}

function Field({
  label,
  id,
  children,
  reduced,
  index,
}: {
  label: string;
  id: string;
  children: ReactNode;
  reduced: boolean;
  index: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !wrapRef.current) return;
    runFadeUp(wrapRef.current, false, { delay: 0.05 * index, translateY: 8, duration: DURATION.fast });
  }, [reduced, index]);

  const fieldWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !fieldWrapRef.current) return;
    const el = fieldWrapRef.current.querySelector('input, select, textarea') as HTMLElement | null;
    if (!el) return;
    const onFocus = () => el.classList.add('ring-2', 'ring-ride-accent/30', 'border-ride-accent/60');
    const onBlur = () => el.classList.remove('ring-2', 'ring-ride-accent/30', 'border-ride-accent/60');
    el.addEventListener('focus', onFocus);
    el.addEventListener('blur', onBlur);
    return () => {
      el.removeEventListener('focus', onFocus);
      el.removeEventListener('blur', onBlur);
    };
  }, [reduced, id]);

  return (
    <div ref={wrapRef} className={cn('mb-4', !reduced && 'opacity-0')}>
      <label className="mb-1 block text-sm font-semibold text-white" htmlFor={id}>
        {label}
      </label>
      <div ref={fieldWrapRef}>{children}</div>
    </div>
  );
}
