import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { JsonLd } from '@/components/json-ld'
import { site } from '@/lib/site'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Natural Herbal Weight Loss in Pakistan`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'weight loss Pakistan',
    'herbal fat burner',
    'slimming supplement',
    'natural weight loss',
    'diet plan Pakistan',
    'BMI calculator',
    'calorie calculator',
  ],
  generator: 'v0.app',
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Natural Herbal Weight Loss in Pakistan`,
    description: site.description,
    images: [{ url: '/product-bottle.png', width: 1200, height: 1200, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Natural Herbal Weight Loss`,
    description: site.description,
    images: ['/product-bottle.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#16a34a',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${dmSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: site.name,
            url: site.url,
            description: site.description,
            email: site.email,
            telephone: site.phone,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lahore',
              addressCountry: 'PK',
            },
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFab />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
