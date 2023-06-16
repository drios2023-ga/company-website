var express = require('express');
var router = express.Router();
var chController = require('../controllers/companyhistory');
var pgController = require('../controllers/pastwork')
var stController = require('../controllers/staff')
var lkController = require('../controllers/links')
var cnController = require('../controllers/contact')

/* GET company history page. */

router.get('/companyhistory', chController.companyhistory);

router.get('/pastwork', pgController.pastwork);

router.get('/staff', stController.staff);

router.get('/links', lkController.links);

router.get('/contact', cnController.contact);

  module.exports = router;