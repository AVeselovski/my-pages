FROM node:alpine as builder
WORKDIR /app

COPY ./package.json ./
RUN yarn install
COPY ./ ./
RUN yarn build

FROM nginx
EXPOSE 4000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# FROM node:alpine as build-stage

# ARG APP_BASEPATH
# ENV APP_BASEPATH=${APP_BASEPATH}

# RUN yarn global add @vue/cli -g

# WORKDIR /usr/src/app
# COPY app /usr/src/app

# RUN yarn install

# # yarn build (now in production mode) is a RUN command (image build-time) and no longer a CMD (container runtime)!
# # This is why you also need APP_BASEPATH declared as ARG
# RUN yarn build


# FROM nginx

# COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html/dist

# # keep /etc/nginx/nginx.conf with include statement for all /etc/nginx/conf.d/*.conf
# # but remove /etc/nginx/conf.d/default.conf for appropriate sub-path settings
# RUN rm /etc/nginx/conf.d/default.conf
# COPY  app.conf /etc/nginx/conf.d/app.conf

# EXPOSE 4000

# WORKDIR /etc/nginx

# CMD ["nginx", "-g", "daemon off;"]
