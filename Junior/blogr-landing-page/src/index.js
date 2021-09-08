const menu_items = document.querySelectorAll(".menu-item");

const toggle_menu = (menu_item) => {
	menu_item.classList.add("enabled");
};
const untoggle_menu = (menu_item) => {
	menu_item.classList.remove("enabled");
};

//mobile
const nav_menu = document.querySelector(".nav-menu");

const ham_btn = document.querySelector(".ham-menu");
const image = ham_btn.querySelector("img");

const mobileToggleMenu = () => {
	image.src = "/images/icon-close.svg";
	nav_menu.style.visibility = "visible";
};
const mobileDisableMenu = () => {
	image.src = "/images/icon-hamburger.svg";
	nav_menu.style.visibility = "hidden";
};

let toggled = false;
let curr_toggled = document.querySelector(".attribution");

ham_btn.addEventListener("click", () => {
	if (toggled) {
		mobileDisableMenu();
		resetToggle();
	} else {
		mobileToggleMenu();
	}
	toggled = !toggled;
});

const resetToggle = () => {
	untoggle_menu(curr_toggled);
    mobileToggleMenu();
	curr_toggled = document.querySelector(".attribution");
};

menu_items.forEach((menu_item) => {
	const button = menu_item.querySelector("button");
	button.addEventListener("click", () => {
		if (curr_toggled === menu_item) {
			resetToggle();
			return;
		}
		untoggle_menu(curr_toggled);
		curr_toggled = menu_item;
		toggle_menu(curr_toggled);
	});
});

//desktop
menu_items.forEach((menu_item) => {
    const button = menu_item.querySelector("button");
	menu_item.addEventListener("mouseenter", () => {
        button.click();
	});
	menu_item.addEventListener("mouseleave", () => {
        button.click();
	});
});
