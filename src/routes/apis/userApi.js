const express = require('express');
const router = express.Router();

// Controllers
const usersApiController = require('../../controllers/apis/usersApiController');


router.get('/', usersApiController.list);
router.get('/:id', usersApiController.find);

module.exports = router;