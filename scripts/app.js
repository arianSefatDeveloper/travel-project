const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
const placeLikeIcon = document.querySelectorAll('.place__like-icon') 
navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("nav__btn--open")
    navMenu.classList.toggle("nav-menu--open")
    
})



// === add to favorite ===
placeLikeIcon.forEach(function(heartIcon) {
  heartIcon.addEventListener('click', function(event) {
    heartIcon.classList.toggle('place__like-icon--fill')

   
  });
});
