---
title: 'Bash Shell Scripting: Positional Parameters'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how access, and use positional parameters in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# positional parameters are variables that can store data on the command line in variable names 0-9

# $0 always contains the path tp the executed script
# you can access names past 9 by using parameter expansio like this ${10}

# add all numbers on the command line
echo "1st argument: $1"
sum=0

# $# tells you the number of arguments
while [[ $# -gt 0 ]]; do
    # get the first argument
    num=$1
    sum=$((sum+num))

    # shift moves the value of $2 into $1 until none are left
    # the value of $# decrements as well
    shift
done
echo "Sum: $sum"
```