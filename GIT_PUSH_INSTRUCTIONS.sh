#!/bin/bash
# Git Push Instructions for Aditya Courier Service
# Run these commands AFTER installing Git

# Navigate to project directory
cd "c:\Users\ADMIN\Desktop\Aditya Courier Service"

# Initialize git repository (if not already initialized)
git init

# Configure git with your information
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Aditya Courier Service - Complete Next.js + Node.js project"

# Add remote repository
git remote add origin https://github.com/translink2016/adityacourier.git

# Push to GitHub (master/main branch)
git branch -M main
git push -u origin main
