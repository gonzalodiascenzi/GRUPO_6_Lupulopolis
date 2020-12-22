const express = require('express');
const router = express.Router();

/* Controllers Require */
const usersController = require('../controllers/usersController');
const validation = require('../middlewares/validation');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');


/* GET users listing. */
router.get('/login', guest, usersController.showLogin);
router.post('/login',  guest, validation.loginValidation, usersController.processLogin);

router.get('/register', guest, usersController.showRegister);
router.post('/register', guest, validation.registerValidation, usersController.processRegister)

router.get('/profile', auth, usersController.showProfile);
router.post('/profile', auth, usersController.logout)

module.exports = router;
