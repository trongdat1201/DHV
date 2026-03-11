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

# Simple test: print to stdout and stderr then start app
CMD sh -c 'echo "STDOUT: Container starting on PORT=$PORT" && echo "STDERR: This is stderr output" >&2 && java -jar app.jar'
