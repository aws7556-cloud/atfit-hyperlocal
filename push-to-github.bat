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
git commit -m "Initialize project: configured port 3001, bound Vite HMR to HTTP server, and added startup scripts" 2>nul

echo [INFO] Setting main branch...
git branch -M main

echo [INFO] Attempting standard push to main branch...
git push -u origin main

if %ERRORLEVEL% neq 0 (
    echo.
    echo [WARNING] Standard push failed. The remote repository might contain files (like README or LICENSE) that you don't have locally.
    echo.
    echo Choose an option to resolve:
    echo [1] Pull remote changes and merge (Recommended if remote has important files)
    echo [2] Force push (Warning: This will overwrite anything currently on the remote)
    echo [3] Exit
    echo.
    set /p choice="Enter your choice (1, 2, or 3): "

    if "%choice%"=="1" (
        echo.
        echo [INFO] Attempting to pull and merge remote changes...
        git pull origin main --allow-unrelated-histories --no-edit
        echo.
        echo [INFO] Retrying push...
        git push -u origin main
    ) else if "%choice%"=="2" (
        echo.
        echo [WARNING] Force pushing to main...
        git push -f origin main
    ) else (
        echo.
        echo Exiting...
        exit /b
    )
)

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Operation failed. Please check your credentials or resolve conflicts manually.
    pause
    exit /b
)

echo.
echo [SUCCESS] Code pushed successfully to GitHub!
pause
