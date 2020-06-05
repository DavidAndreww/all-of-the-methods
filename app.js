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
    secondaryBtnGenerator(methodsToLoad)
    addEventToSecondaryButtons()
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
    btn.textContent = method.name
    btn.className = 'individual-method-btn'
    displayDiv.appendChild(btn)
  });

}

function addEventToSecondaryButtons(){
  const secondaryButtons = document.querySelectorAll('.individual-method-btn')
  // console.log(secondaryButtons)
  secondaryButtons.forEach(button => {
    button.addEventListener('click', () => loadToDom(button.name)) 
  })
  
}



function loadToDom(obj){
  console.log(obj)
}

// let h2 = document.querySelector('.method-name-h2');
// let p = document.querySelector('.method-description-p');
// let textArea = document.querySelector('.text-area')



// // adds event listener
// methodLoaderButton.forEach((button) =>
//   button.addEventListener("click", () => {
//     let array = data[button.name];
//     methodButtonGenerator(array);
//   })
// );

// function loadMethodToDom(object) {

//   let h2 = document.querySelector(".method-name-h2");
//   let p = document.querySelector(".method-description-p");
//   let textArea = document.querySelector(".text-area");
//   h2.innerHTML = object.name;
//   p.innerHTML = object.description;
//   textArea.innerHTML = `${object.editor}`;

// }

// function methodButtonGenerator(array) {
//   let selectedArray = array;
//   array.forEach((item) => {
//     let body = document.querySelector(".btn-display-field");
//     let btn = document.createElement("button");
//     btn.addEventListener("click", () => {
//       let arrayName = item.name.split(".")[1];
//       let [found] = selectedArray.filter(
//         (item) => item.name.split(".")[1] === arrayName
//       );
//       console.log(found);
//       loadMethodToDom(found);
//     });
//     btn.className = "individual-method-btn";
//     btn.textContent = item.name.split(".")[1];
//     body.appendChild(btn);
//   });
// }
