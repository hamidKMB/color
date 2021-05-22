const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#bavbar__logo");
// Display Mobile Menu

const mobileMenu = () => {
     menu.classList.toggle("is-active")
     menuLinks.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu);

//show active menu when scrolling

const highLightMenu = () => {
     const element = document.querySelector(".highlight")
     const homeMenu = document.querySelector("#home-page")
     const aboutMenu = document.querySelector("#about-page")
     const servicesMenu = document.querySelector("#services-page")
     let scrollPosition = window.scrollY;

     //adds "highlight" class to my menu items
     if (window.innerWidth > 960 && scrollPosition < 600) {
          homeMenu.classList.add('highlight');
          aboutMenu.classList.remove("highlight");
          return 
     } else if (window.innerWidth > 960 && scrollPosition < 1400) {
          aboutMenu.classList.add("highlight");
          aboutMenu.classList.remove("highlight");
          servicesMenu.classList.remove("highlight")
          return
     } else if (window.innerWidth > 960 && scrollPosition < 2345) {
          servicesMenu.classList.add("highlight")
          aboutMenu.classList.remove("highlight");
          return
     } 

     if ((element && window.innerWidth<960 && scrollPosition < 600 ) || element ) {
          element.classList.remove('highlight')
     }
}

window.addEventListener("scroll" , highLightMenu);
window.addEventListener("click" , highLightMenu);

//close mobile menu when clicking on menu item
const hideMobileMenu = () => {
     const menuBars = document.querySelector(".is-active")
     if(window.innerWidth <= 760 && menuBars) {
          menu.classList.toggle("is-active");
          menuLinks.classList.remove("active")
     }
}

menuLinks.addEventListener("click" , hideMobileMenu);
navLogo.addEventListener("click" , hideMobileMenu);