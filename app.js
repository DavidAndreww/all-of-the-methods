import { arrayMethods } from './data.js'
let methodBtn = document.querySelectorAll('#method-btn')

arrayMethods.forEach(item=>{
  console.log(item)
})

let h2 = document.querySelector('.method-name-h2')



methodBtn.forEach(button => button.addEventListener('click', ()=>{
  console.log('clickedMe!: ', button.name)
}))
