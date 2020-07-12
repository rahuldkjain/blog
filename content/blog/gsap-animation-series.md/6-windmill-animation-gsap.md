---
title: 'Windmill animation in 10KB'
date: 2020-07-12 16:21:13
category: 'animations'
description: 'rotating windmill svg animation using gsap.timeline gsap.to gsap.fromTo in 10KB of size'
draft: false
---
The monsoon has started in India and I am from Rajasthan(India) which is the abundant source of renewable energies like `Solar & Wind Energy`. Thought of animation related to wind energy came to my mind because of the ongoing windy season.

So I present to you the 7th post for **#10daysofanimation** series. I am doing this series because of the reason that it enables me to develop interesting animations of small size(~ 10-20KB) to make it feasible for web animations. I followed `gsap` library over `css-animations` by taking inspiration from a course on **frontend masters**. If you want to know about the course, leave a comment. 

## Challenge
Today's challenge is to animate the windmill in such a way that it looks more real and interesting.

## Solution Journey
Let's see the journey to understand the cycle.

#### 1. Wireframing the animation
This step involves drawing the animation ideas(at least 3 ideas) on a piece of paper. The sketches need not be perfect, it is only meant for evolving to a good idea. I came up with 4 ideas that involve elements like windmill, birds, clouds, and wind. Then after a lot of thinking and playing, I locked the idea and decided to go with it.

#### 2. SVG Image with proper `ids` and `classes`
The basic element of the animation is the windmill. I googled `windmill svg` and found nothing cool that suits my idea. So, I designed the SVG(**size ~5KB**) using illustrator. The reason why I manually designed it is the size and the ease of assigning `ids` to the elements.

#### 3. Animate elements using gsap
I divided the animation into three sub animations as
- **RotateBlades**: to rotate the blades of windmill
- **FlowingWind**: show wind to add a natural touch
- **FlyingBirds**: show birds to make it interesting

Then I compiled all the three into one using `gsap.timeline()`.
The animation looks like this

https://codepen.io/rahuldkjain/pen/MWKXNvv

Looks cool right! The best part of developing such animations is the **size**. Anyone can easily add such animations into their website/web-app to enhance the UX(User Experience).

Happy Animating!
