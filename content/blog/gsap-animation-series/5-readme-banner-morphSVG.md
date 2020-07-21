---
title: 'Animated banner to be used in repository readme'
date: 2020-07-09 16:21:13
category: 'animations'
description: 'animated banner gif using MorphSVGPlugin and TextPlugin of gsap to make repository readme more interesting'
draft: false
---
In the last blog, I talked about free TextPlugin of gsap. There is another plugin as `MorphSVG` of gsap available only to Greensock club members. I saw its usecases and fell in love with it.

## Challenge
Develop an animated gif banner for [portfolio](https://github.com/rahuldkjain/minimal-portfolio) readme.

## Solution
I really want to use `MorphSVG` for this. Greensock made this possible as its premium plugins are accessible on codepen. 
So, I thought of a plan that, I will develop the animation in codepen, then record it to convert into gif.

So I came up with this.

https://codepen.io/rahuldkjain/pen/BajxYQr
Please look into the code to understand how I did it.


Let's see how to use the `MorphSVG` Plugin.
### Installation
Follow this [link](https://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76) to get the cdn link to be used in codepen. Copy the cdn link.
```js
// otherwise include the cdn link 
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js"></script>
```
or you can import it if you are using npm module.
```js
// use this only when you are using webpack
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
```

then register the Plugin as
```js
gsap.registerPlugin(MorphSVGPlugin);
```

Now you are ready to use the plugin.

`MorphSVGPlugin` morphs SVG paths by animating the data inside the **d** attribute.

Remember that it only works with `path` data values, so you need to convert the primitive shapes to path. There’s a utility function, `MorphSVGPlugin.convertToPath()`, that can convert primitive shapes like `<circle>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`, and `<line>` directly into the equivalent `<path>` that looks identical to the original and is swapped right into the DOM.

Now follow the [official documentation](https://greensock.com/docs/v3/Plugins/MorphSVGPlugin) to understand how to use it in a better way.

After developing the animation, record the animation. I would recommend [Screen Recorder](https://chrome.google.com/webstore/detail/screen-recorder/dhopldobnfjeckokfjimfcdagmlhjdce?hl=en) chrome extension to record the animation.
Then you can convert the video using [EZGif](https://ezgif.com/video-to-gif) converter to convert it in gif.

I hope you liked this one. More cool animations to come soon, stay tuned!

Happy Animating!
