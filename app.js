import { data } from './data.js'
const mirrorArea = document.querySelector('.text-area')
const editor = CodeMirror.fromTextArea(mirrorArea, {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'duotone-light'
})

const primarybuttons = document.querySelectorAll('.primary-btn')
// let mirror = document.querySelector('.method-code-editor')

// add onClick event listener to each primary button, that calls secondaryBtnGenerator()
primarybuttons.forEach((button) => {
  // identifies methods to load from corresponding button name attribute
  const arrOfSelectedMethods = button.name
  const methodsToLoad = data[arrOfSelectedMethods]
  // declares event listener
  button.addEventListener('click', () => {
    // clears current display of secondary buttons
    const secondaryBtnDisplayDiv = document.querySelector('.btn-display-field')
    secondaryBtnDisplayDiv.innerHTML = ''
    // passes array of selected method objects to secondaryBtnGenerator()
    secondaryBtnGenerator(methodsToLoad)
  })
})

// takes an array of objects as parameter. For each object, creates button with name, class, textContent and event listener
function secondaryBtnGenerator (array) {
  const secondaryBtnDisplayDiv = document.querySelector('.btn-display-field')

  if (array.length > 8) {
    secondaryBtnDisplayDiv.classList.add('more-than-9')
  } else {
    secondaryBtnDisplayDiv.classList.remove('more-than-9')
  }

  if (array.length === 0) {
    const notification = document.createElement('div')
    notification.innerHTML = 'Not Available Yet...'
    notification.className = 'notification-div'
    secondaryBtnDisplayDiv.appendChild(notification)
  } else {
    array.forEach((method) => {
      const btn = document.createElement('button')
      btn.name = method.name
      btn.textContent = method.name.split('.')[1]
      btn.className = 'individual-method-btn'
      btn.addEventListener('click', () => renderMethodToDOM(method))
      secondaryBtnDisplayDiv.appendChild(btn)
    })
  }
}

// takes single object as parameter. Renders appropriate data to the DOM
function renderMethodToDOM (obj) {
  const h2 = document.querySelector('.method-name-h2')
  const p = document.querySelector('.method-description-p')
  const textArea = document.querySelector('.text-area')
  h2.innerHTML = obj.name
  p.innerHTML = obj.description
  editor.setValue(obj.editor) // codemirror method to set value of textarea
}

const codeDisplayField = document.querySelector('#code-execution-field')
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function () {
  const codeToExecute = editor.getValue()
  console.log('code in editor: ', codeToExecute)

  // TODO create functionality to run code within mirror and provide console.log to user
  // let solution = new Function(codeToExecute)
  // console.log(solution())
  // console.log('function to run: ', solution)

  // let result = eval(solution())
  // console.log('result:', result)
  // codeDisplayField.innerHTML = solution()
})
