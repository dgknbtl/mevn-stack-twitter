FROM node:16.16.0-alpine3.15

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]