import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { faqsContent } from '@/content/faqs';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Support | ${siteContent.brand.appName}`,
  description: `Contact ${siteContent.contact.supportEmail} for rider, driver, safety, and partnership support.`,
  path: '/support',
});

const SUPPORT_CARDS = [
  { title: 'Rider Support', subject: 'Rider%20Support', body: 'Trip questions, account access, and payment inquiries.' },
  { title: 'Driver Support', subject: 'Driver%20Support', body: 'Onboarding, verification status, and driver account questions.' },
  { title: 'Safety Concerns', subject: 'Safety%20Concern', body: 'Non-emergency safety reports and platform safety questions.' },
  { title: 'Business / Partnership', subject: 'Business%20Inquiry', body: 'Vendor verification, partnerships, and business inquiries.' },
  { title: 'Account Questions', subject: 'Account%20Question', body: 'Account access, deletion requests, and profile updates.' },
] as const;

export default function SupportPage() {
  const email = siteContent.contact.supportEmail;

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We are here to help"
        description={`Email ${email} for rider, driver, safety, and business questions while we prepare for launch.`}
      />
      <section className="py-16">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_CARDS.map((card) => (
            <GlassCard key={card.title} title={card.title}>
              <p>{card.body}</p>
              <a
                href={`mailto:${email}?subject=${card.subject}`}
                className="mt-2 inline-block font-semibold"
              >
                Email {card.title.toLowerCase()}
              </a>
            </GlassCard>
          ))}
        </div>
        <div className="container-site mt-10">
          <Button href="/contact">Contact form</Button>
        </div>
      </section>

      <section className="border-t border-ride-border py-16">
        <div className="container-site max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold text-white">{faqsContent.title}</h2>
          <div className="space-y-3">
            {faqsContent.items.map((item) => (
              <details key={item.q} className="glass-card group">
                <summary className="cursor-pointer font-semibold text-white">{item.q}</summary>
                <p className="mt-3 text-ride-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-ride-muted">
            Reach us anytime at <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
