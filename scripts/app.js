const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("nav__btn--open")
    navMenu.classList.toggle("nav-menu--open")
    
})

