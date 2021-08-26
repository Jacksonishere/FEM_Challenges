function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");
const emailInput = form.elements["email"];

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("submitted");

    const email = emailInput.value;
    if(!validateEmail(email)){
        form.classList.add("invalid");
    }
    else{
        form.classList.remove("invalid");
    }
})

emailInput.addEventListener("keydown", (e) =>{
    form.classList.remove("invalid");
})
