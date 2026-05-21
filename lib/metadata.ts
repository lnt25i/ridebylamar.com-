import type { Metadata } from 'next';

import { siteContent } from '@/content/site';

const DEFAULT_OG_IMAGE = siteContent.assets.ogImagePath;

export function buildPageMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteContent.contact.siteUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteContent.contact.siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteContent.brand.appName,
      type: 'website',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1024,
          height: 1024,
          alt: `${siteContent.brand.appName} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const homeMetadata = buildPageMetadata({
  title: siteContent.seo.homeTitle,
  description: siteContent.seo.homeDescription,
  path: '/',
});
