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

// add click event listener to each primary button. Event will generate secondary buttons, as well as add event listeners to those buttons
primarybuttons.forEach((button) => {
  const arrayName = button.name;
  let methodsToLoad = data[arrayName];
  button.addEventListener("click", () => {
    const displayDiv = document.querySelector(".btn-display-field");
    displayDiv.innerHTML = '';
    secondaryBtnGenerator(methodsToLoad);
  });
});

function secondaryBtnGenerator(list) {
  const array = list;
  // let secondaryButtons = [];
  const displayDiv = document.querySelector(".btn-display-field");
  // adds name, class, textContent and eventListener to each button
  array.forEach((method) => {
    const btn = document.createElement("button");
    btn.name = method.name;
    btn.textContent = method.name.split('.')[1];
    btn.className = "individual-method-btn";
    btn.addEventListener('click',() => loadMethodToDOM(method))
    displayDiv.appendChild(btn);
  });
}

function loadMethodToDOM(obj) {
  let h2 = document.querySelector('.method-name-h2');
  let p = document.querySelector('.method-description-p');
  let textArea = document.querySelector('.text-area');
  h2.innerHTML = obj.name;
  p.innerHTML = obj.description;
  textArea.innerHTML = obj.editor;
}

