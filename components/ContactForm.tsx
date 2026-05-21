'use client';

import { contactContent } from '@/content/contact';
import { siteContent } from '@/content/site';
import { Button } from '@/components/ui/Button';

/**
 * Opens the visitor's email client — no server-side submission.
 * TODO: Connect to a transactional email provider or form API when ready.
 */
export function ContactForm() {
  const email = siteContent.contact.supportEmail;
  const c = contactContent;

  return (
    <form
      className="glass-card max-w-xl w-full"
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

      <label className="mb-1 block text-sm font-semibold text-white" htmlFor="fullName">
        {c.fields.fullName}
      </label>
      <input
        id="fullName"
        name="fullName"
        required
        autoComplete="name"
        className="mb-4 w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white"
      />

      <label className="mb-1 block text-sm font-semibold text-white" htmlFor="email">
        {c.fields.email}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        className="mb-4 w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white"
      />

      <label className="mb-1 block text-sm font-semibold text-white" htmlFor="phone">
        {c.fields.phone}
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        className="mb-4 w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white"
      />

      <label className="mb-1 block text-sm font-semibold text-white" htmlFor="topic">
        {c.fields.topic}
      </label>
      <select
        id="topic"
        name="topic"
        defaultValue={c.topics[0]}
        className="mb-4 w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white"
      >
        {c.topics.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label className="mb-1 block text-sm font-semibold text-white" htmlFor="message">
        {c.fields.message}
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Tell us how we can help…"
        className="mb-6 min-h-[160px] w-full rounded-lg border border-ride-border bg-ride-elevated px-3 py-2.5 text-white placeholder:text-ride-muted/60"
      />

      <div className="flex flex-wrap gap-3">
        <Button type="submit">{c.submitLabel}</Button>
        <Button href={`mailto:${email}`} variant="secondary">
          {c.directLabel}
        </Button>
      </div>
      <p className="mt-4 text-xs text-ride-muted">{c.directEmailNote}</p>
    </form>
  );
}
