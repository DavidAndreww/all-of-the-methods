let methodBtn = document.querySelectorAll('#method-btn')
// console.log(methodBtn)
methodBtn.forEach(button => button.addEventListener('click', ()=>{
  console.log('clickedMe!: ', button.name)
}))
