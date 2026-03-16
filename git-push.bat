@echo off
REM Git Push Instructions for Aditya Courier Service (Windows)
REM Run these commands AFTER installing Git

cd /d "c:\Users\ADMIN\Desktop\Aditya Courier Service"

REM Initialize git repository (if not already initialized)
git init

REM Configure git with your information
git config user.email "your-email@example.com"
git config user.name "Your Name"

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit: Aditya Courier Service - Complete Next.js + Node.js project"

REM Add remote repository
git remote add origin https://github.com/translink2016/adityacourier.git

REM Push to GitHub (master/main branch)
git branch -M main
git push -u origin main

echo.
echo ========================================
echo Git push completed successfully!
echo ========================================
echo.
echo Your project is now on GitHub:
echo https://github.com/translink2016/adityacourier
echo.
pause
