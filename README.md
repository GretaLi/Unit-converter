# Scrimba Solo Project - Unit Converter Web App

Hello everyone 👋🏼,

This is my solo project for Unit Converter from [Scrimba](https://scrimba.com/learn/frontend) 's Making Websites Interactive course.

The challenge is to generate all conversions when the user clicks the button.

Check out my code [scrim Unit Converter](https://scrimba.com/scrim/cobb34528acdebba67b54dbdc)

Live: [https://gretali.github.io/Unit-converter](https://gretali.github.io/Unit-converter)

Repo: [https://github.com/GretaLi/Unit-converter](https://github.com/GretaLi/Unit-converter)

## Unit Converter Web App

![](./screenshot.png)

### The challenge

- Generate all conversions when the user clicks the button
- Round the numbers down to three decimal places

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

**{ Convert Function }**

I use multiple arguments when the function is called so that I can keep my code DRI.

Those arguments include “DOM”, “2 unit names” and “unit ratio” and then render the elements at once.

```js
// DOM

const btn = document.querySelector("#btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");
```

```js
// Event Listener & the Convert Function

btn.addEventListener("click", () => {
  let value = inputEl.value;

  convert(lengthEl, "meters", "feet", 3.281);
  convert(volumeEl, "liters", "gallons", 0.264);
  convert(massEl, "kilos", "pounds", 2.204);

  function convert(el, unit1, unit2, ratio) {
    let multiply = value * ratio;
    let divide = value / ratio;

    multiply = multiply.toFixed(3);
    divide = divide.toFixed(3);

    el.innerHTML = `
    ${value} ${unit1} = ${multiply} ${unit2} | 
    ${value} ${unit2} = ${divide} ${unit1}`;

    el.style.animation = "easeIn 0.5s ease";
  }
});
```

**I always get confused about below topics, so I put the comparison together to memorize them.**

- Difference between `.toFixed()` and `Math.floor()`

  - The `.toFixed()` method accepts an argument that indicates how many decimal points should be used. It's important to note that it converts a number to a **string**.

    ```js
    let a = 1.0095;
    console.log(a.toFixed(2)); // 1.01
    console.log(typeof a.toFixed(2)); // string

    let b = 1.0005;
    console.log(b.toFixed(2)); // 1.00
    console.log(typeof b.toFixed(2)); // string
    ```

  - The `Math.floor()` method rounds a number DOWN to the nearest integer.

    ```js
    console.log(Math.floor(1.95)); // 1
    console.log(Math.floor(1.05)); // 1
    console.log(Math.floor(-1.05)); // -2
    ```

- Difference between `Parameter` and `Argument`
  - Parameter - inside the definition.
  - Argument - outside the definitionseconds.
  - Easy way to remember: “Take your argument outside!”

---

This is perhaps the final **solo project** of Module 3, I'm gonna pat myself on the back, great work! 🎉🎉🥳

And of course disturb my cat to celebrate it! 🤗🤗🙀

Next step, I'll jump into **Module 5 - Essential JavaScript concepts** to level up my JavaScript skill.

Thanks for reading my document! ✨

Happy coding, happy life, Cheers! 💫

---

### Resources

- [Scrimba | The Frontend Developer Career Path](https://scrimba.com/learn/frontend/)

- [Dave Leeds on Kotlin | Parameters and Arguments: An Easy Way to Remember the Difference](https://typealias.com/guides/parameters-arguments/)
