import { data } from "./data.js";
let mirrorArea = document.querySelector('.text-area')
let editor = CodeMirror.fromTextArea(mirrorArea, {
  lineNumbers: true,
  mode: "javascript",
  theme: "duotone-light"
})

const primarybuttons = document.querySelectorAll(".primary-btn");
// let mirror = document.querySelector('.method-code-editor')


// add onClick event listener to each primary button, that calls secondaryBtnGenerator()
primarybuttons.forEach((button) => {
  // identifies methods to load from corresponding button name attribute
  const arrOfSelectedMethods = button.name;
  let methodsToLoad = data[arrOfSelectedMethods];
  // declares event listener
  button.addEventListener("click", () => {
    // clears current display of secondary buttons
    const secondaryBtnDisplayDiv = document.querySelector(".btn-display-field");
    secondaryBtnDisplayDiv.innerHTML = '';
    // passes array of selected method objects to secondaryBtnGenerator()
    secondaryBtnGenerator(methodsToLoad);
  });
});

// takes an array of objects as parameter. For each object, creates button with name, class, textContent and event listener
function secondaryBtnGenerator(array) {
  const arr = array;
  const secondaryBtnDisplayDiv = document.querySelector(".btn-display-field");
  let n = 1
  arr.forEach((method) => {
    const btn = document.createElement("button");
    btn.name = method.name;
    btn.textContent = method.name.split('.')[1];
    btn.className = `individual-method-btn`;
    btn.addEventListener('click',() => renderMethodToDOM(method))
    secondaryBtnDisplayDiv.appendChild(btn);
  });
}

// takes single object as parameter. Renders appropriate data to the DOM
function renderMethodToDOM(obj) {
  let h2 = document.querySelector('.method-name-h2');
  let p = document.querySelector('.method-description-p');
  let textArea = document.querySelector('.text-area');
  h2.innerHTML = obj.name;
  p.innerHTML = obj.description;
  editor.setValue(obj.editor) //codemirror method to set value of textarea
}

const codeDisplayField = document.querySelector('#code-execution-field')
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click',function(){
  let codeToExecute = editor.getValue()
  console.log(codeToExecute)

  //TODO create functionality to run code within mirror and provide console.log to user
  let J = new Function(codeToExecute)
  console.log('J function', J)
  // let console = editor.lineCount()-1;
  // console.log(editor.getLine(console))
  codeDisplayField.innerHTML = J()
    
})
