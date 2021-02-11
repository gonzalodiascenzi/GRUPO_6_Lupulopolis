// VALIDATION LOGIN FORM FRONT-END

window.onload = function () {


    /**
     * LOGIN VALIDATION
    */

    const password = document.querySelector("input.passwordLogin");
    const email = document.querySelector("input.email");
    const passwordError = document.querySelector("small.passwordError");
    const emailError = document.querySelector("small.emailError");


    email.addEventListener('blur', () => {
        if (email.value == '' || !email.value.includes('@')) {
            emailError.classList.remove('invisible');
        } else {
            emailError.classList.add('invisible'); 
        }
    })

    password.addEventListener('blur', () => {
        if (password.value == '') {
            passwordError.classList.remove('invisible');
        } else {
            passwordError.classList.add('invisible'); 
        }
    })

    /**
     * REGISTER VALIDATION
    */
    
    const first_name = document.querySelector('input.first_name');
    const last_name = document.querySelector('input.last_name');
    const image = document.querySelector('input.first_name');
    const retype = document.querySelector('input.first_name');

    const first_name_error = document.querySelector('small.first_name_error');
    const last_name_error = document.querySelector('small.last_name_error');
    const image_error = document.querySelector('small.image_error');
    const retype_error = document.querySelector('small.retype_error');
    
    first_name.addEventListener('blur', () => {
        if (first_name.value == '' || first_name.value.length < 2) {
            first_name_error.classList.remove('invisible');
        } else {
            first_name_error.classList.add('invisible'); 
        }
    })

    last_name.addEventListener('blur', () => {
        if (last_name.value == '' || last_name.value.length < 2) {
            last_name_error.classList.remove('invisible');
        } else {
            last_name_error.classList.add('invisible'); 
        }
    })

    image.addEventListener('blur', () => {
        if (image.value == '' || image.value.includes('@')) {
            image_error.classList.remove('invisible');
        } else {
            image_error.classList.add('invisible'); 
        }
    })

    retype.addEventListener('blur', () => {
        if (retype.value == '' || retype.value.length < 8) {
            retype_error.classList.remove('invisible');
        } else {
            retype_error.classList.add('invisible'); 
        }
    })
        
    /**
     * REGISTER/UPDATE VALIDATION PRODUCT
    */
    
   const product_name = document.querySelector('input.product_name');
   const description = document.querySelector('input.description');
   
   const product_name_error = document.querySelector('small.product_name_error');
   const description_error = document.querySelector('small.description_error');
   
   product_name.addEventListener('blur', () => {
    if (product_name.value == '' || product_name.value.length < 5) {
        product_name_error.classList.remove('invisible');
    } else {
        product_name_error.classList.add('invisible'); 
    }
   })
    
   description.addEventListener('blur', () => {
    if (description.value == '' || description.value.length < 20) {
        description_error.classList.remove('invisible');
    } else {
        description_error.classList.add('invisible'); 
    }
})

}


