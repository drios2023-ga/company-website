var express = require('express');
var router = express.Router();
var chController = require('../controllers/company-history');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
