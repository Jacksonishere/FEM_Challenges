function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");

function validateInput(input, value) {
	const errorIcon = form.querySelector(`#${input} .input .error`);
	const errorMsg = form.querySelector(`#${input} .error-msg`);

	console.log(errorIcon);

	if (value === "") {
		console.log("empty");
		errorIcon.style.visibility = "visible";
		errorMsg.style.visibility = "visible";
	} else {
		errorIcon.style.visibility = "hidden";
		errorMsg.style.visibility = "hidden";
	}
}

function validateEmailInput(value) {
    const errorIcon = form.querySelector(`#email .input .error`);
    const errorMsg = form.querySelector(`#email .error-msg`);
	if (value === "") {
        errorIcon.style.visibility = "visible";
		errorMsg.style.visibility = "visible";
	}
    else if(!validateEmail(value)){
        errorMsg.textContent = "Looks like this is not an email";
        errorIcon.style.visibility = "visible";
		errorMsg.style.visibility = "visible";
    }
    else{
        errorIcon.style.visibility = "hidden";
        errorMsg.style.visibility = "hidden";
    }
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const firstName = form.elements["firstName"].value;
	const lastName = form.elements["lastName"].value;
	const email = form.elements["email"].value;
	const password = form.elements["password"].value;

	validateInput("firstName", firstName);
	validateInput("lastName", lastName);
	validateEmailInput(email);
	validateInput("password", password);
});
