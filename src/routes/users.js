var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/login', usersController.showLogin);

router.get('/register', function(req, res) {
  res.render('users/register');
});

module.exports = router;
