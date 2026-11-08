FROM node:20-alpine

# Install Redis alongside the app — this is the misconfiguration the scan catches.
RUN apk add --no-cache redis

WORKDIR /app
COPY server.js .

EXPOSE 3000

# Start Redis bound to all interfaces with no auth (the "exposed backing service"),
# then start the web app on port 3000.
CMD ["sh", "-c", "redis-server --daemonize yes --bind 0.0.0.0 --protected-mode no && node server.js"]
