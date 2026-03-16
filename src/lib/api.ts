const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export interface TrackingResponse {
  success: boolean
  data?: {
    id: string
    sender: string
    recipient: string
    origin: string
    destination: string
    weight: string
    status: string
    estimatedDelivery: string
    tracking: TrackingEvent[]
  }
  message?: string
}

export interface TrackingEvent {
  status: string
  date: string
  location: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface QuoteRequest {
  origin: string
  destination: string
  weight: number
  serviceLevel: 'economy' | 'standard' | 'express'
}

class ApiService {
  private baseURL: string

  constructor() {
    this.baseURL = API_URL
  }

  async checkHealth(): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/api/health`)
      return await response.json()
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }

  async trackShipment(trackingNumber: string): Promise<TrackingResponse> {
    try {
      const response = await fetch(`${this.baseURL}/api/track/${trackingNumber}`)
      return await response.json()
    } catch (error) {
      console.error('Tracking failed:', error)
      throw error
    }
  }

  async submitContactForm(data: ContactFormData): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      return await response.json()
    } catch (error) {
      console.error('Contact form submission failed:', error)
      throw error
    }
  }

  async getQuote(data: QuoteRequest): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/api/quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      return await response.json()
    } catch (error) {
      console.error('Quote request failed:', error)
      throw error
    }
  }

  async getAllShipments(): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/api/shipments`)
      return await response.json()
    } catch (error) {
      console.error('Failed to fetch shipments:', error)
      throw error
    }
  }
}

export const apiService = new ApiService()
