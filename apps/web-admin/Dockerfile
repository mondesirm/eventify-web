FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# instantiate environment variable
ARG REACT_APP_SERVER_URL=http://localhost:3000

# set the environment variable that points to the server
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# expose a specific port on the docker container
ENV PORT=80
EXPOSE 3001

# Démarrer l'application
CMD ["npm", "start"]