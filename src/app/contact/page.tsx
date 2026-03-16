import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Aditya Courier Service',
  description: 'Get in touch with Aditya Courier Service. We are available 24/7 to assist you with your shipping needs.',
  keywords: 'contact, customer service, support, inquiry',
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Available 24/7 for all your courier needs</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
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

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-900 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Address</h3>
                      <p className="text-gray-700">123 Shipping Lane<br />New York, NY 10001<br />United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+12125551234" className="hover:text-secondary transition">+1 (212) 555-1234</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@aditya-courier.com" className="hover:text-secondary transition">info@aditya-courier.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🕐</div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '15K+', label: 'Happy Customers' },
                  { number: '99.8%', label: 'On-Time Delivery' },
                  { number: '220+', label: 'Countries Served' },
                  { number: '10M+', label: 'Packages Delivered' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-primary to-purple-900 text-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold mb-1">{stat.number}</p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Find Us</h2>
          <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-700 text-lg">📍 Map Integration Coming Soon</p>
              <p className="text-gray-600">Visit our office location in New York, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What is your average delivery time?', a: 'Delivery times vary from 1-10 days depending on destination and service level chosen.' },
              { q: 'Do you offer insurance?', a: 'Yes, all packages include basic insurance. Enhanced coverage is available upon request.' },
              { q: 'How can I track my package?', a: 'You can track your package on our website or mobile app using your tracking number.' },
              { q: 'What are your payment methods?', a: 'We accept credit cards, bank transfers, and digital wallets for your convenience.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary">
                <h3 className="font-bold text-primary text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
