const express = require('express');
const router = express.Router();

// Controllers
const productsApiController = require('../../controllers/apis/productsApiController');


router.get('/', productsApiController.list);
router.get('/:id', productsApiController.find);

module.exports = router;