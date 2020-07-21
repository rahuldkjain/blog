---
title: 'Bash Shell Scripting: Arrays'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to declare, initialise, and access arrays in bash shell scripting'
draft: false
---
```bash
#!/bin/bash

# bash arrays can only have 1 dimesion and indexes start at 0

# create an array
fav_nums=(3.14 2.718 0.57721 4.6692)
echo "PI: ${fav_nums[0]}"

# add value to array
fav_nums[4]=1.618
echo "GR: ${fav_nums[4]}"

# add group of values to array
fav_nums+=(1 7)

# output all array values
for i in ${fav_nums[*]}; do
    echo $i
done

# output indexes
for i in ${!fav_nums[@]}; do
    echo $i
done

# get number of items in array
echo "array length: ${#fav_nums[@]}"

# get length of array element
echo "Index 3 length: ${#fav_nums[3]}"

# sort an array
sorted_nums=($(for i in "${fav_nums[@]}"; do
    echo $i;
done | sort))

for i in ${sorted_nums[*]}; do
    echo $i;
done 
# delete array element
unset 'sorted_nums[1]'

# delete array
unset sorted_nums
```