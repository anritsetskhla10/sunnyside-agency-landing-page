


const menu = document.querySelector('.menu-button');
const triangle = document.querySelector('.triangle');
const navLinks = document.querySelector('.nav-links');



function openMenu(){

    if(triangle.classList.contains('triangle')){
        triangle.classList.add('triangle-active');
        triangle.classList.remove('triangle');
    }else{
        triangle.classList.add('triangle');
        triangle.classList.remove('triangle-active');
    }

    if(navLinks.classList.contains('nav-links')){
        navLinks.classList.add('nav-links-active');
        navLinks.classList.remove('nav-links');
    }else{
        navLinks.classList.add('nav-links');
        navLinks.classList.remove('nav-links-active');
    }


}



menu.addEventListener('click', openMenu);
