@echo off
title Push to GitHub
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
git commit -m "Initialize project: configured port 3001, bound Vite HMR to HTTP server, and added startup scripts"

echo [INFO] Setting main branch...
git branch -M main

echo [INFO] Pushing to GitHub...
echo [INFO] A browser window or credential prompt might open if you aren't authenticated.
git push -u origin main

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Git push failed. Please check your credentials and internet connection.
    pause
    exit /b
)

echo.
echo [SUCCESS] Code pushed successfully to GitHub!
pause
