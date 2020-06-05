import { data } from "./data.js";

// identify each hard coded button from the HTML document
// add event listener to each button that listens for a click
// on listener click, identify that button and retrieve data from corresponding array
// create a unique button for each object in that array of data
// for each button, create another on click event listener
// on click must take a unique button and find corresponding object in the array
// load buttons to the page to be displayed
// clear current list of buttons from screen when new button is clicked

const primarybuttons = document.querySelectorAll("#method-btn");

primarybuttons.forEach((button) => {
  const arrayName = button.name;
  let methodsToLoad = data[arrayName];
  button.addEventListener("click", () => {
    secondaryBtnGenerator(methodsToLoad);
    addEventToSecondaryButtons(methodsToLoad);
  });
});

function secondaryBtnGenerator(list) {
  const array = list;
  // let secondaryButtons = [];
  const displayDiv = document.querySelector(".btn-display-field");
  // adds name, class, and textContent to each button
  array.forEach((method) => {
    const btn = document.createElement("button");
    btn.name = method.name;
    btn.textContent = method.name;
    btn.className = "individual-method-btn";
    displayDiv.appendChild(btn);
  });
}

function addEventToSecondaryButtons(methods) {
  const secondaryButtons = document.querySelectorAll(".individual-method-btn");
  secondaryButtons.forEach((button) => {
    let found = methods.find((method) => method.name === button.name);
    button.addEventListener("click", () => loadToDom(found));
  });
}

function loadToDom(obj) {
  console.log(obj);
  let h2 = document.querySelector('.method-name-h2');
  let p = document.querySelector('.method-description-p');
  let textArea = document.querySelector('.text-area')
  h2.innerHTML = obj.name;
  p.innerHTML = obj.description;
  textArea.innerHTML = `${obj.editor}`;
}

