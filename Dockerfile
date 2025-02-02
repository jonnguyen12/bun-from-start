# Use the Bun image as the base image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install the dependencies
RUN bun install --production

# Expose the port on which the API will listen
EXPOSE 3000

# Run the server when the container launches
CMD ["bun", "start"]