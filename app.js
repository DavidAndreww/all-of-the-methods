import { data } from './data.js'

let methodBtn = document.querySelectorAll('#method-btn')
methodBtn.forEach(button => button.addEventListener('click', ()=>{
  console.log(button.name)
}))


const buttonCreator = function (array){
  array.forEach(item=>{
    let body = document.querySelector('.btn-display-field')
    let btn = document.createElement('button')
    btn.textContent = item.name.split('.')[1];
    body.appendChild(btn)
  })
}

// arrayMethods.forEach(item=>{
//   let body = document.querySelector('.btn-display-field')
//   let btn = document.createElement('button')
//   btn.textContent = item.name.split('.')[1];
//   body.appendChild(btn)
// })

let h2 = document.querySelector('.method-name-h2')


