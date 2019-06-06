FROM node:alpine as builder
COPY ./ /app
WORKDIR /app
RUN yarn install && yarn build

FROM nginx
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
