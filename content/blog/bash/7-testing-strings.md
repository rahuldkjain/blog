---
title: 'Bash Shell Scripting: Strings with Conditionals(if else)'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to use if else with strings in bash shell scripting'
draft: false
---
```bash
#!/bin/bash
str1=""
str2="Sad"
str3="Happy"

# test if string is null
if [ "$str1" ]; then
    echo "$str1 is not null"
fi

if [ -z "$str1" ]; then
    echo "$str1 has no value"
fi

# check for equality

if [ "$str2" == "$str3" ]; then
    echo "$str2 equals $str3"
elif [ "$str2" != "$str3" ]; then
    echo "$str2 is not equal to $str3"
fi

if [ $str2 > $str3 ]; then
    echo "$str2 is greater than $str3"
elif [$str2 < $str3]; then
    echo "$str2 is lesser than $str3"
fi

# check the file test_file1 and test_file2
file1="./test_file1"
file2="./test_file2"

# e: file exists
# f: normal file
# r: readable file
# w: writable file
# x: executable file
# d: file is directory?
# L: file is a symbolic link
# p: file is a named pipe
# S: file is network socket
# G: file is owned by the group
# O: file is owned by the userid

if [ -e $file1 ]; then
    echo "$file1 exists"

    if [ -f $file1 ]; then
        echo "$file1 is a normal file"
    fi

    if [ -r $file1 ]; then
        echo "$file1 is a readable file"
    fi

    if [ -w $file1 ]; then
        echo "$file1 is a writable file"
    fi

    if [ -x $file1 ]; then
        echo "$file1 is a executable file"
    fi

    if [ -d $file1 ]; then
        echo "$file1 is a directory"
    fi

    if [ -L $file1 ]; then
        echo "$file1 is a symbolic link"
    fi

    if [ -p $file1 ]; then
        echo "$file1 is a named pipe"
    fi

    if [ -S $file1 ]; then
        echo "$file1 is a network Socket"
    fi

    if [ -G $file1 ]; then
        echo "$file1 is a owned by the group"
    fi

    if [ -O $file1 ]; then
        echo "$file1 is a owned by the userid"
    fi
fi
```
