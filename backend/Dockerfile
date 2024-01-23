FROM node:16.16.0-alpine3.15

WORKDIR /app

COPY package.json package-lock.json ./

RUN apk add --no-cache python3 make g++

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]