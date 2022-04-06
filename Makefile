DOCKERCMD=docker
DOCKERBUILD=$(DOCKERCMD) build
DOCKERRUN=$(DOCKERCMD) run
DOCKERCP=$(DOCKERCMD) cp
DOCKERRM=$(DOCKERCMD) rm
DOCKERRMI=$(DOCKERCMD) rmi

# Dependecies section
install:
	npm ci
	npx playwright install

record:
	npx playwright codegen

# Docker section
docker: docker-alias-rm docker-build docker-run
docker-rm: container-rm images-rm

docker-build:
	$(DOCKERBUILD) --no-cache -t kompas/playwright .
	@echo "Successfully build kompas/playwright"

docker-run:
	$(DOCKERRUN) --name playwright_test kompas/playwright
	@echo "Successfully run kompas/playwright"

docker-cp:
	$(DOCKERCP) playwright_test:/project/kompas-playwright .
	@echo "Successfully copy paste playwright_test content"

docker-alias-rm:
	$(DOCKERRM) -f playwright_test
	@echo "Successfully remove playwright_test"

container-rm:
	@$(DOCKERRM) -vf $$(docker ps -aq)
	@echo "Docker container successfully removed"

images-rm:
	@$(DOCKERRMI) -f $$(docker images -aq)
	@echo "Docker images successfully removed"
