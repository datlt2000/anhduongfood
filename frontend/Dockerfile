# 1. Build app
FROM node:18 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine
# Copy static assets from builder stage
COPY --from=build /app/build /usr/share/nginx/html
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 80
# start nginx 
ENTRYPOINT ["nginx", "-g", "daemon off;"]