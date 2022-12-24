## Description

Simple Nestjs app, coneect to mysql DB with healthcheck (HTTP and TypeOrm).


## Installation

* You need to change the DB connection in the .env file.

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app with docker-compose

```bash
$ docker-compose up -d
```

## Running the app with k8s files

```bash
$ kubectl apply -f k8s/.
```

## Running the app with helm 

* update the host in value file or update it --set command
```bash
$ cd helm/zid
$ helm dependency update 
$ helm install my-app .
```
