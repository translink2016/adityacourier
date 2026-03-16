import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aditya Courier Service - International Express Delivery',
  description: 'Fast, reliable international courier service providing global shipping solutions',
  keywords: 'courier, shipping, delivery, international, express',
  robots: 'index, follow',
  openGraph: {
    title: 'Aditya Courier Service',
    description: 'Fast, reliable international courier service',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aditya-courier.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
