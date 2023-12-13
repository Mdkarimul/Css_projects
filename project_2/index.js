alert();
let icon = document.querySelector('.logo');
let ul = document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("show");
})