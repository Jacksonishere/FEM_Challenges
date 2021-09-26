const nav = document.querySelector(".nav");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", (e) => {
    nav.classList.add("show");
    document.body.style.overflow = "hidden";
})

navClose.addEventListener("click", (e) => {
    nav.classList.remove("show");
    document.body.style.overflow = "visible";
})
