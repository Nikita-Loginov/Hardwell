const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__burger')

menuBtn.addEventListener('click',function(item){
    menu.classList.toggle('active')
})

const cursorDot = document.querySelector('[data-cursor-dot]')
const cursorOutline = document.querySelector('[data-cursor-otline]')

window.addEventListener('mousemove',function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
    }, {duration: 700,fill:"forwards"} );
})

const loader = document.getElementById('preloader');

window.addEventListener('load',function(e){
    body.style.overflow = 'visible'
    loader.style.display = 'none';
    
})

Fancybox.bind("[data-fancybox]", {
    
});
