---
title: 'Bash Useful Commands'
date: 2020-07-30 16:21:13
category: 'shell-sripting'
description: ''
draft: false
---

### Grab IP Addresses in logs using regex in grep
I want to grab the IP Address from the following line
`client is accessing /api/register from IP 192.27.82.10 `
```sh
ipPattern="[0-9]\+\.[0-9]\+\.[0-9]\+\.[0-9]\+" # ip address pattern 
grep -o $ipPattern logFile.log
```

### Remove leading whitespaces
I want to remove leading whitespaces from the line
`  20, /api/follow` to `20, /api/follow`
```sh
sed "s/^[ \t]*//" -i file.txt # remove leading whitespaces
```

### Output file in .csv format
```sh
tr -s '[:blank:]' ',' <file.txt >file.csv # output file in csv (count, ip)
```

### Grab string starting and ending with using sed
I want to grab the URL from a string starting with "URL" and ending with "Parameter"
`application client is accessing URL /api/register, Parameters={name: rahul, email: example@gmail.com}`

```sh
# Starting word: "URL"
# Ending word: ", Parameter"
sed 's/.*URL \(.*\), Parameters.*/\1/' file.txt
```

### Grab time in hh:mm format from logs
I want to grab time from the string
`2020-07-30 12:11 AM`
```sh
pattern='(0[0-9]|1[0-2]):[0-6][0-9]' # pattern to detect time (hh:mm)
grep -o $pattern logFile.log
```