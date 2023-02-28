const nav = {
  Продукция: false,
  Конструктор: true,
  Опыт: false,
  Контакты: false,
};

const navInsertHTML = () => {
  document.querySelector(".nav").innerHTML = Object.keys(nav)
    .map(
      (e, i) =>
        `<span class="nav__span nav__span_${i} ${
          nav[e] ? "active" : ""
        }">${e}</span>`
    )
    .join("");
  Array.from(document.getElementsByClassName("nav__span")).forEach((e) =>
    e.addEventListener("click", () => {
      for (const key in nav) {
        nav[key] = false;
      }
      nav[e.innerHTML] = true;
      navInsertHTML();
    })
  );
};
navInsertHTML();
const text = `<div class="black-rectangle-with-buttons">
<div class="black-rectangle-with-buttons__buttons">
  <button
    class="black-rectangle-with-buttons__buttons__button black-rectangle-with-buttons__buttons__button_left"
  ></button>
  <button
    class="black-rectangle-with-buttons__buttons__button black-rectangle-with-buttons__buttons__button_right"
  ></button>
</div></div>`;
document.querySelector(".black-rectangles-with-buttons_top").innerHTML = text;
document.querySelector(".black-rectangles-with-buttons_bottom").innerHTML =
  text.repeat(2);
document.querySelector(".black-rectangles").innerHTML = "<div></div>".repeat(6);

document.getElementById("input").oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #FFCF7A 0%, #FFCF7A " +
    value +
    "%, #646464" +
    value +
    "%,#646464 100%)";
  document.querySelector(".fireplace-length").innerHTML = this.value + " м";
};
let curent = 0;
const indicatorsInsertHTML = () => {
  document.querySelector(".indicators").innerHTML = [0, 1, 2, 3]
    .map((e) => `<div ${e === curent ? `class="active"` : ""}></div>`)
    .join("");
};
indicatorsInsertHTML();
document
  .querySelector(".front-panel__buttons__button_left")
  .addEventListener("click", () => {
    if (curent) {
      curent--;
      indicatorsInsertHTML();
    }
  });
document
  .querySelector(".front-panel__buttons__button_right")
  .addEventListener("click", () => {
    if (curent < 3) {
      curent++;
      indicatorsInsertHTML();
    }
  });

document.querySelector(".additional-functions").innerHTML =
  `<input class="input" type="checkbox" />`.repeat(8);
Array.from(document.getElementsByClassName("input")).forEach((e) =>
  e.addEventListener("change", () => {
    if (e.checked) {
      e.style.background = `url("./images/plus.svg") center/50% no-repeat, #eccf94`;
    } else {
      e.style.background = "none";
    }
  })
);
