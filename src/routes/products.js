// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Middleware Require ************
const adminAuth = require('../middlewares/adminAuth');
const validator = require('../middlewares/validation');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE PRODUCT ***/
router.get('/create', adminAuth, productsController.create);
router.post('/create', upload.single('image'), adminAuth, validator.createProductValidation, productsController.store);

/*** DETAIL PRODUCT ***/
router.get('/:id',  productsController.detail);

/*** EDIT PRODUCT ***/
router.get('/:id/edit', adminAuth, productsController.edit);
router.put('/:id/edit', upload.single('image') ,adminAuth, validator.updateProductValidation, productsController.update);

/*** DELETE PRODUCT ***/
router.delete('/:id/edit', adminAuth, productsController.remove);

module.exports = router;