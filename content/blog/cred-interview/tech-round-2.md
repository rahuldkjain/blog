---
title: "Tech Round 2 at CRED"
date: 2021-07-20 16:21:13
category: "development"
description: "Frontend Developer Role Interview Experience at CRED: Round-2"
draft: false
---

## Intro

I cleared the round 1 and appeared for the round 2. I really liked the flexibility to schedule the interview as per my choice. I need to brush up my Javascript knowledge, so I took a week time before the round 2.

## Experience: Tech Round 2

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

## Results
Cleared the round 2 & scheduled the round 3 for next week.



## Recommendations
- [Javascript Info](https://javascript.info/): To learn and improve javascript fundamentals.
- [Javascript Interview Questions](https://www.toptal.com/javascript/interview-questions)
- [Namaster JavaScript](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&ab_channel=AkshaySaini) by Akshay Saini
