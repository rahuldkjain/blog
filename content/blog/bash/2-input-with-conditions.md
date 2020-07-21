---
title: 'Bash Shell Scripting: Input and Conditionals(if else)'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to take user input with prompts and use of conditional statements(if else) in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# take user input using read
# -p is used to prompt with string
read -p "What is your name: " name # space after string is neccessary
echo "Hello $name"

read -p "How old are you: " age

# place your conditions within []
# include a space after [ and before ]
# Integer comparisons: eq, ne, lt, gt, le, ge
if [ $age -ge 16 ]
then
    echo "You can drive"

# check another condition
elif [ $age -eq 15 ]
then 
    echo "You can drive next year"

# executed by default
else
    echo "You can't drive"

# closes the if statement
fi

# read multiple values
read -p "Enter 2 numbers to sum: " num1 num2
sum=$((num1+num2))
echo "$num1 + $num2 = $sum"

# hide the input with s code (password)

read -sp "Enter the secret code: " secret
if [ "$secret" == "password" ]; then
    echo "Enter"
else
    echo "Wrong password"
fi


#!/bin/bash

can_vote=0
age=17

((age>=18?(can_vote=1):(can_vote=0)))
echo "Can Vote: $can_vote"
```