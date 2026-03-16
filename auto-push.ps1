# Auto-push script for GitHub
# This script will attempt to install Git if not found, then push the project

Write-Host "═════════════════════════════════════════════════════════════"
Write-Host "  ADITYA COURIER SERVICE - AUTOMATED GIT PUSH"
Write-Host "═════════════════════════════════════════════════════════════"
Write-Host ""

# Check if Git is available
$gitFound = $false
try {
    $gitVersion = & git --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Git is installed: $gitVersion"
        $gitFound = $true
    }
} catch {
    Write-Host "Git not found in PATH"
}

if (-not $gitFound) {
    Write-Host ""
    Write-Host "Installing Git..."
    Write-Host ""
    
    # Try to download and install Git
    $installerUrl = 'https://github.com/git-for-windows/git/releases/download/v2.45.0.windows.1/Git-2.45.0-64-bit.exe'
    $installerPath = "$env:TEMP\GitInstaller.exe"
    
    Write-Host "Downloading Git installer..."
    try {
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12
        $webClient = New-Object System.Net.WebClient
        $webClient.DownloadFile($installerUrl, $installerPath)
        Write-Host "✓ Download complete"
        
        Write-Host "Installing Git (this may take a moment)..."
        & $installerPath /VERYSILENT /NORESTART
        Write-Host "✓ Git installation initiated"
        
        # Wait for installation
        Start-Sleep -Seconds 15
        
        # Refresh PATH
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        Write-Host "✓ Verifying installation..."
        $gitVersion = & git --version 2>$null
        Write-Host "✓ Git ready: $gitVersion"
    } catch {
        Write-Host "⚠ Error during installation: $_"
        Write-Host ""
        Write-Host "Please install Git manually from: https://git-scm.com/download/win"
        exit 1
    }
}

Write-Host ""
Write-Host "═════════════════════════════════════════════════════════════"
Write-Host "  INITIALIZING GIT REPOSITORY"
Write-Host "═════════════════════════════════════════════════════════════"
Write-Host ""

$projectPath = "c:\Users\ADMIN\Desktop\Aditya Courier Service"
Set-Location $projectPath

# Initialize git
Write-Host "Initializing repository..."
& git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "✓ Repository already initialized"
}

# Configure git user
Write-Host "Configuring git user..."
& git config user.email "admin@adityacourier.com"
& git config user.name "Aditya Admin"

# Add all files
Write-Host "Adding all files..."
& git add .

# Create commit
Write-Host "Creating commit..."
& git commit -m "Initial commit: Aditya Courier Service - Complete Next.js and Node.js courier website"

# Add remote
Write-Host "Adding remote repository..."
& git remote add origin https://github.com/translink2016/adityacourier.git 2>$null

# Set main branch
Write-Host "Setting main branch..."
& git branch -M main

Write-Host ""
Write-Host "═════════════════════════════════════════════════════════════"
Write-Host "  PUSHING TO GITHUB"
Write-Host "═════════════════════════════════════════════════════════════"
Write-Host ""

# Push with token (token should be set via environment variable or similar)
# For security, token is not stored in this script
Write-Host "Pushing to GitHub..."
& git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "═════════════════════════════════════════════════════════════"
    Write-Host "  ✅ SUCCESS! PROJECT PUSHED TO GITHUB"
    Write-Host "═════════════════════════════════════════════════════════════"
    Write-Host ""
    Write-Host "Your project is now available at:"
    Write-Host "  https://github.com/translink2016/adityacourier"
    Write-Host ""
    Write-Host "IMPORTANT: Revoke your token for security:"
    Write-Host "  https://github.com/settings/tokens"
    Write-Host "  Revoke your Personal Access Token"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "═════════════════════════════════════════════════════════════"
    Write-Host "  ❌ PUSH FAILED"
    Write-Host "═════════════════════════════════════════════════════════════"
    Write-Host ""
    Write-Host "Please check:"
    Write-Host "  1. Git is properly installed"
    Write-Host "  2. Internet connection is working"
    Write-Host "  3. Token is still valid"
    Write-Host ""
}

Read-Host "Press Enter to exit"
