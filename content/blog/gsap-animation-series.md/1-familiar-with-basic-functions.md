---
title: 'Getting familiar with gsap.to() and gsap.fromTo() functions'
date: 2020-07-05 16:21:13
category: 'animations'
description: 'simple gsap animation examples to understand gsap.to() and gsap.fromTo() functions'
draft: false
---
GSAP library comes up with awesome features to create animations with fewer lines of code and great flexibility. Let's cut the crap and start learning with me using simple examples.

## gsap.to() function
If you are familiar with `CSS Keyframes` then it will be a piece of cake for you. It is used to animate the element from current state(in DOM) to the final state(100% keyframe).
 
gsap.to() function takes two arguments.
```js 
gsap.to(targetElement, { changes to be made })
```

Let's say I have a ball element with `id="ball"` and I want to bounce this ball. So the code goes like this
```js
gsap.to('#ball', {
   y: 200,  // to drop the ball i.e transform: translateY(200px)
   duration: 1.5, // duration of the animation
   repeat: -1, // to repeat infinite times
   ease: "bounce.out" // to give the bounce effect,
});
```
I know you are thinking what the heck `ease: bounce.out` is that. Don't panic, it's just an ease function that **gsap** provides to give bouncing effect. Check out other ease visualizers [here](https://greensock.com/ease-visualizer/).

`NOTE` Properties to change things in gsap differs from CSS properties. I recommend you to bookmark gsap-cheatsheat for future purpose.

Let's see the result.

https://codepen.io/rahuldkjain/pen/OJMQxVB


## gsap.fromTo() function
As the name suggests, this function is used to animate the element from `initial state` to `final state`.

gsap.fromTo() takes three arguments.
```js
gsap.fromTo(targetElement, { initialState }, { finalState })
```

Let's say I want to draw user's attention to a specific button using `box-shadow` property like this

https://codepen.io/rahuldkjain/pen/KKVZZyE

In pure CSS, for button with `class="css-button"` I'll do something like this
```css
.css-button {
  animation: inout 1s ease infinite;
}

@keyframes inout {
  0% {
    -webkit-box-shadow: 0 0 0 0px rgba(255,255,255,0.4);
    -moz-box-shadow: 0 0 0 0px rgba(255,255,255,0.4);
    box-shadow: 0 0 0 0px rgba(255,255,255,0.4);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255,255,255,0);
    -moz-box-shadow: 0 0 0 20px rgba(255,255,255,0);
    box-shadow: 0 0 0 20px rgba(255,255,255,0);
  }
}
```

But in gsap, it hardly takes 4-5 lines to do the magic. For a button with `class="gsap-button"` I'll do something like this.
```js
gsap.fromTo(".gsap-button", {
  boxShadow: "0 0 0 0px rgba(130, 195, 3, 0.4)"
}, {
  boxShadow: "0 0 0 20px rgba(130, 195, 3, 0)",
  repeat: -1,
  duration: 1
});
```

That's it! `gsap.to()` and `gsap.fromTo()` lays the foundation to learn the gsap library.

Happy Animating!
