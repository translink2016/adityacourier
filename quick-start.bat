@echo off
REM Quick Start Script for Aditya Courier Service (Windows)

echo.
echo ================================
echo Aditya Courier Service
echo Quick Start Guide
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js found (%NODE_VERSION%)

REM Check if npm is installed
where npm >nul 2>nul
if errorlevel 1 (
    echo ERROR: npm is not installed!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm found (%NPM_VERSION%)
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo [OK] Dependencies installed
echo.

REM Display next steps
echo ================================
echo Setup Complete!
echo ================================
echo.
echo To start development, run:
echo.
echo npm run dev-all        [Run frontend + backend together]
echo or
echo npm run dev            [Run frontend in Terminal 1]
echo npm run server         [Run backend in Terminal 2]
echo.
echo Then open your browser to:
echo http://localhost:3000   [Frontend]
echo http://localhost:5000/api/health   [Backend API]
echo.
echo For more information, see SETUP_GUIDE.md
echo.
pause
