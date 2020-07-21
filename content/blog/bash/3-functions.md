---
title: 'Bash Shell Scripting: Functions'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to declare and use functions in bash shell scripting. How to pass parameters/attributes in function and how to access them?'
draft: false
---
```bash
#!/bin/bash

getDate() {
    date # get current date and time
    # returns an exit status number between 0-255
    return
}
getDate

#global variable
name="Rahul"

#local values aren't available outside of the function
demLocal() {
    local name="Titu"
    return
}
demLocal

echo $name

# a function that receives 2 values and returns a sum
getSum() {
    # attributes are retrieved by referring $1, $2 ..etc
    local num3=$1 
    local num4=$2

    local sum=$((num3+num4))

    #pass values back with echo
    echo $sum
}

num1=4
num2=9

# pass attributes by seperating them with a space
# surround function call with $() to get the return value
sum=$(getSum num1 num2)
echo "the sum is $sum"
```