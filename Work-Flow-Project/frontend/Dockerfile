#building phase, building the app
FROM node:alpine as builder  
WORKDIR "/app"
COPY package.json . 
RUN npm install
COPY . .
RUN npm run build 

#/app/build will have everything

#run phase, for server
FROM nginx
#copies from builder phase to the app/build default is the html
COPY --from=builder /app/build /usr/share/nginx/html
#default container automatically starts nginx

