---
title: 'Bash Scripting Cheatsheet'
date: 2020-07-21 16:21:13
category: 'scripting'
description: ''
draft: true
---
Shell is common Linux, Unix

Bash is a CLI tool to run the scripts. The shell script communicate with the kernel which in turn kernel tells the hardware what to do

#### To create a script file
```bash
gedit first.sh
```

#### Commands
```bash
#!/bin/bash #to the tell the path of bash

# hash is used for comments

echo "Hello World!" # prints stuff on the screen
```

#### Run the script
```bash
chmod +x first.sh # +x makes the file executable
```
or 

```bash
chmod 755 first.sh # 755 is the octal here which is used to manage permissions
```

To show which command is giving which output
```bash
#!/bin/bash/ -x
```

```bash
echo $PATH # to know the path(run this in the root directory)
```
#### Use `\` to make the long commands readable
```bash
npm install chrome inkspace vlc sublime mediaplayer \
soundrecorder vscode 
```

## Points to remember
- BASH is very well documented, don't hesitate to search the web
- Always use absolute paths in a script. Eg: /home/Documents/logo.png
- Write detailed comments
- `~` in terminal refers to **home** directory
