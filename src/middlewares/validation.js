const bcryptjs = require('bcryptjs');
const { body } = require("express-validator");
const db = require('../database/models');

module.exports = {
    loginValidation: [
        body('email')
            .notEmpty().withMessage("El campo email esta vacio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom( async (emailValue, { req }) => {
                const userFound = await db.User.findOne({ where: { email: emailValue } });

                if (!userFound) {
                    return Promise.reject('El usuario o contraseña no coiciden');
                } 

                if (userFound.email == emailValue && bcryptjs.compareSync(req.body.password, userFound.password)) {
                    return true;
                } else {
                    return Promise.reject('El usuario o contraseña no coiciden')
                }

            })
            
    ],
    registerValidation: [
        body('email')
            .notEmpty().withMessage("El campo email esta vacio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom(async emailValue => {
                const emailExist = await db.User.findOne({ where: { email: emailValue } });

                if (emailExist) {
                    return Promise.reject("El mail ingresado ya se encuentra registrado")
                }

                return true;
            }),
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