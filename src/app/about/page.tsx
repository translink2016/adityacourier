import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Aditya Courier Service',
  description: 'Learn about Aditya Courier Service - our mission, vision, and commitment to excellence in international shipping',
  keywords: 'about courier service, shipping company, logistics provider',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Aditya Courier</h1>
          <p className="text-xl text-gray-200">Delivering Excellence Globally Since 2010</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide fast, reliable, and cost-effective international courier services that connect businesses and individuals across the globe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to delivering packages safely and on time, every time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-purple-900 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="leading-relaxed mb-4">
                To be the most trusted and innovative courier service provider in the world.
              </p>
              <p className="leading-relaxed">
                We envision a world where shipping is seamless, affordable, and accessible to everyone.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '220+', label: 'Countries Served' },
              { number: '10M+', label: 'Packages Delivered' },
              { number: '15K+', label: 'Happy Customers' },
              { number: '99.8%', label: 'On-Time Delivery' },
            ].map((stat, i) => (
              <div key={i} className="bg-light rounded-xl p-6 text-center border-2 border-secondary">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="bg-light rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Reliability', desc: 'Consistent delivery performance you can count on' },
                { title: 'Innovation', desc: 'Cutting-edge technology for better tracking and service' },
                { title: 'Integrity', desc: 'Transparent pricing and honest communication' },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary text-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
            <Link href="/contact" className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
