---
title: 'GSAP Cheatsheet'
date: 2020-07-05 16:21:13
category: 'animations'
description: 'cheatsheet for gsap and css. gsap.to, gsap.fromTo, TweenMax, TweenLite, Stagger'
draft: false
---

```js

yoyo:true // close to CSS animation direction: alternate- makes the timeline go back and forth.
repeat:n // iteration count
delay:n // delay of the whole timeline
repeatDelay:n // delay in between iteration

// Transforms in GSAP
// comments show CSS equivalent

x: 100 // transform: translateX(100px)
y: 100 // transform: translateY(100px)
z: 100 // transform: translateZ(100px)
// you do not need the null transform hack or hardware acceleration, it comes baked in with
// force3d:true. If you want to unset this, force3d:false
scale: 2 // transform: scale(2)
scaleX: 2 // transform: scaleX(2)
scaleY: 2 // transform: scaleY(2)
scaleZ: 2 // transform: scaleZ(2)
skew: 15 // transform: skew(15deg)
skewX: 15 // transform: skewX(15deg)
skewY: 15 // transform: skewY(15deg)
rotation: 180 // transform: rotate(180deg)
rotationX: 180 // transform: rotateX(180deg)
rotationY: 180 // transform: rotateY(180deg)
rotationZ: 180 // transform: rotateZ(180deg)
perspective: 1000 // transform: perspective(1000px)
transformOrigin: '50% 50%' // transform-origin: 50% 50%
boxShadow: "0 0 0 0px rgba(130, 195, 3, 0.4)" // giving shadow to the box

```