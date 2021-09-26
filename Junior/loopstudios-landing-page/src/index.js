const nav = document.querySelector(".nav");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", (e) => {
	nav.classList.add("show");
	document.body.style.overflow = "hidden";
});

navClose.addEventListener("click", (e) => {
	nav.classList.remove("show");
	document.body.style.overflow = "visible";
});

const header = document.querySelector("header");
const headerOptions = {
	root: null,
	rootMargin: "-150px 0px 0px 0px",
};

const headerObserver = new IntersectionObserver((entries, headerObserver) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			nav.classList.remove("scrolled");
		} else {
			nav.classList.add("scrolled");
		}
	});
}, headerOptions);

headerObserver.observe(header);
