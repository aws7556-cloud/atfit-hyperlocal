@echo off
title Push to GitHub - ATFIT Hyperlocal
echo ===================================================
echo   Pushing ATFIT Hyperlocal to GitHub
echo ===================================================
echo.

:: Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not in PATH. Please install Git first.
    pause
    exit /b
)

:: Initialize git repository if not already done
if not exist .git (
    echo [INFO] Initializing Git repository...
    git init
)

:: Configure remote origin
echo [INFO] Setting up remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/aws7556-cloud/atfit-hyperlocal.git

:: Git operations
echo [INFO] Staging files...
git add .

echo [INFO] Creating commit...
git commit -m "Update ATFIT Hyperlocal codebase and sports features"

echo [INFO] Setting main branch...
git branch -M main

echo [INFO] Pushing to main branch...
git push -u origin main

if %ERRORLEVEL% neq 0 (
    echo.
    echo [INFO] Standard push failed, attempting force push...
    git push -f -u origin main
)

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Git push failed. Please check your GitHub authentication / credentials.
    pause
    exit /b
)

echo.
echo ===================================================
echo [SUCCESS] Code pushed successfully to GitHub!
echo Repository: https://github.com/aws7556-cloud/atfit-hyperlocal.git
echo ===================================================
pause
