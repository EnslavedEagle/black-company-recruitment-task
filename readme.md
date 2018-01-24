# Black Company - FrontEnd Developer recruitment task

Hi! This is our recruitment task for FrontEnd Developer.

---

Thanks!

## Resolution

I presumed we're using the latest version of Google Chrome with the support of latest ES6/ES7 features, such as rest parameters, arrow functions and other nice stuff. I realize it might not work properly when tested on older browsers.

### A list of things done here:

- Added `Randoms` component that appends a list of random numbers fetched from `GET /random-numbers`
    - it uses `document.createDocumentFragment` which is [significantly faster](https://jsperf.com/appendchild-vs-documentfragment-vs-innerhtml/18) than direct creation & appending
- Refactored `main.js` for easier Component initialization
- Refactored `components/ranking.components.js` to use arrow more of the beautiful ES6 syntax and the `document.createDocumentFragment`