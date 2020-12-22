const userHelper = require('../helpers/userHelper');
const bcryptjs = require('bcryptjs');
const { body } = require("express-validator");

module.exports = {
    loginValidation: [
        body('email')
            .notEmpty().withMessage("El campo email esta vacio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom( (emailValue, { req }) => {
                const userFound = userHelper.getUsers().find(user => user.email == emailValue);

                if (userFound) {
                    if (userFound.email == emailValue && bcryptjs.compareSync(req.body.password, userFound.password)) {
                        return true;
                    }
                    return false;
                }

                return false;
            }).withMessage("El usuario o contraseña no coiciden")
            
    ],
    registerValidation: [
        body('email')
            .notEmpty().withMessage("El campo email esta vacio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom( emailValue => {
                return !userHelper.getUsers().find(user => user.email == emailValue);
            }).withMessage("El mail ingresado ya se encuentra registrado"),
        body('password')
            .notEmpty().withMessage("El campo password esta vacio")
                .bail()
            .isLength({ min: 6 }).withMessage("Ingrese un minimo de 6 caracteres")
                .bail()    
            .custom((passwordValue, { req }) => passwordValue == req.body.retype),
        body('retype')
            .notEmpty().withMessage("Complete el campo repetir password")
    ]
}