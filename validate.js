let loginForm = () => {
    const name = document.getElementById("name");

    const email = document.getElementById("email");

    const message = document.getElementById("message");

    const button = document.getElementById("cta-2");

    if(name.value.trim() ==="" || email.value.trim() ==="" && message.value.trim() ==="") {

        name.placeholder = "Please enter your name";

        email.placeholder = "Please enter your email";

        name.style.border = "2px solid red";

        email.style.border = "2px solid red";

        message.placeholder = "Say something here";

        name.addEventListener("click", e => {

            name.style.border = "2px solid transparent";

        });

        return false

    } else {

        true

    }
}