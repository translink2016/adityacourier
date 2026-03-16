@echo off
REM Simple batch script to push to GitHub

cd /d "c:\Users\ADMIN\Desktop\Aditya Courier Service"

echo Initializing git...
git init

echo Adding files...
git add .

echo Configuring user...
git config user.email "admin@adityacourier.com"
git config user.name "Aditya Admin"

echo Creating commit...
git commit -m "Initial commit: Aditya Courier Service"

echo Adding remote...
git remote add origin https://github.com/translink2016/adityacourier.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done!
