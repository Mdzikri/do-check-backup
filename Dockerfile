FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN apk add --update python3 make g++\
    && rm -rf /var/cache/apk/*
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]