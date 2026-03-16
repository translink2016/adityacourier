@echo off
REM ═══════════════════════════════════════════════════════════════
REM     PUSH ADITYA COURIER SERVICE TO GITHUB
REM     Uses provided Personal Access Token for authentication
REM ═══════════════════════════════════════════════════════════════

echo.
echo ═══════════════════════════════════════════════════════════════
echo   ADITYA COURIER SERVICE - GITHUB PUSH
echo ═══════════════════════════════════════════════════════════════
echo.

cd /d "c:\Users\ADMIN\Desktop\Aditya Courier Service"

echo Initializing git repository...
git init

echo.
echo Configuring git user...
git config user.email "admin@adityacourier.com"
git config user.name "Aditya Admin"

echo.
echo Adding all files...
git add .

echo.
echo Creating initial commit...
git commit -m "Initial commit: Aditya Courier Service - Complete Next.js + Node.js courier website with SEO optimization"

echo.
echo Adding remote repository...
git remote add origin https://github.com/translink2016/adityacourier.git

echo.
echo Setting main branch...
git branch -M main

echo.
echo ═══════════════════════════════════════════════════════════════
echo   PUSHING TO GITHUB (Authenticating with Personal Access Token)
echo ═══════════════════════════════════════════════════════════════
echo.

REM Using the provided GitHub Personal Access Token for authentication
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ═══════════════════════════════════════════════════════════════
    echo   ✅ PUSH SUCCESSFUL!
    echo ═══════════════════════════════════════════════════════════════
    echo.
    echo Your project is now on GitHub:
    echo   https://github.com/translink2016/adityacourier
    echo.
    echo IMPORTANT: Revoke your token for security:
    echo   https://github.com/settings/tokens
    echo.
) else (
    echo ═══════════════════════════════════════════════════════════════
    echo   ❌ PUSH FAILED
    echo ═══════════════════════════════════════════════════════════════
    echo.
    echo Please check:
    echo   1. Git is installed properly
    echo   2. Internet connection is working
    echo   3. Token hasn't expired
    echo.
)

echo.
pause
