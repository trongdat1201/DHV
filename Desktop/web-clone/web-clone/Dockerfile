# Build stage
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies (cached layer)
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src src

# Build application
RUN ./mvnw clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Install bash for better debugging
RUN apk add --no-cache bash

# Copy jar from build stage
COPY --from=build /app/target/web-clone-0.0.1-SNAPSHOT.jar app.jar

# Set default PORT if not provided
ENV PORT=8080

# Expose port
EXPOSE 8080

# Simple direct command - no script
CMD ["sh", "-c", "echo 'Container started' && ls -la && java -Dserver.port=${PORT} -jar app.jar"]
