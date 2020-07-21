---
title: 'Bash Shell Scripting: case'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to use case when it makes more sense than if in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# Use `case` to when it makes more sense than if

read -p "How old are you? " age

# check the value of age
case $age in

# match numbers 0 - 4
[0-4])
    echo "Too young for school"
    ;; # stop checking further
# match only 5
5)
    echo "Go to kindergarten"
    ;;
# check 6-18
[6-9]|1[0-8])
    grade=$((age-5))
    echo "Go to grade $grade"
    ;;
# default action
*)
    echo "You are too old for school"
    ;;
esac # End case

```