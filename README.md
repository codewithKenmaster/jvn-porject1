# NPM Package Dependency Inspector

## Overview

This is a web application that allows developers to analyze public NPM packages and generate a dependency report card.  
It provides important metrics like:

- Name
- Latest Version
- License type
- Number of dependencies
- Unpacked size
- Last publish date
- Weekly downloads

This helps developers make informed decisions before using libraries.

---

## Run Locally (Docker)

The project is fully containerized. To run locally:

1. Open a terminal in the project folder.
2. Build and start the container:

```bash
docker-compose up --build
docker-compose up -d #run docker detached mode (so you can continue using the terminal to other functions)
docker-compose down # will stop the container
docker exec -it <containerName> sh # will let shell into the container (use for debuggin purposes)
```
