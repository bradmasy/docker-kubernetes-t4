# use an existing docker image as a base

FROM alpine
# download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc
# what to do when it starts as container

CMD ["redis-server"]

#docker commit -c "CMD 'redis-server'" CONTAINERID