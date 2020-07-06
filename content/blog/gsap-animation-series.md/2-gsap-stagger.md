---
title: 'using gsap stagger function to make animations more visually interesting'
date: 2020-07-06
category: 'animations'
description: 'gsap stagger tutorial using rolling balls example'
draft: false
---
**gsap stagger** proves out to be an awesome feature when the animation involves multiple elements having same properties or same class to be more precise.

Tweaking a few options can make your animations much more visually interesting. You may be surprised by just how easy it is to create advanced effects with a tiny amount of code. 

Adding a stagger to a multi-target element basically offsets the starting time of each target's animation.

All elements(with the same class i.e targetElement) recognize a stagger property which can be a number, an object, or a function.

Let's understand it better with the help of a simple example.
### Challenge
Rolling balls animation that looks real(i.e following physics laws).

### Solution 
Create balls in svg and assign `class='ball'` to all of them. Align them horizontally with equal distance between them. I'll move the first ball horizontally using `x: 70` and rotate along z axis using `rotateZ: 360` by transforming the origin as `transformOrigin: "50% 50%"`.
As there are 6 balls, I'll set the animation duration to be 3s with stagger delay of 0.5s as `stagger: 0.5`.

```js
gsap.to('.ball', {
    duration: 3,
    x: 70,
    transformOrigin: "50% 50%",
    rotateZ: 360,
    ease: "back.out(1.7)",
    stagger: 0.5,
    repeat: -1,
});
```
It will look like this
https://codepen.io/rahuldkjain/pen/oNbEwNa

Looks real ha! I know the animation is basic, but believe me gsap stagger is really powerful.

Other animations that I made are as follows

https://codepen.io/rahuldkjain/pen/XWXVPoX
https://codepen.io/rahuldkjain/pen/rNxerEa
https://codepen.io/rahuldkjain/pen/QWyaQmy
https://codepen.io/rahuldkjain/pen/mdVpGpq

Happy Animating!