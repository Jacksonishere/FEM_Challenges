function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");

function validateInput(input, value) {
	const textInput = form.querySelector(`#${input}`);
	if (value === "") {
        textInput.classList.add("error-effect");
        textInput.querySelector("input").placeholder = "";
	} else {
		textInput.classList.remove("error-effect");
	}
}

function validateEmailInput(value) {
    const emailInput = form.querySelector("#email");
    const errorMsg = emailInput.querySelector(".error-msg");
	if (value === "") {
        emailInput.querySelector("input").placeholder = "";
        errorMsg.textContent = "Please Enter An Email";
        emailInput.classList.add("error-effect");
	}
    else if(!validateEmail(value)){
        errorMsg.textContent = "Looks like this is not an email";
        emailInput.classList.add("error-effect");
    }
    else{
        emailInput.classList.remove("error-effect");
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

const inputs = form.querySelectorAll("input");
console.log(inputs);
inputs.forEach( (element) => {
    element.addEventListener("keypress", () =>{
        element.parentElement.parentElement.classList.remove("error-effect");
        console.log("typing");
    })
})