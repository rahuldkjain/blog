---
title: 'Docker Cheatsheet'
date: 2020-07-30 16:21:13
category: 'docker'
description: 'Learn what is docker, containers, images and how to install it. How to create, run and execute docker containers using command line interface(CLI)'
draft: false
---

<p align="center">
<img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" width=100 alt="docker rahuldkjain" />
</p>

# What is docker?
Docker is a tool that allows developers, sys-admins etc. to easily deploy their applications in a sandbox (called containers) to run on the host operating system i.e. Linux. The key benefit of Docker is that it allows users to package an application with all of its dependencies into a standardized unit for software development. Unlike virtual machines, containers do not have high overhead and hence enable more efficient usage of the underlying system and resources.

# What are containers?
The industry standard today is to use Virtual Machines (VMs) to run software applications. VMs run applications inside a guest Operating System, which runs on virtual hardware powered by the server’s host OS.

VMs are great at providing full process isolation for applications: there are very few ways a problem in the host operating system can affect the software running in the guest operating system, and vice-versa. But this isolation comes at great cost — the computational overhead spent virtualizing hardware for a guest OS to use is substantial.

Containers take a different approach: by leveraging the low-level mechanics of the host operating system, containers provide most of the isolation of virtual machines at a fraction of the computing power.

## Install Docker
The best article to install and configure docker

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04


```sh
# verify cli can talk to engine
$ sudo docker version

# most config values of engine
$ sudo docker info 
```

## Docker Command format
```sh
$ sudo docker <command> <sub-command> (options)
```

## Image Vs Container
**Image** is the application we want to to run

**Container** is an instance of that image running as a process

We can have many containers running off the same image.

Docker's default image `registry` is called Docker Hub (hub.docker.com)

## Creating Docker Container
Will be using simple nginx web server as image
```sh
$ sudo docker container run --publish 80:80 nginx
```
- It downloaded image `nginx` from docker hub.
- Started a new container from that image.
- Opened port 80 on the host IP.
- Routes that traffic to the container IP, port 80.

open `localhost` in the browser to check nginx

## To run it in the background
```sh
$ sudo docker container run --publish 80:80 --detach nginx
# or 
$ sudo docker container run --name mongo -d mongo
```

## To list containers
```sh
$ sudo docker container ls
```

## To stop container
```sh
$ sudo docker container stop <container-id>
```
No need to put the full **container-id**. Just put enough so that it becomes unqiue to identify

## To start container
```sh
$ sudo docker container start <container-name>
```

## To get the history of all containers
```sh
$ sudo docker container ls -a
```

## Giving name to the container manually
```sh
$ sudo docker container run --publish 80:80 --detach --name <container-name> <image>
```

## See the logs
Since, the container running in the background, we can't see the logs.
To see it run the command
```sh
$ sudo docker container logs <container-name>
```

## See the Process running inside the container
```sh
$ sudo docker container top <docker-name>
```

## Remove containers in a single command
```sh
$ sudo docker container rm <container-id> <container-id> ..
```

You cannot remove the running container, so you will get an error like this
`Error response from daemon: You cannot remove a running container f0b6dd04ba5f691115f2e0ad3cc4c506483ec3dd4a52e4c63b9bce23c8cfbba5. Stop the container before attempting removal or force remove`

**To force remove the container**
```sh
$ sudo docker container rm if <container-id> <container-id> ..
```


# What happens in docker container run?
1. Looks for that image locally in image cache, doesn't find anything
2. Then looks in remote image repository (defaults to docker hub)
3. Downloads the latest version by default
4. Creates new container based on that image and prepares to start
5. Gives it a virtual IP on a private network inside docker engine
6. Opens up port 80 on host and forwards to port 80 in container
7. Starts container by using the CMD in the image dockerfile

### Examples of changing the defaults
###### change host listening port
`8080:80`

###### change version of image
`nginx:1.11`

###### change CMD run on start
`-T`

**Complete command**
```sh
$ sudo docker container run --publish 8080:80 <container-name> -d nginx:1.11 nginx -T
```

> Containers aren't just Virtual Machine


## Traditional way of seeing the processes list
`ps aux`
`ps aux | grep mongo`


## MySQL Container
```sh
$ sudo docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql
```

## Inspect the config of containers
```sh
$ sudo docker container inspect
```

## Live stats of containers
```sh
$ sudo docker container stats
```
**Summary**
```sh
# process list in one container
$ sudo docker container top

# details of one container config
$ sudo docker container inspect

# performance stats for all containers
$ sudo docker container stats
```


## Run container interactively (in terminal)
```sh
$ sudo docker container run -it --name proxy nginx bash
```
To get out of the shell (it will stop the container)
```
root@container-id:/# exit
```

## Ubuntu Container
```sh
$ sudo docker container run -it --name ubuntu ubuntu
```

## To start interactive container again
```sh
$ sudo docker container start -ai <container-name>
```

## Run additional process in running container
```sh
$ sudo container exec -it <container-name> bash
```
**NOTE**: If you exit from it, it won't stop the container


# Download docker images locally
```sh
$ sudo docker pull <image-name>
```
**List existing local docker images**
```sh
$ sudo docker image ls
```

## Alpine distro
- Alpine is a small linux distro (~4MB in size)
- It does not even has bash installed in it
- but it has sh installed
```sh
$ sudo docker pull alpine
$ sudo docker container run -it alpine sh
```

**Summary**
```sh
# start new container interactively
$ sudo docker container run -it

# run additional command in existing container
$ sudo docker container exec -it
```

# Docker Network Concepts
- Each container connected to a private virtual network `bridge`
- Each virtual network routes through NAT Firewall on host IP
- All containers in a virtual network can talk to each other without -p
- Best practice is to create a new virtual network for each app
- "Batteries included, but removable"
- can attach containers to more than one virtual network (or none)
- skip virtual networks and use host IP (--net=host)
- use different docker network drivers to gain new abilities


## -p (--publish)
Publishing ports is always in HOST:CONTAINER format
```sh
$ sudo docker container run -p 80:80 --name webhost -d nginx
```

### Container port
```sh
$ sudo docker container port <container-name>
```

It will look like that the container is using the local IP Address but its not.
To get the  IP Address of the container
```sh
$ sudo docker container inspect --format '{{ .NetworkSettings.IPAddress }}' <container-name>
```
```sh
# Output
172.17.0.2
```

But its not same as your IP address
```sh
$ ifconfig
```
You will see that its different network
`docker0`: is the virtual network that can talk to your host/network 

- We can have many virtual networks for dockers
- containers in the same virtual network can talk to each other

- container needs to publish (**-p HOST:CONTAINER**) to communicate with the host/machine-network

```
c1(-p 80:80)/docker0 -> host
c2/docker0 -> host

c1/docker1 -> host
c2(-p 8080:80)/docker1 -> host
```

# Docker Networks: CLI Management
```sh
# show networks
$ sudo docker network ls

# inspect a network
$ sudo docker network inspect

# create a network
$ sudo docker network create --driver

# attach a network to container
$ sudo docker network connect

# detach a network from container
$ sudo docker network disconnect 
```
### 3 Network drivers
1. bridge
2. host
3. none


**bridge = docker0**

`--network bridge`: default docker virtual network which is NAT'ed behind the host IP
```sh
$ sudo docker network inspect bridge
```

`--network host`: it gains performance by skipping virtual networks but sacrifices security of container mode
It prevents security boundary of containers
```sh
$ sudo docker network inspect host
```
## Create docker network
```sh
$ sudo docker network create <network-name>
```
A new network with `bridge` driver as default will be created
Check: 
```sh
$ sudo docker network ls
```

## Run a container in a docker network
```sh
$ sudo docker container run -d --name <container-name> --network <network-name> nginx
```
Check:
```sh
$ sudo docker network inspect <network-name>
```

A Container can be on different networks at the same time

## Connect container
```sh
$ sudo docker network connect <network-id> <container-id>
```
check: 
```sh
$ sudo docker network inspect <network-id>
```

## Disconnect container
```sh
$ sudo docker network disconnect <network-id> <container-id>
```
check: 
```sh
$ sudo docker network inspect <network-id>
```

# Docker Networks: Default Security
- create your apps on frontend/backend sit on the same docker network
- their inter-communication never leaves host
- All externally exposed ports closed by default
- You must manually expose via -p, which is better default security
- This gets even better with Swarn & Overlay Networks

# Docker Networks: DNS
How containers find each other?

- understand how DNS is the key to easy inter-container comms
- see how it works by default with custom networks
- learn how to use `--link` to enable DNS on default bridge network

#### Forget IPs
static IP's and using IP's for talking to containers is an antipatern. Do your best to avoid it

#### Docker DNS
Docker daemon has a built-in DNS Server that containers use by default

#### DNS Default Names
Docker defaults the hostname to the container's name, but you can also set aliases

Check: 
```sh
$ sudo docker container exec -it <container1-name> ping <container2-name>
```
If this won't run and an error like `starting container process caused "exec: \"ping\": executable file not found in $PATH": unknown` comes up then it means that ping is not installed in the container

Install ping like this
```sh
$ sudo docker container exec -it <container-name> bash
apt-get update
apt-get install iputils-ping
```
Then run the above command, it will work fine

No need to specify specific IP Address. It works absolutely fine with names

- containers shouldn't rely on IP's for inter-communication
- DNS for friendly names is built-in if you use custom networks
