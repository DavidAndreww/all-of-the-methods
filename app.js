import { arrayMethods } from './data.js'
let methodBtn = document.querySelectorAll('#method-btn')

arrayMethods.forEach(item=>{
  let body = document.querySelector('.btn-display-field')
  let btn = document.createElement('button')
  btn.textContent = item.name.split('.')[1];
  body.appendChild(btn)
})

let h2 = document.querySelector('.method-name-h2')



methodBtn.forEach(button => button.addEventListener('click', ()=>{
  console.log('clickedMe!: ', button.name)
}))
