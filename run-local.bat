@echo off
title ATFIT Local Server
echo ===================================================
echo   ATFIT Hyperlocal Skill Coaching - Local Starter
echo ===================================================
echo.

:: Check if Bun is installed
where bun >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Bun detected! Using Bun for package management...
    echo [INFO] Running bun install...
    call bun install
    echo.
    echo [INFO] Starting development server...
    call bun run dev
) else (
    echo [INFO] Bun not detected. Using Node.js/NPM...
    echo [INFO] Running npm install...
    call npm install
    echo.
    echo [INFO] Starting development server...
    call npm run dev
)

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] An error occurred while starting the application.
    pause
)
