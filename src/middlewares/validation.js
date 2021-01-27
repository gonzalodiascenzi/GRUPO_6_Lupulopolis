const bcryptjs = require('bcryptjs');
const { body } = require("express-validator");
const db = require('../database/models');

module.exports = {
    loginValidation: [
        body('email')
            .notEmpty().withMessage("El campo es obligatorio")
                .bail()
            .isEmail().withMessage("El email ingresado no es valido")
                .bail()
            .custom( async (emailValue, { req }) => {
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
            .notEmpty().withMessage("El campo obligatorio")
                .bail()
            .isLength({ min : 2 }),
        body('last_name')
            .notEmpty().withMessage("El campo obligatorio")
                .bail()
            .isLength({ min: 2 }),
        body('image')
            .notEmpty().withMessage('El campo es obligatorio')
                .bail()
            .custom((value, { req }) => {
                const validExtends = ['.jpg', '.jpeg', '.png', '.gif'];
                const fileExtend = path.extname(req.files[0].originalame);

                return validExtends.includes(fileExtend);
            }), 
        body('email')
            .notEmpty().withMessage("El campo obligatorio")
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
            .notEmpty().withMessage("El campo obligatorio")
            .bail()
            .isLength({ min: 8 }).withMessage("Ingrese un minimo de 8 caracteres")
            .bail()
            .custom((passwordValue, { req }) => {

                return passwordValue == req.body.retype && (/[a-z]/.test(passwordValue)) && (/[A-Z]/.test(passwordValue)) && (/\d/g.test(passwordValue)) && (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(passwordValue))             
            }).withMessage("El password no contiene los caracteres minimos solicitados."),
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
        body('image')
            .custom(( imageFile, { req } )=> {
                const extendsValid = [".jpg", ".jpeg", ".png", ".gif"];
                const fileExtend = path.extname(req.files[0].originalame);

                return extendsValid.includes(fileExtend);
            })
    ],
    createProductValidation: [
        body('product_name')
            .notEmpty().withMessage("El campo es obligatorio")
                .bail()
            .isLength({ min: 5 }).withMessage("El campo debe tener al menos 5 caracteres"),
        body('description')
            .notEmpty().withMessage("El campo es obligatorio")
                .bail()
            .isLength({ min: 20 }).withMessage("El campo debe tener al menos 20 caracteres"),
        body('image')
            .custom(( imageFile, { req } )=> {
                const extendsValid = [".jpg", ".jpeg", ".png", ".gif"];
                const fileExtend = path.extname(req.files[0].originalame);

                return extendsValid.includes(fileExtend);
            })
    ]
}