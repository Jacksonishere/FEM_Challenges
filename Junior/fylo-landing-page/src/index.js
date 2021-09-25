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

const form = document.querySelector("form");
const sub = document.querySelector(".sub");

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    if(!validateEmail(formProps.email)){
        sub.classList.add("error");
    }
    else{
        sub.classList.remove("error");
    }

})
