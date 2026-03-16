import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courier to USA from Mumbai | International Courier Service',
  description: 'Fast and affordable courier service from Mumbai to USA. Free pickup, professional packing, 2-3 days express delivery. Track your parcel 24/7. Call +91-9833897003',
  keywords: [
    'courier to USA from Mumbai',
    'international courier USA',
    'send parcel to USA',
    'cheapest courier to USA',
    'express delivery USA',
    'food courier USA',
    'documents courier USA',
    'excess baggage USA',
  ],
  openGraph: {
    title: 'International Courier to USA from Mumbai - Fast & Affordable',
    description: 'Ship anything to USA from Mumbai safely. Free pickup, real-time tracking, 3-5 business days delivery. Call +91-9833897003',
    type: 'website',
    url: 'https://adityacourier.com/international/courier-to-usa-from-mumbai',
    images: [
      {
        url: 'https://adityacourier.com/og-image-usa-courier.jpg',
        width: 1200,
        height: 630,
        alt: 'International Courier to USA from Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courier to USA from Mumbai | Aditya Courier',
    description: 'Fast delivery to USA from Mumbai with free pickup and tracking',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  canonical: 'https://adityacourier.com/international/courier-to-usa-from-mumbai',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aditya Courier - International Courier to USA',
            image: 'https://adityacourier.com/logo.svg',
            description: 'International courier service from Mumbai to USA with express delivery',
            url: 'https://adityacourier.com/international/courier-to-usa-from-mumbai',
            telephone: '+91-9833897003',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Main Street',
              addressLocality: 'Mumbai',
              addressRegion: 'Maharashtra',
              postalCode: '400001',
              addressCountry: 'IN',
            },
            serviceArea: {
              '@type': 'GeoShape',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '40.7128',
                longitude: '-74.0060',
              },
              geoRadius: '5000000',
            },
            areaServed: 'USA',
            priceRange: '$',
            aggregate_rating: {
              '@type': 'AggregateRating',
              rating_value: '4.9',
              review_count: '5000',
            },
          }),
        }}
      />
      {children}
    </>
  )
}
