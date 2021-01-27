// VALIDATION LOGIN FORM FRONT-END

window.onload = function () {
    const password = document.querySelector("input.passwordLogin");
    const email = document.querySelector("input.email");
    const passwordError = document.querySelector("small.passwordError");
    const emailError = document.querySelector("small.emailError");


    email.addEventListener('focus', () => {
        email.addEventListener('Keydown', (ev) => {
            if ( !email.value > 0 && email.classList.contains('invisible')) {
                emailError.classList.toggle('invisible');
            } 
        })
              
    });


    email.addEventListener('blur', () => {

        if (!email.value) {
            emailError.classList.toggle('invisible');
        }
    });

    password.addEventListener('focus', () => {

        if (!password.value) {
            passwordError.classList.toggle('invisible');
        }
    });


    password.addEventListener('blur', () => {

        if (!password.value) {
            passwordError.classList.toggle('invisible');
        }
    });
        
    

}


