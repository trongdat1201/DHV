#!/bin/sh
set -e

echo "========================================="
echo "Railway Deployment Starting..."
echo "========================================="
echo "PORT: $PORT"
echo "Java Version:"
java -version 2>&1
echo ""
echo "Working Directory: $(pwd)"
echo "Files:"
ls -la
echo ""
echo "Starting Spring Boot Application..."
echo "========================================="

exec java -Dserver.port=${PORT:-8080} -jar app.jar
