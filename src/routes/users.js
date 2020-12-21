const express = require('express');
const router = express.Router();

/* Controllers Require */
const usersController = require('../controllers/usersController');
const validation = require('../middlewares/validation');


/* GET users listing. */
router.get('/login', usersController.showLogin);
router.post('/login',  validation.loginValidation, usersController.processLogin);

router.get('/register', usersController.showRegister);
router.post('/register', validation.registerValidation, usersController.processRegister)

router.get('/profile', usersController.showProfile);

module.exports = router;
