'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function InternationalCourier() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  const services = [
    {
      title: 'Food Courier to USA from Mumbai',
      desc: 'We accept all types of long life dry homemade food items, branded food items, and Indian spices to USA. Safe, secure delivery guaranteed.',
      icon: '🍱',
    },
    {
      title: 'Household Items to USA from Mumbai',
      desc: 'Send clothes, jewellery, professional equipment, home appliances, baggage, and groceries to USA with our reliable service.',
      icon: '🏠',
    },
    {
      title: 'Documents & Parcels to USA',
      desc: 'Fastest delivery of documents, parcels, and packages to USA from Mumbai with door-to-door service and real-time tracking.',
      icon: '📦',
    },
    {
      title: 'Excess Baggage Services',
      desc: 'Traveling to USA? Send your excess luggage and baggage safely with our excess baggage service at affordable rates.',
      icon: '🧳',
    },
  ]

  const serviceTypes = [
    'Courier Household Products',
    'Courier Apparel & Clothes',
    'Courier Furniture Items',
    'Courier Documents & Papers',
    'Courier Sports Equipment',
    'Courier Electronics',
    'Courier Food Items & Spices',
    'Courier Medicines & Pharmaceuticals',
    'Courier Artwork & Paintings',
    'Courier Jewellery & Watches',
    'Courier Small Parcels',
    'Courier Bulk Shipments',
  ]

  const reasons = [
    'Online Booking from Mumbai to USA',
    'Real-time Tracking 24/7',
    'Same Day Free Home Pickup',
    '100% Free Packaging & Materials',
    'Free Export Documentation',
    'Express Delivery 2-3 Days',
    'Multiple Payment Options',
    'Email & SMS Notifications',
    'Insurance Available',
    'Door-to-Door Service',
    'Competitive Pricing',
    'Customer Support 24/7',
  ]

  const pickupAreas = [
    'Andheri',
    'Bandra',
    'Borivali',
    'Chembur',
    'Dadar',
    'Ghatkopar',
    'Goregaon',
    'Juhu',
    'Kandivali',
    'Lokhandwala',
    'Lower Parel',
    'Mahim',
    'Malad',
    'Marine Lines',
    'Navi Mumbai',
    'Powai',
    'Santacruz',
    'Thane',
    'Vile Parle',
    'Worli',
  ]

  const faqs = [
    {
      q: 'Do you courier food items to USA from Mumbai?',
      a: 'Yes, we courier homemade and branded food items, dry snacks, and Indian spices to USA. All items are carefully packed and documented for safe transit.',
    },
    {
      q: 'What is the delivery time for parcels to USA from Mumbai?',
      a: 'Express delivery takes 3-5 business days, while economy delivery takes 5-7 business days. Delivery time depends on the service selected and customs clearance.',
    },
    {
      q: 'How much does it cost to courier from Mumbai to USA?',
      a: 'Rates depend on weight, dimensions, and service type. For spot rates and special deals, contact us at +91-9833897003 or visit our website for instant quotes.',
    },
    {
      q: 'Do you provide door-to-door service to USA from Mumbai?',
      a: 'Yes, we provide complete door-to-door courier service. We pick up from your home, office, warehouse, or shop in Mumbai and deliver to any address in USA.',
    },
    {
      q: 'Is there any extra charge for pickup from home in Mumbai?',
      a: 'No, we offer completely free pickup service from your doorstep in Mumbai. Simply call our team on +91-9833897003 to schedule a convenient pickup time.',
    },
    {
      q: 'Will your team bring packing materials during pickup?',
      a: 'Yes, our pickup executives carry all required materials including corrugated boxes, bubble wrap, weighing scale, and vacuum packing machines for food items.',
    },
    {
      q: 'How do you ensure package safety during transit to USA?',
      a: 'We use professional packing standards, proper documentation, secure transit methods, and included basic shipping insurance. Additional insurance is available on request.',
    },
    {
      q: 'What payment methods do you accept for USA courier?',
      a: 'We accept all payment modes: online transfer, Google Pay, Phone Pay, cheque, cash, NEFT, IMPS, and credit/debit cards for your convenience.',
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">International Courier to USA from Mumbai</h1>
          <p className="text-xl text-purple-100 mb-8">
            Fast, Reliable, and Affordable Express Delivery Service to USA from Mumbai with Free Pickup & Packaging
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              Get Quote Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Call: +91-9833897003
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Aditya Courier for USA Shipments?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Cheapest Courier Service Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cheapest Courier Service from Mumbai to USA</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Looking for the cheapest courier service from Mumbai to USA? We&apos;re here to help! Aditya Courier provides the most affordable way to send parcels to USA from Mumbai with zero compromise on quality and reliability.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We handle everything from documents to heavy shipments with secure and reliable shipping. Our service includes free pickup, professional packing, complete documentation, and real-time tracking. With Aditya Courier, you&apos;re just a click away to ship your parcel from Mumbai to USA.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-2xl">✓</span>
                  <span className="text-gray-700">Online parcel booking and tracking system</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-2xl">✓</span>
                  <span className="text-gray-700">Express delivery within 3-5 business days</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-2xl">✓</span>
                  <span className="text-gray-700">Competitive rates from Industry</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-2xl">✓</span>
                  <span className="text-gray-700">24/7 customer support and live tracking</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-primary to-purple-700 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-semibold text-lg">Free Pickup Service</p>
                    <p className="text-purple-100 text-sm mt-2">From any location in Mumbai</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-semibold text-lg">Professional Packing</p>
                    <p className="text-purple-100 text-sm mt-2">100% Free packing materials</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-semibold text-lg">Express Delivery</p>
                    <p className="text-purple-100 text-sm mt-2">3-5 business days guaranteed</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-semibold text-lg">Complete Documentation</p>
                    <p className="text-purple-100 text-sm mt-2">Free export guidance included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Service Features & Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Type of Products Can We Ship to USA?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-purple-200 hover:border-primary hover:shadow-lg transition">
                <p className="text-gray-700 font-semibold">→ {type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Service Options & Delivery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Flexible Delivery Options from Mumbai to USA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-purple-700 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Express Service</h3>
              <p className="mb-6 text-purple-100">Fastest delivery option for urgent shipments</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> 2-3 business days delivery
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Priority handling
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Door-to-door service
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Real-time tracking
                </div>
              </div>
              <button className="w-full bg-secondary text-primary py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                Book Express
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">Standard Service</h3>
              <p className="mb-6 text-gray-600">Most popular choice - Best value</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 3-5 business days delivery
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Economical pricing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Door-to-door service
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Real-time tracking
                </div>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-purple-900 transition">
                Book Standard
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economy Service</h3>
              <p className="mb-6 text-gray-600">Cheapest rates for non-urgent shipments</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> 5-7 business days delivery
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Lowest price guarantee
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Door-to-door service
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Real-time tracking
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold hover:bg-black transition">
                Book Economy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pickup Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            We Pick Up Regularly from Below Areas in Mumbai
          </h2>
          <p className="text-center text-gray-600 mb-12">Free pickup service available from most areas in Mumbai</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {pickupAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition border-l-4 border-primary">
                <p className="text-gray-700 font-semibold text-center">{area}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">...and many more places across Mumbai including Navi Mumbai, Thane, and surrounding areas</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-900 transition">
              Check Your Area
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            12 Reasons to Book Our Courier Service to USA from Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">→</div>
                <p className="text-gray-700 font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Key Features & Services */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Complete Courier Services from Mumbai to USA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">→</span> Door to Door Service
              </h3>
              <p className="text-purple-100 mb-6">
                We pick up a parcel from your door in Mumbai and deliver it to any location in USA. Complete door-to-door solution with pickup from home, office, warehouse, or shop.
              </p>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">→</span> Free Packaging & Pickup
              </h3>
              <p className="text-purple-100 mb-6">
                No hidden charges! We provide 100% free packaging materials and free same-day pickup from your location in Mumbai. Our executives bring all required materials for safe packing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">→</span> Express Delivery & Tracking
              </h3>
              <p className="text-purple-100 mb-6">
                Fast delivery within 3-5 business days with complete real-time tracking. Email and SMS alerts keep you updated at every stage of shipment.
              </p>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">→</span> Documentation & Insurance
              </h3>
              <p className="text-purple-100 mb-6">
                Free export documentation guidance included. Basic shipping insurance is covered. Additional insurance available on request for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions - USA Courier Service
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? -1 : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition"
                >
                  <h3 className="font-bold text-gray-900 text-lg">{faq.q}</h3>
                  <span className={`text-primary text-2xl transform transition ${expandedFAQ === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 pb-6 bg-purple-50 border-t border-purple-200">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Contact our support team for more information about shipping to USA</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919833897003" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-900 transition">
                Call: +91-9833897003
              </a>
              <a href="mailto:info@adityacourier.com" className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship to USA?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with competitive rates and professional service. Fast, secure, and reliable delivery to USA.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              Get Instant Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Book Pickup Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
