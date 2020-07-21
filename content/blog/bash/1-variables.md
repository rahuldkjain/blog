---
title: 'Bash Shell Scripting: Variables'
date: 2020-07-21 16:21:13
category: 'shell-scripting'
description: 'learn how to declare, initialise and use variables in bash shell scripting. Understand how to perform mathematical operations in bash shell scripting'
draft: false
---
## Bash Path(Shabang or Hashbang)
**#!/bin/bash** also know as `shabang` or `hashbang`, is the neccessary command to run the bash script. It is basically the path to bash.

```bash
#!/bin/bash
echo "Hello World!"

# Output
# Hello World!
```
Sometimes when the number of commands are large enough, it becomes difficult to understand which command is doing what. So by adding `-x` after `#!/bin/bash`, the commands will be visible along with the result in the output
```bash
#!/bin/bash -x
echo "Hello World!"
# Output
# + echo 'Hello World!'
# Hello World!
```

## Variables
```bash
num1=5 # give no space before and after of '='
num2=6
declare -r MIN=5 # declare constant variable
echo "$num1" # print variable
echo $num1**2 # shell takes everything as string, so it will output: 5**2
echo $((num1+num2)) # $(()) is used for mathematical calculation
echo $((num1**MIN))
echo $((MIN+num1))

# Output
# 5
# 5**2
# 11
# 25
# 10
```

### Shorthand property
```bash
rand=5
let rand+=4
echo $rand

echo "rand++ = $((rand++))"
echo "++rand = $((++rand))"
echo "rand-- = $((rand--))"
echo "--rand = $((--rand))"

# Output
# 9
# rand++ = 9
# ++rand = 11
# rand-- = 11
# --rand = 9
```

```bash
# use python to add floats
num3=1.2
num4=4.3
num5=$(python -c "print($num3 + $num4)")
echo $num5

# Output
# 5.5
```

```bash
# cat prints a file or any string pass to it
cat<< END
This text prints many line
etc lorem ipsum END

# Output
# This text prints many line
# etc lorem ipsum
```


