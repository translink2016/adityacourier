# Aditya Courier Service

A modern, SEO-friendly international courier service website built with Next.js (React) and Node.js backend.

## Features

### Frontend (Next.js + React + Tailwind CSS)
- **5 Pages**: Home, About, Services, Track Shipment, Contact
- **SEO Optimized**: Meta tags, JSON-LD structured data, sitemaps, robots.txt
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Color Scheme**: Professional purple (#9370DB) and yellow (#FDB914)
- **Performance**: Server-side rendering for optimal SEO

### Backend (Node.js + Express)
- **RESTful API**: Shipment tracking, quote generation, contact form
- **CORS Enabled**: Secure cross-origin requests
- **Error Handling**: Comprehensive error handling middleware
- **Mock Database**: Sample shipment data for demonstration

## Project Structure

```
aditya-courier-service/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── about/page.tsx        # About page
│   │   ├── services/page.tsx     # Services page
│   │   ├── track/page.tsx        # Track shipment page
│   │   └── contact/page.tsx      # Contact page
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer component
│   │   └── HeroSection.tsx       # Hero banner
│   └── lib/
│       └── metadata.ts          # SEO metadata configuration
├── server/
│   └── index.js                 # Node.js Express API server
├── public/
│   ├── sitemap.xml              # XML sitemap for SEO
│   └── robots.txt               # Robots file for search engines
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS config
├── next.config.js               # Next.js configuration
└── .env.local                   # Environment variables
```

## Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
npm install express cors body-parser dotenv
```

## Running the Application

### Development Mode (Both Frontend & Backend)

Run frontend and backend concurrently:
```bash
npm run dev-all
```

Or run separately:

**Frontend (Next.js)**:
```bash
npm run dev
```
Frontend runs on: `http://localhost:3000`

**Backend (Node.js)**:
```bash
npm run server
```
Backend API runs on: `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /api/health` - Check if API is running

### Tracking
- `GET /api/track/:trackingNumber` - Get shipment status (e.g., `/api/track/AC1234567890`)

### Quote
- `POST /api/quote` - Get shipping quote
  - Body: `{ origin, destination, weight, serviceLevel }`

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone, subject, message }`

### Sample Tracking Numbers
- `AC1234567890` - Delivered package (US)
- `AC9876543210` - In transit package (International)

## SEO Features

- ✅ Meta tags on all pages
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Canonical URLs
- ✅ Mobile responsive
- ✅ Server-side rendering (Next.js)
- ✅ Image optimization ready

## Color Scheme

- **Primary Purple**: `#9370DB`
- **Secondary Yellow**: `#FDB914`
- **Light Background**: `#f5f5f5`
- **Dark Text**: `#1a1a1a`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Next.js for server-side rendering
- Image optimization support
- CSS minification with Tailwind
- Code splitting for better performance
- Responsive images

## Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Dashboard for users
- [ ] Real database integration
- [ ] Email notifications
- [ ] SMS tracking
- [ ] Multi-language support
- [ ] Advanced analytics

## License

This project is proprietary and confidential.

## Contact

For support, email: support@aditya-courier.com
