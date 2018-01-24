# Black Company - FrontEnd Developer recruitment task

Hi! This is our recruitment task for FrontEnd Developer.

...

## Good luck!

---



### Thanks!

## My resolution

I presumed we're using the latest version of Google Chrome with the support of latest ES6/ES7 features, such as rest parameters, arrow functions and other nice stuff. I realize it might not work properly when tested on older browsers.

I left the prototypal inheritance definitions as they were.

### A list of things done here:

- Added `Randoms` component that appends a list of random numbers fetched from `GET /random-numbers`
    - it uses `document.createDocumentFragment` which is [significantly faster](https://jsperf.com/appendchild-vs-documentfragment-vs-innerhtml/18) than direct creation and appending
- Refactored `main.js` for easier Component initialization
- Refactored `components/ranking.components.js` to use the beautiful ES6 syntax, and updated the `render()` method with the `document.createDocumentFragment` technique
- Added a parameter to `Randoms` constructor allowing it to communicate with `Ranking` component (dependency injection techique)
- Added `times` property to numbers list in `Ranking` component
- Added `newNumbers` method to `Ranking` prototype, allowing it to retrieve new numbers from outside (like `Randoms` instance). It:
    - checks up which numbers have been shown and how many times,
    - increments the `times` property accordingly,
    - sorts the numbers list using the `times` property
    - at the end, calls the `render()` method.