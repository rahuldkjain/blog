---
title: 'Bash Shell Scripting: Value seperator in strings'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to seperate the value with IFS and how to use parameter expansion in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# you can set what seperates the values with IFS

# store the original IFS
OIFS="$IFS"

# set what seperates the input values
IFS=","

read -p "Enter 2 values to sum: " num1 num2

# echo $num1
# echo $num2

# use the parameter expansion ${} to substitute any whitespace 
# with nothing
num1=${num1//[[:blank:]]/}
num2=${num2//[[:blank:]]/}

# echo $num1
# echo $num2

sum=$((num1+num2))
echo "$num1 + $num2 = $sum"

# reset the IFS to original value
IFS="$OIFS"

# parameter expansion allows you to do this
# the search and replace allows this
samp_string="The dog climbed the tree"
echo "${samp_string//dog/cat}"

# you can assign a default value if it doesn't exist
echo "I am ${name:-Rahul}"

# this uses the default value if it doesn't exists and assigns the value
echo "I am ${name:=titu}"
echo "$name"
```