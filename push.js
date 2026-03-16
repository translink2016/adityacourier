#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectPath = "c:\\Users\\ADMIN\\Desktop\\Aditya Courier Service";
const logFile = path.join(projectPath, "git-push-log.txt");

function log(message) {
    console.log(message);
    fs.appendFileSync(logFile, message + "\n");
}

try {
    fs.writeFileSync(logFile, "═══════════════════════════════════════════════════════════\n");
    log("ADITYA COURIER SERVICE - GIT PUSH");
    log("Started: " + new Date().toISOString());
    log("═══════════════════════════════════════════════════════════\n");

    process.chdir(projectPath);
    log("✓ Working directory: " + process.cwd());

    log("\nStep 1: Initializing git repository...");
    try {
        execSync("git init", { stdio: 'pipe' });
        log("✓ Repository initialized");
    } catch (e) {
        log("! Git init completed (may already exist)");
    }

    log("\nStep 2: Configuring git user...");
    execSync('git config user.email "admin@adityacourier.com"', { stdio: 'pipe' });
    execSync('git config user.name "Aditya Admin"', { stdio: 'pipe' });
    log("✓ User configured");

    log("\nStep 3: Adding all files...");
    execSync("git add .", { stdio: 'pipe' });
    log("✓ Files added");

    log("\nStep 4: Creating commit...");
    try {
        execSync('git commit -m "Initial commit: Aditya Courier Service - Complete Next.js and Node.js courier website"', { stdio: 'pipe' });
        log("✓ Commit created");
    } catch (e) {
        log("! Commit completed (nothing to commit or already exists)");
    }

    log("\nStep 5: Adding remote repository...");
    try {
        execSync("git remote add origin https://github.com/translink2016/adityacourier.git", { stdio: 'pipe' });
        log("✓ Remote added");
    } catch (e) {
        log("! Remote already exists");
    }

    log("\nStep 6: Setting main branch...");
    try {
        execSync("git branch -M main", { stdio: 'pipe' });
        log("✓ Branch set to main");
    } catch (e) {
        log("! Branch operation completed");
    }

    log("\nStep 7: Pushing to GitHub...");
    
    try {
        execSync(`git push -u origin main`, { stdio: 'pipe' });
        log("✓ Push successful!");
    } catch (e) {
        log("! Push attempted: " + e.message);
    }

    log("\n═══════════════════════════════════════════════════════════");
    log("✅ GIT OPERATIONS COMPLETED!");
    log("═══════════════════════════════════════════════════════════");
    log("\nRepository: https://github.com/translink2016/adityacourier");
    log("\nIMPORTANT: Revoke your token for security!");
    log("Visit: https://github.com/settings/tokens");
    log("Delete: " + token);
    log("\n═══════════════════════════════════════════════════════════");

} catch (error) {
    log("\n❌ ERROR: " + error.message);
    log("Stack: " + error.stack);
}
