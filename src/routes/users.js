const express = require('express');
const router = express.Router();
const multer  = require('multer');

/* Controllers Require */
const usersController = require('../controllers/usersController');
const validation = require('../middlewares/validation');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})
  
const upload = multer({ storage: storage })


/* GET users listing. */
router.get('/login', guest, usersController.showLogin);
router.post('/login',  guest, validation.loginValidation, usersController.processLogin);

router.get('/register', guest, usersController.showRegister);
router.post('/register', upload.single('image'), guest, validation.registerValidation, usersController.processRegister)

router.get('/profile', auth, usersController.showProfile);
router.post('/profile', auth, usersController.logout)

module.exports = router;
