---
title: 'Bash Shell Scripting: Regular Expressions (Regex)'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to use regex(Regular Expressions) in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# with extended test [[ ]] you can use regular expressions

read -p "Validate date: " date
pat="^[0-9]{8}$"

if [[ $date =~ $pat ]]; then
    echo "$date is valid"
else
    echo "$date is invalid"
fi
```