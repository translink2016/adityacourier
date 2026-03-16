'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* Creative Logistics Logo */}
            <svg
              width="45"
              height="45"
              viewBox="0 0 100 100"
              className="drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Truck Body */}
              <rect x="15" y="50" width="55" height="25" fill="#FDB914" rx="3" />
              
              {/* Truck Cabin */}
              <rect x="60" y="35" width="15" height="20" fill="#FDB914" rx="2" />
              <polygon points="75,35 75,45 85,50 85,40" fill="#9370DB" />
              
              {/* Wheels */}
              <circle cx="30" cy="80" r="8" fill="#9370DB" />
              <circle cx="70" cy="80" r="8" fill="#9370DB" />
              <circle cx="28" cy="80" r="4" fill="#FDB914" />
              <circle cx="68" cy="80" r="4" fill="#FDB914" />
              
              {/* Package on truck */}
              <rect x="22" y="55" width="12" height="12" fill="#9370DB" rx="1" />
              <line x1="22" y1="61" x2="34" y2="61" stroke="#FDB914" strokeWidth="1" />
              
              {/* Shipping lines (motion) */}
              <path d="M 5 65 Q 10 60 15 65" stroke="#FDB914" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 5 72 Q 10 67 15 72" stroke="#FDB914" strokeWidth="2" fill="none" strokeLinecap="round" />
              
              {/* Star accent */}
              <polygon points="85,15 87,22 94,23 89,28 91,35 85,31 79,35 81,28 76,23 83,22" fill="#FDB914" />
            </svg>

            <div>
              <h1 className="font-bold text-xl">Aditya Courier</h1>
              <p className="text-xs text-gray-200">Global Express</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/about" className="hover:text-secondary transition">About</Link>
            <Link href="/services" className="hover:text-secondary transition">Services</Link>
            <Link href="/international" className="hover:text-secondary transition">International</Link>
            <Link href="/track" className="hover:text-secondary transition">Track</Link>
            <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
          </nav>

          <Link href="/track" className="hidden md:block bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Track Shipment
          </Link>
        </div>
      </div>
    </header>
  )
}
