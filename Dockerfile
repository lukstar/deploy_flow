FROM node:12.8.0-alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.16.1

COPY --from=builder /app/build /usr/share/nginx/html