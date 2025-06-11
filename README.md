# Docker-Based Task Manager

## Description
A microservices-based task manager app using Docker. It has:
- A Node.js backend API
- A MongoDB database
- A static frontend using NGINX

## Architecture Diagram
+-----------------+ HTTP +-----------------+ MongoDB URI +----------------+
| Frontend | ----------> | Backend | ------------------> | MongoDB |
| (NGINX + JS) | | (Node.js + API) | | Container |
+-----------------+ +-----------------+ +----------------+


## Tech Stack
- Frontend: HTML, JS, NGINX
- Backend: Node.js, Express, Mongoose
- DB: MongoDB Docker image

## Docker Features
- Custom bridge network: `app-network`
- MongoDB volume: `mongo-data`
- Health check on backend
- Manual container orchestration (no Docker Compose)

## Run Commands

```cmd
docker network create app-network
docker volume create mongo-data

docker run -d --name mongo-container --network app-network -v mongo-data:/data/db -e MONGO_INITDB_DATABASE=taskdb mongo

cd backend
docker build -t task-backend .
docker run -d --name backend-container --network app-network -p 3000:3000 task-backend

cd ../frontend
docker build -t task-frontend .
docker run -d --name frontend-container --network app-network -p 8080:80 task-frontend
