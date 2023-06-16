var express = require('express');
var router = express.Router();
var chController = require('../controllers/company-history');


/* GET company history page. */

router.get('/companyhistory', chController.companyhistory);

  module.exports = router;