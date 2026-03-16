'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-secondary text-primary font-bold text-2xl w-10 h-10 rounded-full flex items-center justify-center">
              AC
            </div>
            <div>
              <h1 className="font-bold text-xl">Aditya Courier</h1>
              <p className="text-xs text-gray-200">Global Express</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/about" className="hover:text-secondary transition">About</Link>
            <Link href="/services" className="hover:text-secondary transition">Services</Link>
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
