# Deploying the RIDE public website (ridebylamar.com)

This folder (`website/`) is a **standalone Next.js** marketing site — separate from the Expo mobile app and Command Center.

## Edit before launch

| What to update | File |
|----------------|------|
| Support email, homepage, nav, footer | `content/site.ts` |
| App Store URL | `content/app-links.ts` → `appStoreUrl` |
| Google Play URL | `content/app-links.ts` → `googlePlayUrl` |
| Amazon Storefront | `content/shop.ts` → `amazonStorefrontUrl` |
| Social URLs (X, Instagram, Facebook, YouTube, TikTok, LinkedIn) | `content/social-links.ts` → `links` |
| FAQ | `content/faqs.ts` |
| Careers / driver requirements | `content/careers.ts` |
| Contact form copy | `content/contact.ts` |
| Legal text | `content/legal.ts` |
| RIDE wordmark | `public/ride-logo.png` |
| Phone app icon | `public/app-icon.png` |

## Local verification

```bash
cd website
npm install
npm run build
npm run lint
npm run dev   # http://localhost:3000
```

## Deploy to Vercel

1. Push the repository to GitHub (this `website/` folder can live in the main repo with **Root Directory** set to `website`, or in its own repo).
2. [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo.
3. **Root Directory:** `website` (if using the monorepo).
4. Framework: **Next.js** — deploy. No environment variables required.
5. **Settings → Domains** → add `ridebylamar.com` and `www.ridebylamar.com`.
6. In Namecheap **Advanced DNS**, add only the website records Vercel shows.

## Namecheap DNS — protect email

**The domain email is already working. Do not delete or replace email-related DNS records.**

Do **not** remove:

- **MX** records  
- **TXT** records for **SPF**  
- **TXT** records for **DKIM**  
- **TXT** records for **DMARC**  
- Any existing **email verification** records  

Only add or update the **website** records Vercel provides for the **root domain** and **www** subdomain.

Changing mail DNS can break **support@ridebylamar.com**.

## Verify after propagation

- https://ridebylamar.com  
- https://www.ridebylamar.com  
- https://ridebylamar.com/app  
- https://ridebylamar.com/legal  
- https://ridebylamar.com/support  
- https://ridebylamar.com/contact  
- https://ridebylamar.com/careers  
- https://ridebylamar.com/shop  

Legacy paths redirect (e.g. `/privacy` → `/legal/privacy-policy`).

## Footer

Must display exactly: **Powered by Lamar Technology**
