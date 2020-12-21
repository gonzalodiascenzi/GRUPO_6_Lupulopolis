const { validationResult } = require("express-validator");
const userHelper = require("../helpers/userHelper");
const bcryptjs = require("bcryptjs");


const controller = {
    showLogin: (req, res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
        

    },
    showRegister: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
             res.render('users/register', {
                errors: errors.errors,
                old: req.body
            });
        }

        const newUser = {
            id: userHelper.generateNewId(),
            first_name: "",
            last_name: "",
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            category: "user",
            image: ""
        }
        
        userHelper.writeUser(newUser);

        res.redirect('/users/login');
    }
}

module.exports = controller;