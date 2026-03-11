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

# Copy jar from build stage
COPY --from=build /app/target/web-clone-0.0.1-SNAPSHOT.jar app.jar

# Set default PORT if not provided
ENV PORT=8080

# Expose port
EXPOSE 8080

# Run with verbose Java logging and unbuffered output
CMD ["sh", "-c", "set -x && echo 'Starting application...' && echo 'PORT='$PORT && java -Djava.awt.headless=true -XX:+PrintCommandLineFlags -jar app.jar 2>&1"]
