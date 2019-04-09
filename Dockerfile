FROM node:10.13-alpine

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . .

RUN apk add bash git
RUN npm install ts-node @nestjs/cli -g

EXPOSE 3000
EXPOSE 5500
CMD ["ts-node", "-r", "tsconfig-paths/register", "./src/main.ts"]