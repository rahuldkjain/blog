---
title: "Let's animate minion using gsap timeline"
date: 2020-07-07 16:21:13
category: 'animations'
description: 'minion transformers animation using gsap timeline to make it more visually interesting'
draft: false
---
This is the fourth post of `10 Days of Animation` and I am loving it. Today, I'll walk you through **timeline** functionality of gsap. 
As the name suggests, `timeline` feature lets you animate in sequence. The flexibility gsap provide makes it even more awesome. 

I used timeline to animate minion like this.

https://codepen.io/rahuldkjain/pen/qBboxqR

Cool right!
If you are curious to know how to do such stuff, please read the whole article.

If you look carefully, you'll understand that the animation combines of multiple animations one after the other. Let me make this simple for you. The animations used in sequence to make the animation visually interesting are:
```
displayBody()
bringGoggles()
displayGoggleShadow()
displayDungaree()
displayEyes()
moveEyes()
displayHand()
jump()
displayLegs()
displayShadow()
displayMouth()
displayHair()
blinkEyes()
```

The best part is that you can animate these sub-animations individually and then combine it using timeline.

The syntax look like this
```js
var master = new gsap.timeline({repeat: -1, repeatDelay: 0.3})
```

To manage the timings, labels or checkpoints are used. See how I used it.
```js
master.add('checkpoint-1')
master.add(displayBody(), 'checkpoint-1')
master.add(goggle(), 'checkpoint-1+=0.2')
master.add('checkpoint-2')
master.add(displayGoggleShadow(), 'checkpoint-2-=0.3');
master.add(displayDungaree()).add(displayEyes()).add(moveEyes(-10)).add(displayHand('.left-hand'));
master.add(moveEyes(10)).add(displayHand('.right-hand')).add(moveEyes(0))
master.add('checkpoint-3')
master.add(jump()).add(displayLegs()).add(displayShadow(), 'checkpoint-3');
master.add(displayMouth(), 'checkpoint-3+=0.8').add(displayHair(), 'checkpoint-3+=0.8');
master.add(blinkEyes())
```

This looks simple, I am telling you this sole feature takes the animation to a next level.
I am coming with more crazy animations in the coming days. 
Stay tuned.

Happy Animating!