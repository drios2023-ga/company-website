var express = require('express');
var router = express.Router();
var chController = require('../controllers/companyhistory.js');
var pgController = require('../controllers/pastprojects.js')
var stController = require('../controllers/staff')
var lkController = require('../controllers/links')
var cnController = require('../controllers/contact')

/* GET company history page. */

router.get('/companyhistory', chController.companyhistory);

router.get('/pastprojects', pgController.seeAllPastProjects);

router.get('/staff', stController.staff);

router.get('/links', lkController.seeAllLinks);

router.get('/contact', cnController.contact);

module.exports = router;