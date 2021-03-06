const bcryptjs = require('bcryptjs');
const { body } = require("express-validator");
const db = require('../database/models');
const path = require('path');

module.exports = {
    loginValidation: [
        body('email')
            .notEmpty().withMessage("El campo es obligatorio")
            .bail()
            .isEmail().withMessage("El email ingresado no es valido")
            .bail()
            .custom(async (emailValue, { req }) => {
                const userFound = await db.User.findOne({ where: { email: emailValue } });

                if (!userFound || !bcryptjs.compareSync(req.body.password, userFound.password)) {
                    return Promise.reject('El usuario o contraseña no coiciden');
                }

            }),
        body('password')
            .notEmpty().withMessage("El campo es obligatorio")
            
    ],
    registerValidation: [
        body('first_name')
            .notEmpty().withMessage("El campo nombre es obligatorio")
                .bail()
            .isLength({ min: 2 }).withMessage("Ingrese en el campo nombre un minimo de 2 caracteres"),
        body('last_name')
            .notEmpty().withMessage("El campo apellido es obligatorio")
                .bail()
            .isLength({ min: 2 }).withMessage("Ingrese en el campo apellido un minimo de 2 caracteres"),
        body('image')
            // .notEmpty().withMessage('El campo es obligatorio 3')
            //     .bail()
            .custom((value, { req }) => {
                const validExtends = ['.jpg', '.jpeg', '.png', '.gif'];

                const fileExtend = path.extname(req.file.originalname);

                return validExtends.includes(fileExtend);
            }).withMessage(`La imagen debe contener uno de los formatos permitidos`),
        body('email')
            .notEmpty().withMessage("El campo email es obligatorio")
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
            .notEmpty().withMessage("El campo password es obligatorio")
            .bail()
            .isLength({ min: 8 }).withMessage("Ingrese un minimo de 8 caracteres")
            .bail()
        // .custom((passwordValue, { req }) => {
        // En desarrollo
        //     return passwordValue == req.body.retype && passwordValue.match(/[a-z]/) && passwordValue.match(/[A-Z]/) && passwordValue.match(/\d/g) &&  passwordValue.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)             
        // }).withMessage("El password no contiene los caracteres minimos solicitados.")
        ,
        body('retype')
            .notEmpty().withMessage("Complete el campo repetir password")
    ],
    updateProductValidation: [
        body('product_name')
            .notEmpty().withMessage("El campo es obligatorio")
            .bail()
            .isLength({ min: 5 }).withMessage("El campo debe tener al menos 5 caracteres"),
        body('description')
            .notEmpty().withMessage("El campo es obligatorio")
            .bail()
            .isLength({ min: 20 }).withMessage("El campo debe tener al menos 20 caracteres"),
        // body('image')
        //     .custom((imageFile, { req }) => {
        //         const extendsValid = [".jpg", ".jpeg", ".png", ".gif"];
        //         const fileExtend = path.extname(req.file.filename);

        //         return extendsValid.includes(fileExtend);
        //     }).withMessage(`La imagen debe contener uno de los formatos permitidos`)
    ],
    createProductValidation: [
        body('product_name')
            .notEmpty().withMessage("El campo es obligatorio")
                .bail()
            .isLength({ min: 5 }).withMessage("El campo product_name debe tener al menos 5 caracteres"),
        body('description')
            .notEmpty().withMessage("El campo es obligatorio")
                .bail()
            .isLength({ min: 20 }).withMessage("El campo description debe tener al menos 20 caracteres"),
        body('image')
            .custom(( imageFile, { req } )=> {
                const extendsValid = [".jpg", ".jpeg", ".png", ".gif"];
                const fileExtend = path.extname(req.file.originalname);

                return extendsValid.includes(fileExtend);
            }).withMessage(`La imagen debe contener uno de los formatos permitidos`)
    ]
}