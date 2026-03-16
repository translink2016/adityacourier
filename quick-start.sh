#!/bin/bash
# Quick Start Script for Aditya Courier Service

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}Aditya Courier Service${NC}"
echo -e "${GREEN}Quick Start Guide${NC}"
echo -e "${GREEN}================================${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed!${NC}"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found${NC} ($(node --version))"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}npm is not installed!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm found${NC} ($(npm --version))"
echo ""

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Display next steps
echo -e "${YELLOW}================================${NC}"
echo -e "${YELLOW}Setup Complete!${NC}"
echo -e "${YELLOW}================================${NC}"
echo ""
echo "To start development, run:"
echo ""
echo -e "${GREEN}npm run dev-all${NC}        # Run frontend + backend together"
echo "or"
echo -e "${GREEN}npm run dev${NC}            # Run frontend (Terminal 1)"
echo -e "${GREEN}npm run server${NC}         # Run backend (Terminal 2)"
echo ""
echo "Then open your browser to:"
echo -e "${GREEN}http://localhost:3000${NC}   # Frontend"
echo -e "${GREEN}http://localhost:5000/api/health${NC}   # Backend API"
echo ""
echo "For more information, see SETUP_GUIDE.md"
echo ""
