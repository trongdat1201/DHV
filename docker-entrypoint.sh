#!/bin/sh
set -e

echo "==================================="
echo "Container started successfully!"
echo "==================================="
echo "Current directory: $(pwd)"
echo "Files in /app:"
ls -lah
echo "==================================="
echo "Java version:"
java -version
echo "==================================="
echo "Environment variables:"
echo "PORT=$PORT"
echo "MYSQLHOST=$MYSQLHOST"
echo "MYSQLDATABASE=$MYSQLDATABASE"
echo "==================================="
echo "Starting Spring Boot application..."
echo "==================================="

# Start the application
exec java -jar app.jar
