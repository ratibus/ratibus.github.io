CURRENT_UID ?= $(shell id -u)
CURRENT_GID ?= $(shell id -g)

DEV_DOCKER_COMPOSE_ENVS = \
  CURRENT_UID=$(CURRENT_UID) \
  CURRENT_GID=$(CURRENT_GID)

DEV_DOCKER_COMPOSE = $(DEV_DOCKER_COMPOSE_ENVS) docker-compose \
 -f docker-compose.yml

dev-up:
	$(DEV_DOCKER_COMPOSE) up

dev-down:
	$(DEV_DOCKER_COMPOSE) down --volumes --remove-orphans