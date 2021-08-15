---
title: "Interview Experience at CRED"
date: 2021-07-20 16:21:13
category: "development"
description: "Frontend Developer Role Interview Experience at CRED: Round-1"
draft: false
---

## Intro
[CRED](https://cred.club/) is an Indian  unicorn fintech startup that give rewards for paying credit card bills. But it's more of a lifestyle brand than being a fintech product. The credit-score threshold to become a CRED member is around 750, which means it filters out the customers with low credit score. It's a smart way to provide value experience to the customers. CRED has not became a profit making company yet and still investing more in marketing to gain a large user base, I see an amazing opportunity to grow my skills by contributing in their vision.

## How I landed the interview?
I created my profile on [Instahyre](https://www.instahyre.com/) and updated all the neccessary details to stand out from the crowd. In just 2 days, I received a call from an HR at CRED about a frontend developer role & I decided to give it a try.

## Interview Process
CRED conduct 3-4 interview rounds. 
Tech Round 1: 90 minutes
Tech Round 2: 90 minutes
Tech Round 3: 90 minutes
Cultural Fit Round: 60 minutes
Salary Discussion: 30 minutes

## Experience: Tech Round 1
I met an amazing developer at CRED during the interview. It started with a basic introduction & then we started talking about Work From Home, Coronavirus, & Monsoon, etc. Interviewer told me about the working culture, his journey till now and the ongoing projects in web-team at CRED. Then he asked me introduce myself with what I do, what I like and all. So I opened my [bio](https://about.rahuldkjain.vercel.app/) and shared the screen to give him a better picture of myself. I told him about my work at zolo, freelancing, animation, and open-source projects. We discussed about business models of CRED and Zolo. He asked me about why I want to switch and all. Then he gave me a moderate javascript problem. I read the problem, repeated what I understood so that we can be on the same page. I prepared the process in my mind and explained him with psuedo codes. Then I started live coding the problem. He gave me hints to make the code working and optimised. I completed the problem. Then we talked about why he joined CRED and how he made the decision to join CRED etc. It was an amazing experience overall. I met a nice developer. 

## Problem
```js
// applySpec(): Given a specification object that
// recursively maps properties to functions,
// applySpec takes in this specification object and
// returns a function that when called with some arguments
// produces an object of the same structure.

// For Eg:

const getMetrics = applySpec({
  sum: (a, b) => a + b, // sum is called with (2, 4)
  nested: {
    mul: (a, b) => a * b, // mul is called with (2, 4)
  },
  sub: (a, b) => a - b,
});

console.log(getMetrics(2, 4)); // => { sum: 6, nested: { mul: 8 } }
```

## Solution

```js
const getMetrics = applySpec({
  sum: (a, b) => a + b, // sum is called with (2, 4)
  nested: {
    mul: (a, b) => a * b, // mul is called with (2, 4)
  },
  sub: (a, b) => a - b,
});

function process(specObj, args) {
  let newObj = {};
  let keys = Object.keys(specObj);
  keys.forEach((key) => {
    if (typeof specObj[key] === "function") {
      newObj[key] = specObj[key](...args);
    } else if (typeof specObj[key] === "object") {
      let newSpecObj = specObj[key];
      newObj[key] = process(newSpecObj, args);
    }
  });
  return newObj;
}

function applySpec(specObj) {
  return function (...args) {
    console.log("HOC=>", args);
    return process(specObj, args);
  };
}
```

## Results
Cleared the round 1 & scheduled the round 2 for next week.

## Recommendations
- [Javascript Info](https://javascript.info/): To learn and improve javascript fundamentals.
- [CRED Experience Web App](https://experience.cred.club/start)
- [Namaster JavaScript](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&ab_channel=AkshaySaini) by Akshay Saini
