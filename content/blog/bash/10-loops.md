---
title: 'Bash Shell Scripting: Loops'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to use while, until, for, range loops with continue and break in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# 1. While loop
num=1
while [ $num -le 10 ]; do
    echo $num
    num=$((num+1))
done

# 2. continue and break
num1=1
while [ $num1 -le 20 ]; do
    # don't print evens
    if (( ((num1 % 2)) == 0 )); then
        num1=$((num1+1))
        continue
    fi

    # jump out of the loop with break
    if ((num1 >= 15)); then
        break
    fi

    echo $num1
    num1=$((num1+1))
done

# 3. Until loops until the loop is true

num2=1
until [ $num2 -gt 10 ]; do
    echo $num2
    num2=$((num2+1))
done

# 4. use read and a loop to output file info
while read avg rbis hrs; do
    # printf allows to use \n
    printf "Avg: ${avg}\nRBIs: ${rbis}\nHRs: ${hrs}\n"

# pipe data into the while loop
done < loop.txt

# 5. For loop

for (( i=0; i <=10; i=i+1 )); do
    echo $i
done

# 6. Cycle through ranges
for i in {1..10}; do
    echo $i
done
for i in {A..Z}; do
    echo $i
done
for i in {b..q}; do
    echo $i
done
```