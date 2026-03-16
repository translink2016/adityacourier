export const API_ENDPOINTS = {
  HEALTH: '/api/health',
  TRACK: '/api/track',
  QUOTE: '/api/quote',
  CONTACT: '/api/contact',
  SHIPMENTS: '/api/shipments',
}

export const SERVICE_LEVELS = {
  ECONOMY: 'economy',
  STANDARD: 'standard',
  EXPRESS: 'express',
}

export const SERVICE_PRICES = {
  economy: { basePrice: 5.99, multiplier: 0.5 },
  standard: { basePrice: 12.99, multiplier: 1 },
  express: { basePrice: 24.99, multiplier: 2 },
}

export const DELIVERY_TIMES = {
  economy: '7-10 business days',
  standard: '3-5 business days',
  express: '1-2 business days',
}

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Japan',
  'China',
  'India',
  'Australia',
  'Brazil',
  // ... add more as needed
]

export const COMPANY_INFO = {
  name: 'Aditya Courier Service',
  tagline: 'Global Express Delivery',
  email: 'info@aditya-courier.com',
  phone: '+1 (212) 555-1234',
  address: '123 Shipping Lane, New York, NY 10001, USA',
  website: 'https://aditya-courier.com',
}

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/aditya-courier',
  twitter: 'https://twitter.com/aditya-courier',
  linkedin: 'https://linkedin.com/company/aditya-courier',
  instagram: 'https://instagram.com/aditya-courier',
}
