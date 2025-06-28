FROM node:lts-alpine3.21 AS build
WORKDIR /secure_note/note
COPY package*.json ./
RUN ls -la && npm install
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.22-perl
RUN rm -rf /usr/share/nginx/html/* 
COPY --from=build /secure_note/note/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80