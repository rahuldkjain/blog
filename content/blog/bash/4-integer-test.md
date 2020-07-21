---
title: 'Bash Shell Scripting: Logical Operators and integer conditional statements'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to use logical operators, ==, >, <, and % with integers in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

read -p "Enter a number: " num

if ((num == 10)); then
    echo "Your number equals 10"
fi

if ((num > 10)); then
    echo "It is greater than 10"
fi

if ((num < 10)); then
    echo "It is less than 10"
fi

if (( ((num % 2)) == 0 )); then
    echo "It is even"
fi

# using logical operators &&, || and !
if (( ((num > 0)) && ((num < 11)) )); then 
    echo "$num is between 1 and 10"

# &&, || can also used as control structures

# create a file and then if that worked open it in gedit
touch samp_file && gedit samp_file

# if samp_dir doesn't exist, make it
[ -d samp_dir ] || mkdir samp_dir

# delete file
rm samp_file

# delete directory
rmdir samp_dir
```