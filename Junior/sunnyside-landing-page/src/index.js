const hamMenuToggle = document.querySelector(".hamburger__menu");

const hamMenu = document.querySelector(".nav__menu");

hamMenuToggle.addEventListener("click", (e) => {
    console.log("clicked");
	if (hamMenu.classList.contains("dropdown")) {
		hamMenu.classList.remove("dropdown");
	}
    else{
        hamMenu.classList.add("dropdown");
    }
});
