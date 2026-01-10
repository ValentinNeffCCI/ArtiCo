#? Permet d'avoir dynamiquement le container qui contient le back-end 
CONTAINER := $(shell docker compose ps -q node-app)

.PHONY: start-app prisma-seed prisma-migrate prisma-reset wait-db

start-app: up wait-db prisma-migrate prisma-seed

up:
	sudo docker compose up -d --build

wait-db:
	@echo "Container mounting ..."
	@sleep 5

prisma-migrate:
	sudo docker exec -it $(CONTAINER) npx prisma migrate deploy

prisma-seed:
	sudo docker exec -it $(CONTAINER) npx prisma db seed

prisma-reset:
	sudo docker exec -it $(CONTAINER) npx prisma migrate reset --force
