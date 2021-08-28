function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");
const emailInput = form.querySelector("#email");
const errorMsg = form.querySelector("#error-msg");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!validateEmail(emailInput.value)) {
		errorMsg.classList.remove("hide");
		errorMsg.classList.add("error-msg");
	} else {
		errorMsg.classList.add("hide");
		errorMsg.classList.remove("error-msg");
	}
});

emailInput.addEventListener("keydown", (e) => {
	errorMsg.classList.add("hide");
	errorMsg.classList.remove("error-msg");
	emailInput.style.color = "white";
});
