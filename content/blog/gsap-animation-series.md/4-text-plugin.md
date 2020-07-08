---
title: 'Typing text animation using gsap TextPlugin'
date: 2020-07-08 16:21:13
category: 'animations'
description: 'terminal typing text animation using gsap.to() gsap.set() gsap.timeline() and TextPlugin'
draft: false
---

The cool thing about gsap is that you can create animations as small as ~20kb. Yes you read it right. You can create and embed your animations to your website which is less than size of an image. SVG Animations using gsap make this possible.

I am a huge fan of text animations, but didn't developed any because of the fear of dealing with CSS keyframes. But now I can proudly animation such animations within 10-15 minutes.

Today, I'll be talking about TextPlugin of gsap to create typing effect. 

Challenge
Create an animation showing typing commands in the terminal

Solution
TextPlugin came to rescue to make the life easy. You can easily manipulate the text with typing effect in **1 line of code**. Sounds great right.

See what I came up with

https://codepen.io/rahuldkjain/pen/dyGeGWb default-tab=result

If you feel to create your own, follow the instructions

### Installation
GSAP do not provide this functionality in its core code. So you need to register this plugin by importing it.
```js
// using cdn
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/TextPlugin.min.js"></script>
```
Then register the plugin
```js
// only if you are using webpack
import gsap from 'gsap';
import TextPlugin from 'TextPlugin';

// Registering the plugin in gsap
gsap.registerPlugin(TextPlugin);
```
Now you're good to go.

### Syntax
```js
//replaces yourElement's text with "This is the new text" over the course of 2 seconds
gsap.to(yourElement, 2, {text:"This is the new text", ease:Linear.easeNone});
```
```js
//replaces word-by-word because the delimiter is " " (a space)
gsap.to(yourElement, 2, {text:{value:"This is the new text", delimiter:" "}, ease:Linear.easeNone});
```

To know more about this plugin, please refer the official documentation(link in the comment section).

### How I made the above animation

I saved the texts like this
```js
const TEXT_2 = 'cd ~/Documents/Projects/portfolio'
const TEXT_3 = 'Macbook-Pro:~  Documents/Projects/portfolio$ '
const TEXT_4 = 'npm run dev'
const TEXT_5 = 'building project'
const TEXT_6 = 'project running on http://localhost:8080/'
```
Then I developed sub-animations to be used in timeline as
```js
const displayText_2 = () => {
    return gsap.to('#text-2', {
        duration: 2.2,
        text: TEXT_2,
        ease: 'none'
    });
}
```
For each and every text lines, I developed such sub-animations.

Now it's time to complete the animation with the help of labels using timeline
```js
var master = new gsap.timeline({repeat: -1, repeatDelay: 1});
master.add('start');
master.add(initial(), 'start-=0.2')
master.add(displayText_2(), 'start+=1');
master.add('text-2');
master.add(displayText_3(), 'text-2+=0.5');
master.add('text-3')
master.add(displayText_4(), 'text-3+=0.3');
master.add('text-4');
master.add(displayText_5(), 'text-4+=0.5');
master.add('text-5');
master.add(changePercentage('1%'), 'text-5+=0.05');
master.add(changePercentage('27%'));
master.add('p')
master.add(changePercentage('49%', 'p+=1.5'));
master.add(changePercentage('76%'));
master.add(changePercentage('100%'));
master.add('percentage');
master.add(displayPreText_6(), 'percentage+=0.5');
master.add(displayText_6());
```

I hope you liked it. Many more cool animations to come. Stay Tuned.

Happy Animating!
