import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/src/components/HeroSection'

export const metadata: Metadata = {
  title: 'Home - Aditya Courier Service | International Express Delivery',
  description: 'Aditya Courier Service provides fast, reliable international shipping. Track your packages in real-time across 220+ countries.',
  keywords: 'international courier, express shipping, package delivery, global logistics',
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Choose Aditya Courier?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fast Delivery', desc: 'Express delivery to 220+ countries', icon: '🚚' },
              { title: 'Real-time Tracking', desc: 'Track your shipment 24/7 with precision', icon: '📍' },
              { title: 'Secure Handling', desc: 'Safe and insured shipping for all items', icon: '🔒' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl mb-8 text-gray-200">Get started with competitive rates and professional service</p>
          <Link href="/contact" className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
