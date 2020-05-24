import { data } from "./data.js";

let methodBtn = document.querySelectorAll("#method-btn");

methodBtn.forEach((button) =>
  button.addEventListener("click", () => {
    let array = data[button.name];
    methodButtonGenerator(array);
  })
);

function loadMethodToDom(object) {
  console.log(object.description);
  let h2 = document.querySelector(".method-name-h2");
  let p = document.querySelector(".method-description-p");
  h2.innerHTML = object.name;
  p.innerHTML = object.description;
}

function methodButtonGenerator(array) {
  let selectedArray = array;
  array.forEach((item) => {
    let body = document.querySelector(".btn-display-field");
    let btn = document.createElement("button");
    btn.addEventListener("click", () => {
      let arrayName = item.name.split(".")[1];
      let [found] = array.filter(
        (item) => item.name.split(".")[1] === arrayName
      );
      console.log(found);
      loadMethodToDom(found);
    });
    btn.className = item.name.split(".")[1];
    btn.textContent = item.name.split(".")[1];
    body.appendChild(btn);
  });
}
