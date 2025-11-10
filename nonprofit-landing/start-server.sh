#!/bin/bash

# Start Local Web Server for Nonprofit Landing Page
# This script starts a simple Python web server to view the landing page

echo "========================================"
echo "  Nonprofit Landing Page - Local Server"
echo "========================================"
echo ""

# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "Starting web server..."
echo "Location: $DIR"
echo ""
echo "🌐 Open your browser and go to:"
echo ""
echo "   http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

# Try Python 3 first, then Python 2
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python is not installed!"
    echo "Please install Python or open index.html directly in your browser."
    exit 1
fi
