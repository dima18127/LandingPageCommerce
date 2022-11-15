let burger = document.querySelector('.burger')
let menu = document.querySelector('.nav__menu')

burger.addEventListener('click',()=> {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
})
