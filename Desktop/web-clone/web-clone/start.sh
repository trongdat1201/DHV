#!/bin/bash
set -e

echo "========================================="
echo "Starting Railway Deployment"
echo "Working Directory: $(pwd)"
echo "PORT: $PORT"
echo "========================================="

echo "Listing files in current directory:"
ls -la

echo ""
echo "Listing files in target directory:"
ls -la target/ || echo "Target directory not found"

echo ""
echo "Starting Spring Boot application..."
exec java -Dserver.port=$PORT -jar target/web-clone-0.0.1-SNAPSHOT.jar
