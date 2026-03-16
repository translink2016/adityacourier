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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Section 1: Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="50" width="55" height="25" fill="#FDB914" rx="3" />
                <rect x="60" y="35" width="15" height="20" fill="#FDB914" rx="2" />
                <polygon points="75,35 75,45 85,50 85,40" fill="#9370DB" />
                <circle cx="30" cy="80" r="8" fill="#9370DB" />
                <circle cx="70" cy="80" r="8" fill="#9370DB" />
              </svg>
              Aditya Courier
            </h3>
            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              Your trusted partner for international shipping. Fast, reliable delivery to 220+ countries with real-time tracking.
            </p>
            <div className="space-y-2">
              <p className="text-sm"><span className="text-secondary font-semibold">Email:</span> info@adityacourier.com</p>
              <p className="text-sm"><span className="text-secondary font-semibold">Phone:</span> +1-800-COURIER</p>
            </div>
          </div>

          {/* Section 2: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>International Shipping</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Express Delivery</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Document Shipping</Link></li>
              <li><Link href="/track" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Track Package</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Get Quote</Link></li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Contact</Link></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300 flex items-center gap-2"><span className="text-secondary">→</span>Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Section 4: Newsletter & Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Stay Updated
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
              />
              <button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300">
                Subscribe
              </button>
              {subscribed && <p className="text-secondary text-xs text-center">✓ Thanks for subscribing!</p>}
            </form>
            
            <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300">f</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300">𝕏</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300">in</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300">📱</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Aditya Courier Service. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition duration-300">Privacy</a>
              <a href="#" className="hover:text-secondary transition duration-300">Terms</a>
              <a href="#" className="hover:text-secondary transition duration-300">Sitemap</a>
              <a href="#" className="hover:text-secondary transition duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
