let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
// const sr = ScrollReveal({
//     distance:'65px',
//     duration: 2600,
//     delay: 450,
//     reset: true
// });

// sr.reveal('.home-text',{delay:200,origin:top});
// sr.reveal('.home-img',{delay:200,origin:top});