# Telco Product Catalog – Frontend

This repository contains the Angular-based user interface for the Telco Product Catalog backend API.

The application displays products, allows filtering, sorting, and toggling valid-only mode.  
It is built with Angular, served through Nginx, and fully dockerized.

## Requirements

- Docker
- (Optional) Node.js 20+ and npm if running in development mode

## Running the frontend using Docker (production mode)

Build the image:

```
docker build -t telco-frontend .
```

Run the container:

```
docker run --rm -p 4200:80 telco-frontend
```

The application will be available at:

```
http://localhost:4200
```

## Running full stack (frontend + backend) with Docker Compose

The Docker Compose file is located in the backend repository.

From the backend project directory:

```
docker compose up --build
```

After startup:

- Frontend: http://localhost
- Backend: http://localhost:8080

The frontend communicates with the backend via the internal service name:

```
http://backend:8080
```

## Running the Angular app in development mode

```
npm install
npm start
```

The dev server runs at:

```
http://localhost:4200
```

Make sure the backend runs at `http://localhost:8080`.

## Project structure

- `src/app/app.ts` – root Angular component
- `src/app/services/product.service.ts` – API client service
- `src/app/app.html` – template used for rendering the product list
- `Dockerfile` – production build using Nginx
- `nginx.conf` – reverse proxy configuration for backend calls
