const form = document.querySelector(".contactform");
const nameInput = document.querySelector("#name");
const nameInputError = document.querySelector("#nameError");
const emailInput = document.querySelector("#email");
const emailInputError = document.querySelector("#emailError");
const titleInput = document.querySelector("#title");
const titleInputError = document.querySelector("#titleError");
const msgInput = document.querySelector("#message");
const msgInputError = document.querySelector("#messageError");

const messageContainer = document.querySelector("#messageSubmit");

function validateForm(event) {
    event.preventDefault();

    let submitForm = true;

    if (checkLenght(nameInput.value, 5) === true) {
        nameInputError.style.display = "none";
    } else {
        nameInputError.style.display = "block";
        submitForm = false;
    }


    if (checkLenght(emailInput.value, 0) === true) {
        emailInputError.style.display = "none";
    } else {
        emailInputError.style.display = "block";
        submitForm = false;
    }


    if (checkLenght(titleInput.value, 15) === true) {
        titleInputError.style.display = "none";
    } else {
        titleInputError.style.display = "block";
        submitForm = false;
    }


    if (checkLenght(msgInput.value, 25) === true) {
        msgInputError.style.display = "none";
    } else {
        msgInputError.style.display = "block";
        submitForm = false;
    }

    if (submitForm) {
        handleFormSubmit();
    }

}

form.addEventListener("submit", validateForm);



// function to run when the form is submittet
function handleFormSubmit() {
    messageSubmit.innerHTML = '<div class="messageSubmitted">Thank you for your message!</div>';
    form.reset();
}




//check the length of the input is valid
function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

/* hamburger menu */

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
}

);


/* Back button */

function backButton(){
    onclick
    window.history.back()
}

backButton(back);


