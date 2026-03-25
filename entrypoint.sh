#!/bin/sh
set -e

# Force unbuffered output
export JAVA_TOOL_OPTIONS="-Djava.io.BufferedOutputStream.bufferSize=0"

echo "=========================================" >&2
echo "Railway Deployment Starting..." >&2
echo "=========================================" >&2
echo "PORT: $PORT" >&2
echo "Java Version:" >&2
java -version 2>&1
echo "" >&2
echo "Working Directory: $(pwd)" >&2
echo "Files:" >&2
ls -la >&2
echo "" >&2
echo "JAR File Details:" >&2
ls -lh app.jar >&2
echo "" >&2
echo "Starting Spring Boot Application..." >&2
echo "=========================================" >&2

exec java -Dserver.port=${PORT:-8080} -jar app.jar 2>&1
