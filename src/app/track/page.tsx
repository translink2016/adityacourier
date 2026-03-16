import type { Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Track Shipment - Aditya Courier Service',
  description: 'Track your package in real-time with our advanced tracking system. Enter your tracking number to get live updates.',
  keywords: 'tracking, shipment tracking, package tracking, real-time tracking',
}

export default function Track() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Track Your Shipment</h1>
          <p className="text-xl text-gray-200">Real-time tracking for peace of mind</p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-light">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Tracking Number</label>
                <input
                  type="text"
                  placeholder="Enter your tracking number (e.g., AC1234567890)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Recipient Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-900 transition">
                Track Now
              </button>
            </form>
          </div>

          {/* Sample Tracking Info */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Sample Tracking Information</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                {[
                  { status: 'Delivered', date: 'Today, 2:30 PM', location: 'New York, NY', icon: '✓' },
                  { status: 'Out for Delivery', date: 'Today, 8:00 AM', location: 'New York, NY', icon: '🚚' },
                  { status: 'In Transit', date: 'Yesterday, 4:15 PM', location: 'Chicago, IL', icon: '📍' },
                  { status: 'Picked Up', date: '2 days ago', location: 'Los Angeles, CA', icon: '📦' },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-3xl">{event.icon}</div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-primary">{event.status}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Tracking Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Real-Time Updates', desc: 'Get instant notifications of every milestone' },
              { title: 'GPS Tracking', desc: 'Precise location information' },
              { title: 'SMS & Email', desc: 'Multiple notification channels' },
            ].map((feature, i) => (
              <div key={i} className="bg-light rounded-xl p-6 text-center border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
