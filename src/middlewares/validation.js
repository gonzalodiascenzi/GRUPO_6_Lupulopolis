const userHelper = require('../helpers/userHelper');

module.exports = {
    registerValidation: [
        body('email')
            .notEmpty().withMessage("El campo email esta vacio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom(value => {
                
            })
            
    ]
}