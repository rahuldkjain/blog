---
title: 'Docker Compose'
date: 2020-08-01 16:21:13
category: 'docker'
description: 'Learn what is docker-compose and what you can achieve with it. Start and stop all services in one command, scale up services using docker-compose'
draft: false
---
# What is docker compose?
Docker compose is a tool for defining & running multi-container docker applications
- use yaml files to configure application services (**docker-compose.yml**)
- can start all services with a single command (**docker compose up**)
- can stop all services with a single command (**docker compose down**)
- can scale up selected services when required

#### Step 1: Install docker compose
Docker Desktop for Mac and Windows, Docker Toolbox already include Compose along with other Docker apps, so Mac & Windows users do not need to install Compose separately.

**For Linux**
```sh
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose
```
Check if installed successfully
```sh
$ docker-compose -v
```

##### Still unable to install docker-compose?
Follow the tutorial: https://docs.docker.com/compose/install/

#### Step 2: Create docker compose file at any location
```sh
$ touch docker-compose.yml
```
Enter the following instructions in `docker-compose.yml` file.
This will be used to create services(web and database in this case)
```yml
version: "3"
services:
    web:
        image: nginx
    
    database:
        image: redis
```

#### Step 3: Check the validity of the compose file 
```sh
# move into the compose file directory and run the command
$ docker-compose config
```
If any error occurs, please refer: https://docs.docker.com/compose/compose-file/

#### Step 4: Run docker-compose.yml file
```sh
$ docker-compose up
```
It will start all the services in one command.

To start in detached mode
```sh
$ docker-compose up -d
```
#### Step 5: Check current containers
List all containers using this command
```sh
$ docker ps
```

#### Step 6: Stop all services
```sh
$ docker-compose down
```
It will stop all the running services in one command

#### Step 7: Scaling services
You can scale up any service using this command
```sh
$ docker-compose up -d --scale <service-key>=<number-of-instance>

# Example
$ docker-compose up -d --scale database=4
```