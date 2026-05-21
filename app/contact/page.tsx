import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { SocialLinks } from '@/components/SocialLinks';
import { contactContent } from '@/content/contact';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Contact | ${siteContent.brand.appName}`,
  description: contactContent.page.lead,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactContent.page.eyebrow}
        title={contactContent.page.title}
        description={`${contactContent.page.lead} Email ${siteContent.contact.supportEmail}.`}
      />
      <section className="py-16">
        <div className="container-site flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <ContactForm />
          <div className="max-w-xs shrink-0">
            <p className="mb-4 font-semibold text-white">Follow RIDE</p>
            <p className="mb-4 text-sm text-ride-muted">
              Official social accounts will be linked here when available. Update URLs in{' '}
              <code className="text-ride-accent">content/social-links.ts</code>.
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
