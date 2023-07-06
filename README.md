# This repository use microservices for analytics and have nestJS API with an Admin Panel
It provides a possibility to perform sign up users, confirm user's emails, manage user's events.
## Running the example with docker-compose
Execute `docker network create infrastructure && cp .env.example .env && docker-compose up -d` from the root of the repository
## Accessing the API itself and swagger docs for the API
- Swagger docs for the API will be accessible locally via URI "**http://localhost:8000/api**"
- Swagger docs for the API will be accessible locally via URI "**http://localhost:3000/api**"
- Admin Panel will be accessible locally via URI "**http://localhost:3001/login**"

## Brief architecture overview for Analytics-App
This API showcase consists of the following parts:
- API gateway
- Token service - responsible for creating, decoding, destroying JWT tokens for users
- User service - responsible for CRUD operations on users
- Mailer service - responsible for sending out emails (confirm sign up)
- Permission service - responsible for verifying permissions for logged in users.
- Events service - responsible for CRUD operations on users events records
- Analytics service - responsible for CRUD operations events, errors, visitors records
- The service interact via **TCP sockets**

## Brief architecture overview for Web-App
This API showcase consists of the following parts:
- Auth 
- User
- Category
- Event
- Invitation
- Place
- Trip