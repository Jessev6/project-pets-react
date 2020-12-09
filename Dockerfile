FROM node:15.3.0 as builder

WORKDIR /app
ADD public /app/public

ADD package.json package-lock.json /app/
RUN npm install --only=prod

ADD src /app/src

# Overwrite config for prod
ADD src/conf/overlays/config.prod.js /app/src/conf/config.js
RUN npm run build

FROM nginx:alpine as final
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
