function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.getElementById("subscribe-form");
const alert = document.getElementById("alert");
const alertmsg = document.getElementById("alertmsg");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const email = form.elements["email"].value;

    if(!validateEmail(email)){
        alert.style.visibility= "visible";
        alertmsg.style.visibility= "visible";

    }
    else{
        alert.style.visibility= "hidden";
        alertmsg.style.visibility= "hidden";
    }
})

console.log("comprehendos");