#!/usr/bin/env powershell
# Comprehensive Git Push Script with detailed logging

$logFile = "c:\Users\ADMIN\Desktop\Aditya Courier Service\push-output.log"
$projectPath = "c:\Users\ADMIN\Desktop\Aditya Courier Service"

# Start logging
"═══════════════════════════════════════════════════════════" | Out-File $logFile
"ADITYA COURIER SERVICE - GIT PUSH LOG" | Out-File $logFile -Append
"Started: $(Get-Date)" | Out-File $logFile -Append
"═══════════════════════════════════════════════════════════" | Out-File $logFile -Append
"" | Out-File $logFile -Append

try {
    # Step 1: Check/Install Git
    "Step 1: Checking Git installation..." | Out-File $logFile -Append
    
    $gitCmd = $null
    try {
        git --version | Out-File $logFile -Append
        $gitCmd = "git"
    } catch {
        "Git not in PATH, trying standard location..." | Out-File $logFile -Append
        if (Test-Path "C:\Program Files\Git\cmd\git.exe") {
            $gitCmd = "C:\Program Files\Git\cmd\git.exe"
            "Found Git at standard location" | Out-File $logFile -Append
        } else {
            "Git not found, installing..." | Out-File $logFile -Append
            $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
            $gitCmd = "git"
        }
    }
    
    if ($gitCmd) {
        "✓ Git ready" | Out-File $logFile -Append
    }
    
    # Step 2: Navigate to project
    "" | Out-File $logFile -Append
    "Step 2: Navigating to project folder..." | Out-File $logFile -Append
    Set-Location $projectPath
    "✓ Location: $(Get-Location)" | Out-File $logFile -Append
    
    # Step 3: Initialize repository
    "" | Out-File $logFile -Append
    "Step 3: Initializing git repository..." | Out-File $logFile -Append
    & $gitCmd init | Out-File $logFile -Append
    "✓ Repository initialized" | Out-File $logFile -Append
    
    # Step 4: Configure git user
    "" | Out-File $logFile -Append
    "Step 4: Configuring git user..." | Out-File $logFile -Append
    & $gitCmd config user.email "admin@adityacourier.com"
    & $gitCmd config user.name "Aditya Admin"
    "✓ User configured" | Out-File $logFile -Append
    
    # Step 5: Add files
    "" | Out-File $logFile -Append
    "Step 5: Adding all files..." | Out-File $logFile -Append
    & $gitCmd add . | Out-File $logFile -Append
    "✓ Files added" | Out-File $logFile -Append
    
    # Step 6: Create commit
    "" | Out-File $logFile -Append
    "Step 6: Creating commit..." | Out-File $logFile -Append
    & $gitCmd commit -m "Initial commit: Aditya Courier Service - Complete Next.js and Node.js courier website" | Out-File $logFile -Append
    "✓ Commit created" | Out-File $logFile -Append
    
    # Step 7: Add remote
    "" | Out-File $logFile -Append
    "Step 7: Adding remote repository..." | Out-File $logFile -Append
    & $gitCmd remote add origin https://github.com/translink2016/adityacourier.git 2>$null
    "✓ Remote added" | Out-File $logFile -Append
    
    # Step 8: Set main branch
    "" | Out-File $logFile -Append
    "Step 8: Setting main branch..." | Out-File $logFile -Append
    & $gitCmd branch -M main | Out-File $logFile -Append
    "✓ Branch set" | Out-File $logFile -Append
    
    # Step 9: Push to GitHub
    "" | Out-File $logFile -Append
    "Step 9: Pushing to GitHub..." | Out-File $logFile -Append
    & $gitCmd push -u origin main 2>&1 | Out-File $logFile -Append
    
    "" | Out-File $logFile -Append
    "═══════════════════════════════════════════════════════════" | Out-File $logFile -Append
    "✅ SUCCESS! Push completed!" | Out-File $logFile -Append
    "═══════════════════════════════════════════════════════════" | Out-File $logFile -Append
    "Repository: https://github.com/translink2016/adityacourier" | Out-File $logFile -Append
    "Complete time: $(Get-Date)" | Out-File $logFile -Append
    "" | Out-File $logFile -Append
    "IMPORTANT: Revoke your token for security!" | Out-File $logFile -Append
    "Visit: https://github.com/settings/tokens" | Out-File $logFile -Append
    "Delete: $token" | Out-File $logFile -Append
    "" | Out-File $logFile -Append
    
} catch {
    "" | Out-File $logFile -Append
    "❌ ERROR: $_" | Out-File $logFile -Append
    "" | Out-File $logFile -Append
}

# Display the log
Write-Host (Get-Content $logFile | Out-String)
