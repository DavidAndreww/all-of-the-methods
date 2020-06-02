import { data } from "./data.js";

let methodLoaderButton = document.querySelectorAll("#method-btn");

// adds event listener 
methodLoaderButton.forEach((button) =>
  button.addEventListener("click", () => {
    let array = data[button.name];
    methodButtonGenerator(array);
  })
);

function loadMethodToDom(object) {
  
  let h2 = document.querySelector(".method-name-h2");
  let p = document.querySelector(".method-description-p");
  let textArea = document.querySelector(".text-area");
  h2.innerHTML = object.name;
  p.innerHTML = object.description;
  textArea.innerHTML = `${object.editor}`;
  
}

function methodButtonGenerator(array) {
  let selectedArray = array;
  array.forEach((item) => {
    let body = document.querySelector(".btn-display-field");
    let btn = document.createElement("button");
    btn.addEventListener("click", () => {
      let arrayName = item.name.split(".")[1];
      let [found] = selectedArray.filter(
        (item) => item.name.split(".")[1] === arrayName
      );
      console.log(found);
      loadMethodToDom(found);
    });
    btn.className = "individual-method-btn";
    btn.textContent = item.name.split(".")[1];
    body.appendChild(btn);
  });
}
