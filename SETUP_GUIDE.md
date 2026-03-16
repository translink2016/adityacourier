# Getting Started with Aditya Courier Service

## Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application

**Option A: Run both frontend and backend together**
```bash
npm run dev-all
```

**Option B: Run separately in different terminals**

Terminal 1 - Frontend (Next.js):
```bash
npm run dev
```

Terminal 2 - Backend (Node.js):
```bash
npm run server
```

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Development Setup

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- A modern code editor (VS Code recommended)

### Environment Variables

The `.env.local` file is already configured with default values:

```
PORT=5000
NODE_ENV=development
API_URL=http://localhost:5000
```

Modify these if needed for your environment.

## Testing the API

### Using curl or Postman

**Test Health Check**:
```bash
curl http://localhost:5000/api/health
```

**Track a Shipment**:
```bash
curl http://localhost:5000/api/track/AC1234567890
```

**Submit Contact Form**:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Shipping Inquiry",
    "message": "I need to ship a package"
  }'
```

**Get Quote**:
```bash
curl -X POST http://localhost:5000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "New York",
    "destination": "Los Angeles",
    "weight": "5",
    "serviceLevel": "standard"
  }'
```

## Pages Overview

1. **Home Page** (`/`)
   - Hero section with call-to-action
   - Features showcase
   - Contact CTA

2. **About Page** (`/about`)
   - Mission and vision
   - Company statistics
   - Core values

3. **Services Page** (`/services`)
   - Service offerings
   - Pricing tiers
   - Why choose us section

4. **Track Shipment Page** (`/track`)
   - Tracking form
   - Sample tracking information
   - Tracking features

5. **Contact Page** (`/contact`)
   - Contact form
   - Company contact information
   - FAQ section

## SEO Features Implemented

✅ **Meta Tags**
- Title tags on every page
- Meta descriptions
- Keywords
- Robots meta tags

✅ **Structured Data**
- JSON-LD schema markup
- LocalBusiness schema
- Organization schema

✅ **Sitemaps**
- `sitemap.xml` for search engine discovery
- All pages included with priorities

✅ **Robots File**
- Proper robot directives
- Crawl delay settings
- Disallow rules for admin/api

✅ **Open Graph**
- OG:title, OG:description
- OG:image
- OG:type

✅ **Twitter Cards**
- Twitter:card
- Twitter:title
- Twitter:description

✅ **Performance**
- Server-side rendering (Next.js)
- Image optimization ready
- CSS minification
- Code splitting

## Color Scheme

The website uses a professional blue and yellow color scheme:

- **Primary Blue**: `#003DA5` (rgb(0, 61, 165))
- **Secondary Yellow**: `#FDB914` (rgb(253, 185, 20))
- **Light Background**: `#f5f5f5`
- **Dark Text**: `#1a1a1a`

These colors are configured in `tailwind.config.ts`.

## Building for Production

### Build Command
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Build Backend Only
For production deployment, you might want separate builds:

Frontend:
```bash
npm run build
npm start
```

Backend:
```bash
cd server
node index.js
```

## Deployment Recommendations

### Frontend (Next.js)
Recommended platforms:
- Vercel (optimal for Next.js)
- Netlify
- AWS Amplify
- Heroku

### Backend (Node.js)
Recommended platforms:
- Heroku
- AWS Lambda + API Gateway
- DigitalOcean
- Render.com
- Railway

### Docker (Optional)

Create `Dockerfile` for containerization:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000 5000
CMD ["npm", "run", "dev-all"]
```

Build and run:
```bash
docker build -t aditya-courier .
docker run -p 3000:3000 -p 5000:5000 aditya-courier
```

## Project Structure Details

```
src/app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout with SEO
├── globals.css           # Global styles
├── not-found.tsx         # 404 page
├── about/
│   └── page.tsx          # About page
├── services/
│   └── page.tsx          # Services page
├── track/
│   └── page.tsx          # Track page
└── contact/
    └── page.tsx          # Contact page

src/components/
├── Header.tsx            # Navigation header
├── Footer.tsx            # Footer
└── HeroSection.tsx       # Hero banner

src/lib/
└── metadata.ts           # SEO metadata config

server/
├── index.js              # Express API server
└── package.json          # Server dependencies

public/
├── sitemap.xml           # XML sitemap
└── robots.txt            # Robots file
```

## Common Issues & Solutions

### Issue: Port already in use
```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Rebuild TypeScript
npm run build
```

## Next Steps

1. Replace placeholder content with actual company information
2. Add real images and logos
3. Set up email notifications for contact form
4. Integrate payment gateway for booking
5. Set up real database (MongoDB, PostgreSQL, etc.)
6. Implement user authentication
7. Add more advanced tracking features
8. Configure CDN for static assets
9. Set up analytics and monitoring
10. Configure SSL/HTTPS for production

## Support

For technical support or questions about the setup, contact: support@aditya-courier.com

---

**Last Updated**: March 16, 2024
**Version**: 1.0.0
