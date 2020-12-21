const { validationResult } = require("express-validator");
const userHelper = require("../helpers/userHelper");
const bcryptjs = require("bcryptjs");


const controller = {
    showLogin: (req, res) => {
        return res.render('users/login');
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/login', {
                errors: errors.errors,
                old: req.body
            });
        }
        
        const userFound = userHelper.getUsers().find(user => user.email == req.body.email);

        if (userFound) {
            req.session.user = userFound;
        }

        if (req.body.remember) {
            res.cookie("userLog", req.session.user);
        }
    
        return res.redirect('/');
    },
    showRegister: (req, res) => {
        return res.render('users/register');
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
             return res.render('users/register', {
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

        return res.redirect('/users/login');
    },
    showProfile: (req, res) => {

    }
}

module.exports = controller;