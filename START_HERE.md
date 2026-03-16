# 🚀 START HERE - Aditya Courier Service

## ⚡ Quick Start (Copy & Paste These Commands)

### For Windows Users:
```powershell
# Navigate to project directory
cd "c:\Users\ADMIN\Desktop\Aditya Courier Service"

# Install all dependencies
npm install

# Start everything
npm run dev-all
```

### For Mac/Linux Users:
```bash
# Navigate to project directory
cd ~/Desktop/Aditya\ Courier\ Service

# Install all dependencies
npm install

# Start everything
npm run dev-all
```

---

## 🌐 Open in Browser

Once running, open these URLs:

1. **Frontend (Main Website)**
   ```
   http://localhost:3000
   ```

2. **Backend API Health Check**
   ```
   http://localhost:5000/api/health
   ```

---

## 📖 Read Documentation in This Order

1. **QUICK_REFERENCE.md** (2 min) - Quick reference guide
2. **README.md** (5 min) - Project overview
3. **SETUP_GUIDE.md** (15 min) - Detailed setup

---

## 🎯 What You Have

✅ **Frontend** - Modern React with Next.js
- 5 complete pages
- Professional design
- Blue & Yellow theme
- Fully responsive
- SEO optimized

✅ **Backend** - Node.js API
- Shipment tracking
- Contact form
- Quote calculation
- Real-time features

✅ **Documentation** - Everything explained
- 6 guide files
- Code comments
- Setup instructions
- Deployment guide

---

## ⚠️ Requirements

Before running, make sure you have:
- ✅ Node.js v16+ installed
- ✅ npm installed
- ✅ Basic terminal knowledge

---

## 🎨 Preview

### Pages Available:
1. **Home** (/)
   - Hero section
   - Features showcase
   - Call-to-action

2. **About** (/about)
   - Mission & vision
   - Company stats
   - Core values

3. **Services** (/services)
   - Service details
   - Pricing tiers
   - Features

4. **Track** (/track)
   - Tracking form
   - Sample tracking
   - Real-time status

5. **Contact** (/contact)
   - Contact form
   - Business info
   - FAQ section

---

## 🔌 Test the API

### Track a Package
```bash
curl http://localhost:5000/api/track/AC1234567890
```

### Check API Health
```bash
curl http://localhost:5000/api/health
```

### Sample Tracking Numbers
- `AC1234567890` - Delivered
- `AC9876543210` - In Transit

---

## 💾 Important Files to Know

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/services/page.tsx` | Services page |
| `src/app/contact/page.tsx` | Contact form |
| `server/index.js` | Backend API |
| `tailwind.config.ts` | Colors & styling |
| `package.json` | Dependencies |

---

## 🛠 Useful Commands

```bash
# Development
npm run dev              # Frontend only
npm run server           # Backend only
npm run dev-all          # Both

# Production
npm run build            # Create build
npm start                # Run build

# Other
npm run lint             # Check code
npm cache clean --force  # Fix npm issues
```

---

## 🐛 Troubleshooting

### Command not found: npm
- Install Node.js from nodejs.org

### Port 3000 already in use
- Run: `npm run dev -- -p 3001`

### Dependencies not installing
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 🎯 Next Steps (After Running)

1. ✅ Verify frontend loads at http://localhost:3000
2. ✅ Verify backend at http://localhost:5000/api/health
3. ✅ Click through all 5 pages
4. ✅ Test the tracking feature
5. ✅ Test the contact form
6. ✅ Read SETUP_GUIDE.md for deployment

---

## 📞 Need Help?

Check these files in order:
1. QUICK_REFERENCE.md
2. SETUP_GUIDE.md
3. README.md
4. Inline code comments

---

## 🎉 You're Ready!

Your professional courier website is ready to go!

### One Command to Start:
```bash
npm install && npm run dev-all
```

Then visit: **http://localhost:3000** ✨

---

**Everything is set up. Just run the commands above and you're good to go!**
