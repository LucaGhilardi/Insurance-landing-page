let navbar = document.querySelector(".navbar");
let ham = document.querySelector(".ham");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")

}

let menuLinks = document.querySelectorAll(".menuLink");



menuLinks.forEach(
function (menuLink) {
    menuLink.addEventListener("click",toggleHamburger)
});

