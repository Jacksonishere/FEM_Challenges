const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
const navMenu = nav.querySelector(".nav-menu");

const handleClick = (e) => {
    if(!navMenu.contains(e.target)){
        navClose.click();
    }
}

navOpen.addEventListener("click", (e) => {
    nav.classList.add("show");
    e.stopImmediatePropagation();
    window.addEventListener("click", handleClick);
})

navClose.addEventListener("click", (e) => {
    nav.classList.remove("show");
    e.stopImmediatePropagation();
    window.removeEventListener("click", handleClick);
})
