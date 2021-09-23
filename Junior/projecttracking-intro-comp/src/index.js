const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

const navMenu = document.querySelector(".nav");

navOpen.addEventListener("click", (e) => {
    navMenu.classList.add("show");
    // document.body.style.overflow = "hidden";
})

navClose.addEventListener("click", (e) => {
    navMenu.classList.remove("show");
    // document.body.style.overflow = "visible";
})