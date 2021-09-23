const hamOpen = document.querySelector(".nav-open");
const hamClose = document.querySelector(".nav-close");
const navBar = document.querySelector(".nav");

hamOpen.addEventListener("click", (e) => {
    navBar.classList.add("show");
    document.body.style.overflow = "hidden";
})

hamClose.addEventListener("click", (e) => {
    navBar.classList.remove("show");
    document.body.style.overflow = "visible";
})