'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Global Courier <span className="text-secondary">Excellence</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Fast, secure, and reliable international shipping to over 220 countries. Track your shipments in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
                Get Started
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary hover:text-primary transition">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="h-4 bg-secondary rounded-full w-3/4"></div>
                <div className="h-4 bg-secondary rounded-full w-1/2"></div>
                <div className="h-40 bg-gradient-to-br from-secondary to-yellow-300 rounded-lg mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
