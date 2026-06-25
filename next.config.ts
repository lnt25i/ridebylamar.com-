import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: '/driver-gear', destination: '/shop', permanent: true },
      { source: '/privacy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/terms', destination: '/legal/terms-of-service', permanent: true },
      { source: '/rider-agreement', destination: '/legal/rider-agreement', permanent: true },
      { source: '/driver-agreement', destination: '/legal/driver-agreement', permanent: true },
      { source: '/background-check', destination: '/legal/background-check-disclosure', permanent: true },
      { source: '/safety-policy', destination: '/legal/safety-policy', permanent: true },
      { source: '/community-guidelines', destination: '/legal/community-guidelines', permanent: true },
      { source: '/sms-terms', destination: '/legal/sms-terms', permanent: true },
      { source: '/sms', destination: '/legal/sms-terms', permanent: true },
      { source: '/electronic-consent', destination: '/electronic-disclosure', permanent: false },
      { source: '/privacy-rights', destination: '/legal/privacy-policy', permanent: false },
      { source: '/own-a-piece', destination: '/investors', permanent: false },
      { source: '/ownership', destination: '/investors', permanent: false },
      { source: '/checkr-authorization', destination: '/legal/background-check-disclosure', permanent: false },
    ];
  },
};

export default nextConfig;
