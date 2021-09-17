const prices = [8, 12, 16, 24, 36];
const views = ["10k", "50k", "100k", "500k", "1m"];

const pageview = document.querySelector(".views");
const price = document.querySelector(".price b");
const duration = document.querySelector(".price p");
const sliderinput = document.querySelector("#slider");

let index = 2;

let toggled = false;
const toggle = document.querySelector(".custom-toggle-btn");
toggle.addEventListener("mousedown", (e) => {
	toggled = !toggled;
	if (toggled) {
		price.innerHTML = `$${prices[index] * 12 * 0.75}.00`;
		duration.innerHTML = "year";
	} else {
		price.innerHTML = `$${prices[index]}.00`;
		duration.innerHTML = "month";
	}
});

sliderinput.addEventListener("input", (e) => {
	index = parseInt(e.target.value);
	if (toggled) {
		price.innerHTML = `$${prices[index] * 12 * 0.75}.00`;
	} else {
        price.innerHTML = `$${prices[index]}.00`;
    }
    pageview.innerHTML = `${views[index]} pageviews`;
	sliderinput.style.background = `linear-gradient(
        to right,
        #a5f3eb,
        #a5f3eb ${(index / 4) * 100}%,
        #eaeefb ${(index / 4) * 100}%,
        #eaeefb
    )`;
});
