FROM node:14 AS front-builder

ENV NODE_ENV production
ENV REACT_APP_WEBSITE_TITLE Work
ENV REACT_APP_API_URL https://api.serjleodev.ru

WORKDIR /client
COPY ./client ./


RUN yarn \
    && yarn build

FROM golang:1.17.3-alpine3.14 AS back-builder

WORKDIR /server
COPY ./server ./

RUN go mod download && go get -u ./...
RUN go build -o bin/main cmd/main.go

FROM alpine:latest

WORKDIR /root/

COPY --from=0 /client/build ./build
COPY --from=1 /server/bin/main .

EXPOSE 3100

CMD ["./main"]
