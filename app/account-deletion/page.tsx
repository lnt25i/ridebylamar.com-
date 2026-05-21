import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { legalDraftNotice } from '@/content/legal';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Account Deletion | ${siteContent.brand.appName}`,
  description: `Account deletion and data retention for ${siteContent.brand.appName}.`,
  path: '/account-deletion',
});

export default function AccountDeletionPage() {
  const email = siteContent.contact.supportEmail;

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Account deletion & data retention"
        description="How rider and driver account deletion interacts with retention obligations."
      />
      <section className="py-16">
        <div className="prose-legal container-site max-w-3xl">
          <p className="mb-6 inline-block rounded-lg border border-amber-500/35 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200">
            {legalDraftNotice}
          </p>
          <p>
            Rider account deletion requests may be submitted through the {siteContent.brand.appName} mobile app (where
            available) or by contacting {email}.
          </p>
          <p>
            Some information may be retained for a limited period to resolve disputes, enforce agreements, comply with
            legal process, or detect fraud, as permitted by law.
          </p>
          <p>
            <Link href="/legal/privacy-policy">Privacy Policy</Link> · <Link href="/support">Support</Link>
          </p>
        </div>
      </section>
    </>
  );
}
