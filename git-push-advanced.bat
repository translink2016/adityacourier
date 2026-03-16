@echo off
setlocal enabledelayedexpansion

REM Log file
set LOG=c:\Users\ADMIN\Desktop\Aditya Courier Service\git-push-log.txt

REM Start logging
(
echo.
echo ═══════════════════════════════════════════════════════════
echo   ADITYA COURIER SERVICE - GIT PUSH LOG
echo ═══════════════════════════════════════════════════════════
echo   Time: %date% %time%
echo.

REM Check if git is available
echo Checking for Git installation...
where git >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✓ Git found
    git --version
) else (
    echo ! Git not found in PATH
    echo.
    echo Attempting to use default installation path...
    if exist "C:\Program Files\Git\cmd\git.exe" (
        echo ✓ Git found at C:\Program Files\Git
        set PATH=C:\Program Files\Git\cmd;!PATH!
    ) else (
        echo ✗ Git not found in standard locations
        echo.
        echo Please install Git from: https://git-scm.com/download/win
        goto :END
    )
)

echo.
echo ═══════════════════════════════════════════════════════════
echo   NAVIGATING TO PROJECT FOLDER
echo ═══════════════════════════════════════════════════════════
echo.

cd /d "c:\Users\ADMIN\Desktop\Aditya Courier Service"
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Failed to navigate to project folder
    goto :END
)
echo ✓ In project folder: %cd%
echo.

echo ═══════════════════════════════════════════════════════════
echo   INITIALIZING GIT REPOSITORY
echo ═══════════════════════════════════════════════════════════
echo.

git init
echo ✓ Repository initialized
echo.

echo Configuring git user...
git config user.email "admin@adityacourier.com"
git config user.name "Aditya Admin"
echo ✓ User configured
echo.

echo Adding all files...
git add .
echo ✓ Files added
echo.

echo Creating commit...
git commit -m "Initial commit: Aditya Courier Service - Complete Next.js and Node.js courier website"
echo ✓ Commit created
echo.

echo Adding remote origin...
git remote add origin https://github.com/translink2016/adityacourier.git 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✓ Remote added
) else (
    echo ! Remote already exists (updating...)
    git remote set-url origin https://github.com/translink2016/adityacourier.git
)
echo.

echo Setting main branch...
git branch -M main
echo ✓ Branch set to main
echo.

echo ═══════════════════════════════════════════════════════════
echo   PUSHING TO GITHUB
echo ═══════════════════════════════════════════════════════════
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ═══════════════════════════════════════════════════════════
    echo   ✅ SUCCESS! PROJECT PUSHED TO GITHUB
    echo ═══════════════════════════════════════════════════════════
    echo.
    echo Repository: https://github.com/translink2016/adityacourier
    echo.
    echo IMPORTANT: Revoke your token for security:
    echo   https://github.com/settings/tokens
    echo.
) else (
    echo.
    echo ═══════════════════════════════════════════════════════════
    echo   ✗ PUSH FAILED (Error code: %ERRORLEVEL%)
    echo ═══════════════════════════════════════════════════════════
    echo.
    echo Possible solutions:
    echo   1. Check internet connection
    echo   2. Verify token is still valid
    echo   3. Ensure GitHub repository exists
    echo   4. Install Git from: https://git-scm.com/download/win
    echo.
)

:END
echo.
echo Log saved to: %LOG%
) > %LOG% 2>&1

REM Display the log
type %LOG%

pause
