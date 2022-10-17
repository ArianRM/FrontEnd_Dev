let btnMobile = document.getElementById("mobile-menu");
let mobileNav = document.getElementById("links");

btnMobile.addEventListener("click",()=>{
    mobileNav.classList.toggle("links-navbar_visible");
});
