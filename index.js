const btn = document.querySelector("#btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

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

    el.innerHTML = `${value} ${unit1} = ${multiply} ${unit2} | 
    ${value} ${unit2} = ${divide} ${unit1}`;
    el.style.animation = "easeIn 0.5s ease";
  }
});
