'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CourierToUSAFromMumbai() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  const highlights = [
    { title: 'Fastest Delivery', desc: '2-3 days express, 3-5 days standard, 5-7 days economy', icon: '⚡' },
    { title: 'Free Pickup', desc: 'Same day free pickup from your home, office or warehouse', icon: '🚗' },
    { title: 'Safe Packing', desc: '100% free professional packing and packaging materials', icon: '📦' },
    { title: '24/7 Tracking', desc: 'Real-time tracking with SMS and email notifications', icon: '📍' },
  ]

  const services = [
    {
      title: 'Food Courier to USA',
      desc: 'Homemade food, spices, branded items to USA from Mumbai safely',
      icon: '🍱',
    },
    {
      title: 'Household Items',
      desc: 'Clothes, jewellery, appliances, baggage to USA reliably',
      icon: '🏠',
    },
    {
      title: 'Documents & Parcels',
      desc: 'Important documents, parcels, packages to USA securely',
      icon: '📄',
    },
    {
      title: 'Excess Baggage',
      desc: 'Travel light! Send excess luggage to USA affordably',
      icon: '🧳',
    },
    {
      title: 'Electronics',
      desc: 'Phones, laptops, gadgets to USA with insurance',
      icon: '💻',
    },
    {
      title: 'Medicines',
      desc: 'Pharmaceuticals and medicines to USA legally',
      icon: '💊',
    },
  ]

  const serviceFeatures = [
    'Door-to-door pickup and delivery',
    'Free pickup from home in Mumbai',
    'Professional packing at your doorstep',
    'Free packaging materials',
    'Complete documentation assistance',
    'Online booking and real-time tracking',
    'Express, Standard, and Economy options',
    'Insurance available',
    'Multiple payment methods',
    '24/7 customer support',
    'Competitive rates',
    'Email and SMS alerts',
  ]

  const usaStates = [
    'Alabama',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
  ]

  const faqs = [
    {
      q: 'How many days does it take to deliver from Mumbai to USA?',
      a: 'Express: 2-3 business days, Standard: 3-5 business days, Economy: 5-7 business days. Delivery time depends on the service selected and customs clearance at USA.',
    },
    {
      q: 'What are the current courier charges from Mumbai to USA?',
      a: 'Charges depend on weight, dimensions, service type, and destination in USA. For instant quote, call +91-9833897003 or fill the quote form on our website for accurate rates.',
    },
    {
      q: 'Can you deliver to all states in USA?',
      a: 'Yes, we deliver to all 50 states in USA including Alaska, Hawaii, and US territories. Whether urban or remote areas, we have extensive coverage across USA.',
    },
    {
      q: 'Do you offer door-to-door service to USA?',
      a: 'Yes, we provide complete door-to-door service. We pick up from your home, office, or warehouse in Mumbai and deliver to any address in USA.',
    },
    {
      q: 'Is pickup really free from home in Mumbai?',
      a: 'Absolutely! We offer 100% free same-day pickup from anywhere in Mumbai. No hidden charges. Call to schedule pickup at your convenience.',
    },
    {
      q: 'What items can I send to USA?',
      a: 'You can send almost anything: food, clothes, electronics, jewellery, documents, medicines, household items, excess baggage, etc. Some restrictions apply per USA customs rules.',
    },
    {
      q: 'Do you provide packaging material?',
      a: 'Yes, 100% free packaging! Our team brings corrugated boxes, bubble wrap, tape, weighing scale, and vacuum packing for food items at no extra cost.',
    },
    {
      q: 'Can I track my shipment to USA?',
      a: 'Yes, real-time tracking available 24/7. You get email and SMS alerts at each stage - pickup, dispatch, arrival USA, and delivery completion.',
    },
    {
      q: 'Is insurance included for USA courier?',
      a: 'Yes, basic shipping insurance is included. If your package is lost in transit, we cover it. Additional insurance available on request for valuable items.',
    },
    {
      q: 'How do you handle customs clearance?',
      a: 'We provide complete customs documentation guidance. Our team handles all paperwork to ensure smooth clearance at USA customs.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major payment methods: online transfer, Google Pay, Phone Pay, debit/credit cards, cheque, cash, NEFT, and IMPS.',
    },
    {
      q: 'Do you handle food items for USA?',
      a: 'Yes! We specialise in food courier. We accept homemade food, dry snacks, spices, branded items, and everything that meets USA FDA regulations.',
    },
  ]

  return (
    <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="breadcrumb text-purple-100 mb-6 text-sm">
              <Link href="/" className="hover:text-secondary transition">Home</Link> / 
              <Link href="/international" className="hover:text-secondary transition"> International</Link> / 
              <span> Courier to USA from Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              International Courier to USA from Mumbai
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl">
              Fast, reliable, and affordable express courier service from Mumbai to all USA states with free pickup, professional packing, and real-time tracking.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-secondary text-primary px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                Get Quote Now
              </button>
              <a href="tel:+919833897003" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition inline-flex items-center gap-2">
                📞 +91-9833897003
              </a>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border-t-4 border-primary">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Why Choose Aditya Courier */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Aditya Courier for USA Shipments?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition border border-purple-100">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Service Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cheapest International Courier Service from Mumbai to USA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Looking for the cheapest courier service from Mumbai to USA? Aditya Courier offers the most affordable rates without compromising on quality and reliability. We handle everything from documents to heavy shipments with utmost care.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our service includes free pickup from your doorstep in Mumbai, professional packing, complete customs documentation, and secure transit to any location in USA. With our online booking portal, getting your parcel shipped to USA is just a click away!
                </p>
                <h3 className="text-2xl font-bold text-primary mb-6">What Makes Us Different</h3>
                <ul className="space-y-3">
                  {serviceFeatures.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-secondary font-bold text-xl">→</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-gradient-to-br from-primary to-purple-700 rounded-xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-8">All-Inclusive Service Package</h3>
                  <div className="space-y-4">
                    {serviceFeatures.slice(6, 12).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <span className="text-secondary font-bold text-lg mt-1">✓</span>
                        <span className="text-purple-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Delivery Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Delivery Speed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-white rounded-xl p-8 shadow-xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Express Courier</h3>
                <p className="text-purple-100 mb-6">Perfect for urgent shipments requiring fastest delivery</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>2-3 business days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Priority clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Door-to-door service</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary text-primary py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Book Express
                </button>
              </div>

              <div className="bg-white rounded-xl border-3 border-primary shadow-lg p-8 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full font-bold text-sm">MOST POPULAR</span>
                </div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Standard Courier</h3>
                <p className="text-gray-600 mb-6">Best value option - Most customers choose this</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">3-5 business days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Economical rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Standard clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Door-to-door service</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-purple-900 transition">
                  Book Standard
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl border-2 border-gray-300 p-8 shadow-md">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Economy Courier</h3>
                <p className="text-gray-600 mb-6">Budget-friendly option for non-urgent shipments</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-gray-700">5-7 business days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-gray-700">Lowest rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-gray-700">Standard clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-gray-700">Door-to-door service</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-black transition">
                  Book Economy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Coverage & States */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              We Deliver to All 50 States in USA
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              From New York to California, Alaska to Hawaii - we cover every corner of USA
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
              {usaStates.slice(0, 20).map((state, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition border-l-4 border-primary text-center">
                  <p className="text-gray-700 font-semibold">{state}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {usaStates.slice(20).map((state, i) => (
                <div key={i + 20} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition border-l-4 border-primary text-center">
                  <p className="text-gray-700 font-semibold">{state}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How Our Courier Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Book', desc: 'Get instant quote and book online' },
                { step: '2', title: 'Pickup', desc: 'Free same-day pickup from your location' },
                { step: '3', title: 'Ship', desc: 'Professional packing and dispatch within 24 hours' },
                { step: '4', title: 'Deliver', desc: 'Track and receive at USA destination' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-gradient-to-br from-primary to-purple-700 text-white rounded-xl p-8 text-center h-full">
                    <div className="text-5xl font-bold mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-purple-100">{item.desc}</p>
                  </div>
                  {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-secondary transform -translate-y-1/2"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What We Ship */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Type of Items Can You Send to USA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                '🍱 Food Items & Spices',
                '👕 Apparel & Clothes',
                '🏠 Household Items',
                '📄 Documents & Papers',
                '💻 Electronics & Gadgets',
                '💍 Jewellery & Watches',
                '🧳 Excess Baggage & Luggage',
                '🏋️ Sports Equipment',
                '💊 Medicines & Supplements',
                '🎨 Artwork & Paintings',
                '🛋️ Furniture Items',
                '📦 Small to Bulk Shipments',
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border-l-4 border-primary flex items-center gap-4">
                  <span className="text-3xl">{item.split(' ')[0]}</span>
                  <span className="text-gray-700 font-semibold">{item.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Special Services */}
        <section className="py-16 bg-gradient-to-r from-primary to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Special Services & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary text-3xl">🎁</span> Food Courier Specialist
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    We specialise in shipping homemade food, dry snacks, Indian spices, and branded food items to USA. All items are properly packaged and documented to meet USA FDA regulations.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary text-3xl">🔒</span> Insurance Coverage
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Basic shipping insurance included in all shipments. Additional insurance available for high-value items. We ensure your package is protected throughout transit.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary text-3xl">📱</span> Real-Time Tracking
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Track your shipment 24/7 from pickup to delivery. Automatic SMS and email alerts at every stage. Know exactly where your parcel is at all times.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary text-3xl">📋</span> Documentation Support
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Complete export documentation guidance included. Our team handles all customs paperwork to ensure smooth clearance at USA. Hassle-free shipping process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Everything you need to know about shipping to USA from Mumbai
            </p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-primary transition">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === i ? -1 : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition"
                  >
                    <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.q}</h3>
                    <span className={`text-primary text-2xl flex-shrink-0 transform transition ${expandedFAQ === i ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFAQ === i && (
                    <div className="px-6 pb-6 bg-purple-50 border-t border-purple-200">
                      <p className="text-gray-700 leading-relaxed text-base">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ship to USA?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10">
              Get started with the most reliable and affordable courier service from Mumbai to USA. Free pickup, professional packing, and guaranteed delivery!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
                Get Instant Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                Book Pickup Now
              </button>
              <a href="tel:+919833897003" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Call Now: +91-9833897003
              </a>
            </div>
            <p className="text-purple-100 mt-8 text-sm">
              ✓ Free Pickup | ✓ Free Packing | ✓ Real-time Tracking | ✓ 24/7 Support
            </p>
          </div>
        </section>
      </main>
    )
  }

