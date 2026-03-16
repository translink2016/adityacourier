'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="bg-secondary text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center">AC</div>
              Aditya Courier
            </h3>
            <p className="text-sm mb-4">Fast, reliable international courier service.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition">Facebook</a>
              <a href="#" className="hover:text-secondary transition">Twitter</a>
              <a href="#" className="hover:text-secondary transition">LinkedIn</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-secondary transition">International Shipping</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition">Express Delivery</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition">Door-to-Door Service</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition">Tracking System</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-secondary transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-secondary"
              />
              <button type="submit" className="w-full bg-secondary text-primary px-3 py-2 rounded font-semibold hover:bg-yellow-400 transition text-sm">
                Subscribe
              </button>
              {subscribed && <p className="text-secondary text-xs">Thanks for subscribing!</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Aditya Courier Service. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
