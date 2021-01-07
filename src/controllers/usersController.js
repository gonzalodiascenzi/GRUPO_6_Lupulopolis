const { validationResult } = require("express-validator");
const userHelper = require("../helpers/userHelper");
const bcryptjs = require("bcryptjs");
const db = require('../database/models');

const controller = {
    showLogin: (req, res) => {

        return res.render('users/login');
    },
    processLogin: async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/login', {
                errors: errors.errors,
                old: req.body
            });
        }
        
        const userFound = await db.User.findOne({ where: { email: req.body.email } });

        if (userFound) {
            req.session.user = userFound;
        }

        if (req.body.remember) {
            res.cookie("userLog", req.session.user.id);
        }
    
        return res.redirect('/');
    },
    showRegister: (req, res) => {
        return res.render('users/register');
    },
    processRegister: async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
             return res.render('users/register', {
                errors: errors.errors,
                old: req.body
            });
        }

        const newUser = {
            id: userHelper.generateNewId(),
            first_name: "aa",
            last_name: "aa",
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            category: "user",
            image: ""
        }
       
        await db.User.create(newUser)

        return res.redirect('/users/login');
    },
    showProfile: (req, res) => {
        res.render('users/profile')
    },
    logout: (req, res) => {
         
         req.session.destroy();
        
         
         if (req.cookies.email){
             res.clearCookie('email');
         }
         return res.redirect('/');
     } 
 };

module.exports = controller;