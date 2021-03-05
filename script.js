// $(document).ready( function (){
//     $('menu-toggle, fa-times').on('click', function () {
//         $('nav').toggleClass('active');
//         $('.overlay').toggleClass('menu-open');
//     })

//     $('overlay').on('click', function (){
//         $('nav').removeClass('active');
//         $(this).removeClass('menu-open')
//     })
// })



// const menuBtn = document.querySelector('.fa-bars');
// const closeBtn = document.querySelector('.fa-times');
// const hamburger = document.querySelector('.fa-bars');
// const nav = document.querySelector('.nav-middle');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');

// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu(){
//     if(!showMenu){
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         menuNav.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'));


//         showMenu = true;
//     }else{
//         hamburger.classList.remove('open');
//         nav.classList.remove('open');
//         menuNav.classList.remove('open');
//         navItems.forEach(item => item.classList.remove('open'));


//         showMenu = false;
//     }
// }



const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');

menuBtn.addEventListener('click', function(){
    let head = document.querySelector('header')
    menuBtn.classList.add('activate')
    closeBtn.classList.remove('activate')
    document.getElementById('close').style.opacity = 1
    head.classList.add('header')
    console.log(head)
})

closeBtn.addEventListener('click', function(){
    let head = document.querySelector('header')
    menuBtn.classList.remove('activate')
    closeBtn.classList.add('activate')
    document.getElementById('close').style.opacity = 0
    head.classList.remove('header')
    console.log(head)
})



const sr = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 3000,
    reset: true
});

sr.reveal(`.main, .product-info,
            .featured, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})