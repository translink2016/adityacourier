import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Aditya Courier Service',
  description: 'Comprehensive courier services including international shipping, express delivery, door-to-door service, and real-time tracking',
  keywords: 'courier services, shipping, delivery, express, tracking',
}

export default function Services() {
  const services = [
    {
      title: 'International Shipping',
      description: 'Send packages to 220+ countries worldwide with competitive rates',
      features: ['Customs clearance assistance', 'Multiple service levels', 'Insurance available'],
      icon: '🌍'
    },
    {
      title: 'Express Delivery',
      description: 'Fastest delivery options for urgent shipments',
      features: ['1-3 day delivery', 'Priority handling', 'Door-to-door service'],
      icon: '⚡'
    },
    {
      title: 'Standard Shipping',
      description: 'Economical shipping for non-urgent packages',
      features: ['Cost-effective rates', 'Reliable delivery', 'Full tracking'],
      icon: '📦'
    },
    {
      title: 'Specialized Cargo',
      description: 'Handling for fragile, oversized, or temperature-controlled items',
      features: ['Professional packaging', 'Temperature control', 'Fragile handling'],
      icon: '🔬'
    },
    {
      title: 'Door-to-Door Service',
      description: 'We pick up and deliver right to your doorstep',
      features: ['Convenient scheduling', 'Flexible timing', 'Hassle-free process'],
      icon: '🚪'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your shipment 24/7 with GPS precision',
      features: ['Live updates', 'SMS notifications', 'Web & mobile access'],
      icon: '📍'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Comprehensive shipping solutions for every need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-secondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Competitive Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Economy', price: '$5.99', time: '7-10 days', color: 'gray' },
              { name: 'Standard', price: '$12.99', time: '3-5 days', color: 'secondary', featured: true },
              { name: 'Express', price: '$24.99', time: '1-2 days', color: 'blue' },
            ].map((plan, i) => (
              <div key={i} className={`rounded-xl p-8 text-center ${plan.featured ? 'bg-primary text-white scale-105' : 'bg-light'} border-2 ${plan.featured ? 'border-secondary' : 'border-gray-300'}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-secondary' : 'text-primary'}`}>{plan.name}</h3>
                <p className="text-4xl font-bold mb-2">{plan.price}</p>
                <p className="text-sm mb-6">per package</p>
                <p className="font-semibold mb-6">Delivery: {plan.time}</p>
                <button className={`w-full py-2 rounded-lg font-bold transition ${plan.featured ? 'bg-secondary text-primary hover:bg-yellow-400' : 'bg-primary text-white hover:bg-purple-900'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Aditya Courier?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Fastest delivery times in the industry',
              'Secure and insured shipments',
              '24/7 customer support team',
              'Real-time tracking & updates',
              'Competitive pricing',
              'Professional handling',
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Ship?</h2>
          <p className="text-gray-700 mb-8 text-lg">Contact our team to get a personalized quote</p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-900 transition">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  )
}
