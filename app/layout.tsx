import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';
import '@/styles/animations.css';
import { SITE } from '@/constants/site';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#231F20' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seo.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.seo.description,
  keywords: SITE.seo.keywords,
  authors: [
    {
      name: SITE.brand.name,
      url: SITE.url,
    },
  ],
  creator: SITE.brand.name,
  publisher: SITE.brand.name,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: SITE.seo.title,
    description: SITE.seo.description,
    siteName: SITE.brand.name,
    locale: 'en_IN',
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.brand.name,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.seo.title,
    description: SITE.seo.description,
    images: [`${SITE.url}/twitter-image.jpg`],
    creator: '@maxwillindia',
  },
  verification: {
    google: 'TODO-google-verification',
  },
  alternates: {
    canonical: SITE.url,
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} bg-white text-maxwill-secondary`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
