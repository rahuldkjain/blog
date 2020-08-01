---
title: 'Dockerfile'
date: 2020-08-01 16:21:13
category: 'docker'
description: 'Learn what is Dockerfile and what you can achieve with it. Build images manually and create docker containers out of them.'
draft: false
---
# What is Dockerfile?
Dockerfile is a text file with instructions to build image.
In simpler terms it is automation of docker image creation.

Let's understand this using following steps.

#### Step 1: Create a file named Dockerfile
```bash
$ touch Dockerfile
```
#### Step 2: Add instructions in Dockerfile
```bash
# getting base image
FROM alpine

# MAINTAINER rahul <rahuldkjain@gmail.com>
# the above command is deprecated, so will use LABEL instead
LABEL maintainer="rahuldkjain@gmail.com"

# it executes during the build of the image
RUN echo "HI my name is rahul jain" | grep "rahul"

# it executes only when you create container out of the image
CMD ["echo", "Hello World from my first docker image"]
```

#### Step 3: build docker file to create the image
```sh
$ docker build <file-directory>

# Example
# . means the same directory
$ docker build .
```

If you want to give image-name or tag-name
```sh
$ docker build -t myImage1:1.0 <file-directory>
```
#### Step 4: See docker images
```sh
$ docker images
```

#### Step 5: Run Image to create container
```sh
$ docker run <image-id>
```

Reference: [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)