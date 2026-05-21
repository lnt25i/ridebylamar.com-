import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { AnimeProvider } from '@/components/animations/AnimeProvider';
import { PageTransition } from '@/components/PageTransition';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteContent } from '@/content/site';
import { homeMetadata } from '@/lib/metadata';

import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  ...homeMetadata,
  icons: {
    icon: siteContent.assets.appIconPath,
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">
        <AnimeProvider>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </AnimeProvider>
        <Analytics />
      </body>
    </html>
  );
}
