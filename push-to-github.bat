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

if %ERRORLEVEL% equ 0 goto success

:handle_error
echo.
echo [WARNING] Standard push failed. The remote repository might contain files that you do not have locally.
echo.
echo Choose an option to resolve:
echo 1. Pull remote changes and merge
echo 2. Force push - Warning: This will overwrite remote changes
echo 3. Exit
echo.
set choice=
set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" goto pull_and_merge
if "%choice%"=="2" goto force_push
goto exit_script

:pull_and_merge
echo.
echo [INFO] Attempting to pull and merge remote changes...
git pull origin main --allow-unrelated-histories --no-edit
echo.
echo [INFO] Retrying push...
git push -u origin main
if %ERRORLEVEL% equ 0 goto success
goto fail

:force_push
echo.
echo [WARNING] Force pushing to main...
git push -f origin main
if %ERRORLEVEL% equ 0 goto success
goto fail

:success
echo.
echo [SUCCESS] Code pushed successfully to GitHub!
pause
exit /b

:fail
echo.
echo [ERROR] Operation failed. Please check your credentials or resolve conflicts manually.
pause
exit /b

:exit_script
echo.
echo Exiting...
exit /b
