const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__burger')

menuBtn.addEventListener('click',function(item){
    menu.classList.toggle('active')
})
