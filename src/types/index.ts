export interface Shipment {
  id: string
  sender: string
  recipient: string
  origin: string
  destination: string
  weight: string
  status: 'Picked Up' | 'In Transit' | 'Out for Delivery' | 'Delivered'
  estimatedDelivery: string
  actualDelivery?: string
  tracking: TrackingEvent[]
}

export interface TrackingEvent {
  status: string
  date: string
  location: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface Quote {
  origin: string
  destination: string
  weight: number
  serviceLevel: ServiceLevel
  estimatedPrice: number
  currency: string
  estimatedDelivery: string
}

export type ServiceLevel = 'economy' | 'standard' | 'express'

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
}
