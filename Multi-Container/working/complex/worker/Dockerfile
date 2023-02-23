FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
# start is the only difference from dev
CMD ["npm", "run", "start"] 