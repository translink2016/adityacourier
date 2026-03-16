import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/src/components/HeroSection'

export const metadata: Metadata = {
  title: 'Aditya Courier Service - International Express Delivery | Track Packages 24/7',
  description: 'Aditya Courier Service delivers packages to 220+ countries with real-time tracking, secure handling, and competitive rates. Get a free quote today!',
  keywords: 'international courier service, express shipping, global delivery, package tracking, international logistics',
  openGraph: {
    title: 'Aditya Courier Service - Fast International Delivery',
    description: 'Track your international packages 24/7. Shipping to 220+ countries with secure handling and competitive rates.',
    type: 'website',
  },
}

const faqData = [
  {
    question: 'How long does international delivery take?',
    answer: 'Standard international delivery takes 5-10 business days. Express delivery is available in 2-3 business days for most countries. Delivery time depends on destination and service type selected.',
  },
  {
    question: 'What countries do you deliver to?',
    answer: 'We deliver to 220+ countries worldwide including USA, UK, Canada, Australia, Germany, France, India, UAE, Singapore, and many more. Check our service area or contact us for specific locations.',
  },
  {
    question: 'How can I track my package?',
    answer: 'You can track your package 24/7 using your tracking number on our website. Real-time updates are sent via email and SMS. Visit our Track page to monitor your shipment status.',
  },
  {
    question: 'Is my shipment insured?',
    answer: 'Yes, all shipments are automatically insured up to the declared value. We provide comprehensive coverage for loss, damage, and theft. Additional insurance is available for high-value items.',
  },
  {
    question: 'What items can I ship?',
    answer: 'We ship documents, parcels, electronics, clothing, gifts, and most items. Restricted items include hazardous materials, liquids, and perishables. Contact us to verify specific items.',
  },
  {
    question: 'How much does international shipping cost?',
    answer: 'Shipping costs depend on weight, dimensions, destination, and service type. Get an instant quote on our website by entering your details. Express shipping costs more but offers faster delivery.',
  },
  {
    question: 'Do you offer pickup services?',
    answer: 'Yes, we offer free pickup for shipments over 5kg from residential and commercial addresses. Schedule a pickup on our website or call our customer service team.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, debit cards, bank transfers, PayPal, and digital wallets. All payments are secure and encrypted. Monthly billing available for business customers.',
  },
  {
    question: 'How do I get a shipping quote?',
    answer: 'Get an instant quote by visiting our Quote page. Enter your package details, destination, and service type. No registration required for quotes.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer full refunds if your package is lost or severely damaged. Claims must be filed within 30 days. Partial refunds available for delivery delays beyond our guarantee.',
  },
  {
    question: 'Do you have customer support?',
    answer: 'Yes, our customer support team is available 24/7 via phone, email, and live chat. We respond to inquiries within 2 hours. Call us for urgent assistance.',
  },
  {
    question: 'Can I schedule delivery for a specific date?',
    answer: 'Yes, you can request a specific delivery date during checkout. We accommodate weekend and holiday deliveries for an additional fee. Confirm preferences with our team.',
  },
]

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <HeroSection />

      {/* Section 1: Features/Benefits */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Why Choose Aditya Courier?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Leading international courier service trusted by businesses and individuals worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fast Delivery', desc: 'Express delivery to 220+ countries in 2-10 business days', icon: '🚚', color: 'bg-purple-100' },
              { title: 'Real-time Tracking', desc: '24/7 package tracking with live GPS updates', icon: '📍', color: 'bg-yellow-100' },
              { title: 'Secure Handling', desc: 'Insurance coverage up to declared value included', icon: '🔒', color: 'bg-green-100' },
              { title: 'Competitive Rates', desc: 'Best prices without compromising on service quality', icon: '💰', color: 'bg-purple-100' },
              { title: 'Free Pickup', desc: 'Complimentary pickup service for orders over 5kg', icon: '📦', color: 'bg-pink-100' },
              { title: '24/7 Support', desc: 'Dedicated customer service available round the clock', icon: '💬', color: 'bg-red-100' },
            ].map((feature, i) => (
              <div key={i} className={`${feature.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2`}>
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">How Aditya Courier Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to ship your packages internationally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Get a Quote', desc: 'Enter package details and destination for instant pricing' },
              { step: 2, title: 'Schedule Pickup', desc: 'Book pickup or drop-off at your nearest location' },
              { step: 3, title: 'Track Shipment', desc: 'Monitor your package in real-time 24/7' },
              { step: 4, title: 'Delivery', desc: 'Receive your package at the doorstep safely' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-primary to-purple-700 text-white rounded-xl p-8 text-center h-full">
                  <div className="text-5xl font-bold mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary">{item.title}</h3>
                  <p className="text-purple-100">{item.desc}</p>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 text-4xl text-primary">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Service Highlights */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Express Delivery',
                desc: 'Fastest international shipping option available. Delivery in 2-3 business days to most countries. Perfect for urgent shipments.',
              },
              {
                title: 'Standard Delivery',
                desc: 'Cost-effective shipping option. Delivery in 5-10 business days. Ideal for non-urgent packages and bulk shipments.',
              },
              {
                title: 'Document Shipping',
                desc: 'Secure delivery for important documents. Includes signature on delivery and tracking. Fully insured protection.',
              },
              {
                title: 'Parcel Shipping',
                desc: 'Ship any parcel up to 50kg. Multiple service options available. Comprehensive insurance coverage included.',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{service.desc}</p>
                <Link href="/services" className="text-secondary font-bold hover:text-primary transition">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Trust & Credentials */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Trusted by Thousands</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2350+', label: 'Happy Customers' },
              { number: '220+', label: 'Countries Served' },
              { number: '50K+', label: 'Packages Delivered' },
              { number: '4.8★', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-xl text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-purple-100 mb-8">Certified and trusted by industry leaders</p>
            <div className="flex justify-center gap-8 flex-wrap">
              {['✓ ISO 9001 Certified', '✓ IATA Compliant', '✓ Money-Back Guarantee', '✓ 24/7 Support'].map((badge, i) => (
                <div key={i} className="bg-white text-primary px-6 py-3 rounded-lg font-bold">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Get instant quotes with no hidden charges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { weight: 'Up to 500g', price: '$12.99', speed: '5-10 days' },
              { weight: '500g - 2kg', price: '$24.99', speed: '5-10 days' },
              { weight: '2kg - 5kg', price: '$44.99', speed: '5-10 days' },
            ].map((plan, i) => (
              <div key={i} className="bg-light rounded-xl p-8 border-2 border-gray-200 hover:border-secondary transition">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.weight}</h3>
                <p className="text-4xl font-bold text-secondary mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-6">Delivery: {plan.speed}</p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-900 transition"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Express delivery available at competitive rates. Volume discounts for bulk shipments.</p>
            <Link href="/contact" className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials & Social Proof */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                company: 'E-Commerce Business',
                rating: 5,
                comment: 'Aditya Courier has been excellent for shipping our products internationally. Fast, reliable, and affordable.',
              },
              {
                name: 'Sarah Johnson',
                company: 'Freelance Designer',
                rating: 5,
                comment: 'Best international shipping service I have used. Real-time tracking and great customer support!',
              },
              {
                name: 'Michael Chen',
                company: 'Import/Export Company',
                rating: 5,
                comment: 'Competitive rates, professional service, and timely deliveries. Highly recommended for business use.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-yellow-400 text-2xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">&quot;{testimonial.comment}&quot;</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our shipping services</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-light rounded-xl p-6 cursor-pointer group hover:shadow-lg transition">
                <summary className="flex items-center justify-between font-bold text-lg text-primary hover:text-secondary transition">
                  <span>{faq.question}</span>
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-purple-100 mb-6">Our customer support team is available 24/7 to help you.</p>
            <Link href="/contact" className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Ship Your Package?</h2>
          <p className="text-xl mb-8 text-purple-100">Get started with competitive rates and professional service. Fast, secure, and reliable delivery to 220+ countries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              Get a Free Quote
            </Link>
            <Link href="/track" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
              Track Package
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
