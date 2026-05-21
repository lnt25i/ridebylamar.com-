import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { FloatUp3D } from '@/components/FloatUp3D';
import { MotionSection } from '@/components/MotionSection';
import { MotionButton } from '@/components/ui/MotionButton';
import { faqsContent } from '@/content/faqs';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const SUPPORT_SECTIONS = [
  {
    title: 'Rider Support',
    subtitle: 'Help with trips, payments, and your account.',
    subject: 'Rider%20Support',
    body: 'Trip questions, account access, and payment inquiries.',
  },
  {
    title: 'Driver Support',
    subtitle: 'Earnings, platform issues, and account help.',
    subject: 'Driver%20Support',
    body: 'Onboarding, verification status, and driver account questions.',
  },
  {
    title: 'Safety Reports',
    subtitle: 'Report incidents — our team responds within 24 hours.',
    subject: 'Safety%20Concern',
    body: 'Non-emergency safety reports and platform safety questions.',
  },
  {
    title: 'Account & Billing',
    subtitle: 'Manage your payment methods and subscription.',
    subject: 'Account%20Question',
    body: 'Account access, deletion requests, and profile updates.',
  },
  {
    title: 'Contact Us',
    subtitle: 'Email support@ridebylamar.com or use in-app chat.',
    subject: 'General%20Inquiry',
    body: 'Vendor verification, partnerships, and business inquiries.',
  },
] as const;

export const metadata = buildPageMetadata({
  title: `Support | ${siteContent.brand.appName}`,
  description: `Contact ${siteContent.contact.supportEmail} for rider, driver, safety, and partnership support.`,
  path: '/support',
});

export default function SupportPage() {
  const email = siteContent.contact.supportEmail;

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We are here to help"
        description={`Email ${email} for rider, driver, safety, and business questions while we prepare for launch.`}
      />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          {SUPPORT_SECTIONS.map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i}
              defaultOpen={i === 0}
            >
              <p>{section.body}</p>
              <a
                href={`mailto:${email}?subject=${section.subject}`}
                className="mt-4 inline-flex min-h-[40px] items-center font-semibold text-ride-accent no-underline transition-colors hover:text-[#ff8f26] hover:underline"
              >
                Email {section.title.toLowerCase()} →
              </a>
            </AccordionSection>
          ))}

          <StairSection index={5} className="mt-8">
            <MotionButton href="/contact" variant="primary">
              Contact Support
            </MotionButton>
          </StairSection>
        </div>
      </MotionSection>

      <FloatUp3D index={1}>
        <section className="border-t border-ride-border py-16">
          <div className="container-site max-w-3xl">
          <StairSection index={0}>
            <h2 className="mb-6 text-2xl font-bold" style={{ color: '#FF9500' }}>
              {faqsContent.title}
            </h2>
          </StairSection>

          <OrangeDivider />

          {faqsContent.items.map((item, i) => (
            <AccordionSection key={item.q} title={item.q} index={i + 1}>
              <p>{item.a}</p>
            </AccordionSection>
          ))}

          <StairSection index={faqsContent.items.length + 2} className="mt-8">
            <p className="text-ride-muted">
              Reach us anytime at <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </StairSection>
          </div>
        </section>
      </FloatUp3D>
    </>
  );
}
