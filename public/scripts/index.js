const buttonSearch = document.querySelector("main a")
const modal = document.querySelector(".modal")
const close = document.querySelector(".modalHeader a")

buttonSearch.addEventListener("click", ()=>{
  modal.classList.toggle("hide")
})

close.addEventListener("click", ()=>{
  modal.classList.toggle("hide")
})