const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

/* Controllers Require */
const usersController = require('../controllers/usersController');


/* GET users listing. */
router.get('/login', usersController.showLogin);
router.post('/login', usersController.processLogin);

router.get('/register', usersController.showRegister);
router.post('/register', usersController.processRegister)

module.exports = router;
