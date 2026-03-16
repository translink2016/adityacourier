const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Mock database for shipments
const shipments = {
  'AC1234567890': {
    id: 'AC1234567890',
    sender: 'John Doe',
    recipient: 'Jane Smith',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    weight: '2.5 kg',
    status: 'Delivered',
    estimatedDelivery: '2024-03-20',
    actualDelivery: '2024-03-18',
    tracking: [
      { status: 'Delivered', date: '2024-03-18', location: 'Los Angeles, CA' },
      { status: 'Out for Delivery', date: '2024-03-18', location: 'Los Angeles, CA' },
      { status: 'In Transit', date: '2024-03-17', location: 'Chicago, IL' },
      { status: 'Picked Up', date: '2024-03-16', location: 'New York, NY' },
    ]
  },
  'AC9876543210': {
    id: 'AC9876543210',
    sender: 'ABC Corporation',
    recipient: 'XYZ Company',
    origin: 'London, UK',
    destination: 'Tokyo, Japan',
    weight: '15 kg',
    status: 'In Transit',
    estimatedDelivery: '2024-03-25',
    tracking: [
      { status: 'In Transit', date: '2024-03-19', location: 'Singapore' },
      { status: 'In Transit', date: '2024-03-17', location: 'Dubai, UAE' },
      { status: 'Picked Up', date: '2024-03-15', location: 'London, UK' },
    ]
  }
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date().toISOString() });
});

// Track shipment
app.get('/api/track/:trackingNumber', (req, res) => {
  const trackingNumber = req.params.trackingNumber.toUpperCase();
  
  if (shipments[trackingNumber]) {
    res.json({
      success: true,
      data: shipments[trackingNumber]
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Shipment not found'
    });
  }
});

// Get all shipments (for admin purposes)
app.get('/api/shipments', (req, res) => {
  res.json({
    success: true,
    data: Object.values(shipments),
    total: Object.keys(shipments).length
  });
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required'
    });
  }

  // Here you would typically save to database or send email
  console.log('Contact Form Submission:', { name, email, phone, subject, message });

  res.json({
    success: true,
    message: 'We have received your message. We will get back to you soon!'
  });
});

// Get quote
app.post('/api/quote', (req, res) => {
  const { origin, destination, weight, serviceLevel } = req.body;

  if (!origin || !destination || !weight) {
    return res.status(400).json({
      success: false,
      message: 'Origin, destination, and weight are required'
    });
  }

  // Simple pricing calculation
  const basePrice = 10;
  const perKgPrice = 2;
  const serviceFactor = serviceLevel === 'express' ? 2 : serviceLevel === 'standard' ? 1 : 0.5;
  
  const totalPrice = (basePrice + (weight * perKgPrice)) * serviceFactor;

  res.json({
    success: true,
    data: {
      origin,
      destination,
      weight,
      serviceLevel,
      estimatedPrice: totalPrice.toFixed(2),
      currency: 'USD',
      estimatedDelivery: '5-7 business days'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Health Check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
