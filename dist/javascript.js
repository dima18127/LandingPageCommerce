let burger = document.querySelector('.burger')
let menu = document.querySelector('.nav__menu')

burger.addEventListener('click',()=> {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
})

let popup = document.querySelector('.popup');
    buttons =  document.querySelectorAll('.trigger')
    closer = document.querySelector('.popup__wrapper-close');
    popupWrapper = document.querySelector('.popup__wrapper');

    buttons.forEach(item => {
        item.addEventListener('click',()=>{
            popup.classList.toggle('active')
        })
    });
closer.addEventListener("click", ()=> {
    popup.classList.toggle('active')
})
console.log(closer);
popup.addEventListener('click',(event) => {
    if (event.target.classList.value === "popup__overlay") {
        console.log(event.target.classList.value );
        popup.classList.toggle('active')
    }
})