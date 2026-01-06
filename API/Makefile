CONTAINER=api-backend

.PHONY: start-app prisma-seed prisma-migrate prisma-reset

start-app:
	sudo docker compose up -d --build
	sleep 3
	make prisma-migrate
	make prisma-seed

prisma-seed:
	docker exec -it $(CONTAINER) npx prisma db seed

prisma-migrate:
	docker exec -it $(CONTAINER) npx prisma migrate deploy

prisma-reset:
	docker exec -it $(CONTAINER) npx prisma migrate reset --force