---
title: 'Bash Shell Scripting: Strings'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to declare, initialise, access, and slice strings in bash shell scripting. How to get the length of a string in bash?'
draft: false
---
```bash
#!/bin/bash

# Strings and Parameter Expansions( ${} )

rand_str="A random string is a string"

# get string length
echo "string length: ${#rand_str}"

# get string slice starting at index (0 index)
echo "${rand_str:2}"

# get string with starting and ending index (0 index)
echo "${rand_str:2:7}"

# returns whats left after `a`
echo "${rand_str#*a }"
```