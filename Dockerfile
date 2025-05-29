FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 3002

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && yarn build && yarn start:prod"]