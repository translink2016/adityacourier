import type { Metadata } from 'next'

// Structured data for SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aditya Courier Service',
  description: 'International courier delivery service',
  url: 'https://aditya-courier.com',
  telephone: '+12125551234',
  email: 'info@aditya-courier.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Shipping Lane',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US'
  },
  sameAs: [
    'https://www.facebook.com/aditya-courier',
    'https://www.twitter.com/aditya-courier',
    'https://www.linkedin.com/company/aditya-courier'
  ],
  priceRange: '$$$'
}

// Homepage metadata
export const homeMetadata: Metadata = {
  title: 'Aditya Courier Service - International Express Delivery | Fast Global Shipping',
  description: 'Fast, reliable international courier service providing global shipping solutions to 220+ countries. Real-time tracking, competitive rates, and professional service.',
  keywords: 'international courier, express shipping, package delivery, global logistics, shipping company',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Aditya Courier Service - International Express Delivery',
    description: 'Fast, reliable international courier service providing global shipping solutions',
    type: 'website',
    url: 'https://aditya-courier.com',
    images: [
      {
        url: 'https://aditya-courier.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Courier Service',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Courier Service',
    description: 'International express delivery',
    images: ['https://aditya-courier.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://aditya-courier.com',
  }
}
