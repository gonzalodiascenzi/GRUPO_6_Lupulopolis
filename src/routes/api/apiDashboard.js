var express = require('express');
var router = express.Router();

const apiDashboardController = require('../../controller/api/dashboard/apiDashboardController');

const imageController = require('../../controller/api/dashboard/apiGetImage');


router.get('/getStadistics', apiDashboardController.getDashboardStadistics);
router.get('/getLastProducts', apiDashboardController.getLastProducts);
router.get('/getPurcharseProduct', apiDashboardController.getPurcharseProduct);
router.get('/getPurcharseUser', apiDashboardController.getPurcharseUser);


module.exports = router;