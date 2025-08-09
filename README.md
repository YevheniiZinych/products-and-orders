## Orders & Products — Frontend (React + Vite)

Single Page Application to browse Orders and Products with real‑time sessions counter via WebSocket.

## Host url

- base URL - [https://products-api-1kn6.onrender.com]

## Features

Orders page:

- List all orders with product count, two date formats, total amount (USD/UAH)

- Click an order → side panel shows its products

- Delete order (confirmation modal)

## Products page:

Card view of products

- Filter by product type (dynamic)

- Delete product

## Top menu:

- Live datetime (updated every second)

- Real‑time active sessions (WebSocket)

- Routing transitions with Framer Motion

- Global state with Redux Toolkit

## Tech stack

- React + Vite

- TypeScript

- Redux Toolkit, React‑Redux

- Axios

- Socket.io‑client

- Framer Motion

- Bootstrap 5, SCSS (BEM)

- Docker + Nginx (production build)

## Environment variables

- VITE_BASE_URL=https://products-api-1kn6.onrender.com
- VITE_SOCKET_URL=https://products-api-1kn6.onrender.com

## Local development

<code>`bash $ npm install $ npm run dev `</code>

## Production build

<code>`bash $ npm run build $ npm run preview `</code>

## Docker

Dockerfile builds the Vite app and serves it with Nginx

- Build with envs:
  docker build \
   --build-arg VITE_BASE_URL=https://products-api-1kn6.onrender.com \
   --build-arg VITE_SOCKET_URL=https://products-api-1kn6.onrender.com \
   -t order-app .

- Run:
  docker run -d -p 3000:80 --name order-app order-app

# open in http://localhost:3000
