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

# Set environment
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start application
CMD ["java", "-Xms256m", "-Xmx512m", "-jar", "app.jar"]
