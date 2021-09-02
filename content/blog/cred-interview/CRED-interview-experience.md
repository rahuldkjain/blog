---
title: "CRED Interview Experience"
date: 2021-07-20 16:21:13
category: "development"
description: "Frontend Developer Role Interview Experience at CRED"
draft: false
---

## Intro
[CRED](https://cred.club/) is an Indian  unicorn fintech startup that give rewards for paying credit card bills. But it's more of a lifestyle brand than being a fintech product. The credit-score threshold to become a CRED member is around 750, which means it filters out the customers with low credit score. It's a smart way to provide value experience to the customers. CRED has not became a profit making company yet and still investing more in marketing to gain a large user base, I see an amazing opportunity to grow my skills by contributing in their vision.

## How I landed the interview?
I created my profile on [Instahyre](https://www.instahyre.com/) and updated all the neccessary details to stand out from the crowd. In just 2 days, I received a call from an HR at CRED about a frontend developer role & I decided to give it a try.

## Interview Process
CRED conduct 3-5 interview rounds.

- Tech Round 1: 90 minutes
- Tech Round 2: 90 minutes
- Tech Round 3: 90 minutes
- Cultural Fit Round: 60 minutes
- Salary Discussion: 30 minutes


# Tech Round 1

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

## Result
Cleared the round 1 & scheduled the round 2 for next week.



# Tech Round 2

I cleared the round 1 and appeared for the round 2. I really liked the flexibility to schedule the interview as per my choice. I need to brush up my Javascript knowledge, so I took a week time before the round 2.

I again met an amazing developer at CRED during the interview. It started with a basic introduction & then he started talking about work and projects at CRED. Interviewer asked me about my expectation in terms of work. Then he asked me introduce myself with what I do, what I like and all. So I opened my [bio](https://about.rahuldkjain.vercel.app/) and shared the screen to give him a better picture of myself. I told him about my work at zolo, freelancing, animation, and open-source projects. He asked me about why I want to switch and all. Then he gave me a moderate machine coding problem. The task to develop a search box that gives suggestions on input. He gave me the API to fetch the suggestions. I asked him about the functionalities like debouncing, events and all to properly understand the requirements. He told me to develop it in vanilla javascript. When I completed the code,
he started asking me the following questions:

- Approach to attach the click event listeners on the suggestions? Event bubbling, event delegation? (✅)
- Difference between `defer`, `async` scripts, their pros and cons. (✅)
- Modular scripts, scopes, IIFE. (✅)
- Loading of CSS files is synchronous or asynchronous? Does it blocks the HTML parsing? (❌)
- Why react? How react works under the hood? (❌)
- What is virtualDOM? Its advantage? (❌)
- Why Nextjs? Dynamic routes in file based routing? Advantages of Nextjs over React? Can we switch to client side rendering or pre-rendering in Nextjs? (❌)
- React states, Layout, Scalability. (✅)

## Machine Coding Solution

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
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
    <script defer>
      console.log("hi")
      console.log(searchField)
    </script>
    <title>Practice JS</title>
  </head>
  <body>
    <div class="search-container">
      <div id="search-input-container">
        <input
          type="text"
          placeholder="Enter Country"
          id="search-input"
          name="search"
        />
        <ul id="suggestions"></ul>
      </div>
      <button id="search-btn">Search</button>
    </div>
  </body>
</html>
```

```css
/* style.css */
* {
  box-sizing: border-box;
}
body {
  font-family: "Poppins";
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

#search-input {
  width: 300px;
  height: 48px;
  padding: 8px;
  position: relative;
}
#search-btn {
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  height: 50px;
  cursor: pointer;
}

#suggestions {
  height: 210px;
  width: 300px;
  background: #efefef;
  display: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  position: absolute;
}

li {
  list-style-type: none;
}
.suggestion {
  height: 40px;
  padding: 10px;
  cursor: pointer;
  color: black;
}
.suggestion:hover {
  background-color: aliceblue;
}
```

```js
// script.js
var searchField = document.getElementById("search-input");
let suggestionsContainer = document.getElementById("suggestions");

(() => {})();
searchField.addEventListener("input", (e) => {
  let keyword = e.target.value;
  if (keyword) {
    fetchResults(keyword);
  } else {
    removeOldSuggestions();
    suggestionsContainer.style.display = "none";
  }
});

const fetchResults = async (keyword) => {
  const data = await fetch(
    `https://restcountries.eu/rest/v2/name/${keyword}?fields=name`
  );
  const json = await data.json();
  populateSuggestions(json.slice(0, 5));
};

const populateSuggestions = (list) => {
  if (list) {
    // remove the old suggestions
    removeOldSuggestions();
    // append new suggestions
    list.forEach((country) => {
      let elem = document.createElement("li");
      elem.setAttribute("class", "suggestion");
      elem.innerHTML = country.name;
      suggestionsContainer.append(elem);
    });
  }
  suggestionsContainer.style.display = "block";
};

const removeOldSuggestions = () => {
  // remove the old suggestions
  while (suggestionsContainer.lastElementChild) {
    suggestionsContainer.removeChild(suggestionsContainer.lastElementChild);
  }
};
```

## Result
Cleared the round 2 & scheduled the round 3 for next week.


# Tech Round 3

I cleared the round 1, 2 and appeared for the round 3. I really liked the flexibility to schedule the interview as per my choice. I need to brush up my Javascript & React knowledge, so I took a week time before the round 3.

I again met an amazing developer at CRED during the interview. It started with a basic introduction & then he started talking about work and projects at CRED. Interviewer asked me about my expectation in terms of work. Then he asked me introduce myself with what I do, what I like and all. So I opened my [bio](https://about.rahuldkjain.vercel.app/) and shared the screen to give him a better picture of myself. I told him about my work at zolo, freelancing, animation, and open-source projects. He asked me about why I want to switch and all.

Then the actual interview started with a basic machine coding problem in React. The task was to develop a form based web application with input fields like PAN Number, & Aadhar Number etc. He wanted to test React skills on how I maintain the the states of the input fields. Then he started questioning about optimization aspect of the web-app when there are 10+ input fields.

When I completed the code, he started asking me the following questions:

- Is it good to attach a state to every input field and modify it onChange, when there are 10+ input fields. Answer it in terms of scalability? (✅)
- How to handle forms without states in React? (✅)
- Event Delegation? (✅)
- How to make decision on which framework to use (Gatsby, Next or CRA)(❌)


## Result
Cleared the round 3 & scheduled the cultural fit round.



# Cultural Fit Round

I cleared the round 1, 2, 3 and appeared for the cultural fit round. I really liked the flexibility to schedule the interview as per my choice.

Tech Leat at CRED took this round. The interview started with the basic introduction and then started briefing me about the feedback in all 3 tech rounds. He told me that I need to grow my Javascript skills, which totally made sense to me. Then he started questioning me about:


- How do you grow your skills on daily basis?
- Why do you want to join CRED?
- Do you believe in work-life balance?
- Are you baised towards certain work or open to work with any tech skill?
- What are the things that you hate about CRED?


## Result
Cleared the round and got the offer letter after the salary discussion round.



# Resources
- [Javascript Info](https://javascript.info/): To learn and improve javascript fundamentals.
- [CRED Experience Web App](https://experience.cred.club/start)
- [Namaster JavaScript](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&ab_channel=AkshaySaini) by Akshay Saini
- [Javascript Interview Questions](https://www.toptal.com/javascript/interview-questions)
- [React Interview Questions](https://www.interviewbit.com/react-interview-questions/)
