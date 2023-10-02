# Build Docker image
build:
	docker-compose build

# Run Docker container
up:
	docker-compose up

# Stop and remove Docker container
down:
	docker stop Telegram-bot

# Clean up Docker images and containers
clean:
	docker stop telegram-bot
	docker rm telegram-bot
	docker rmi telegram-bot