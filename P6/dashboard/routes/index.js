var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/minimarket', function(req, res, next) {
  res.render('minimarket', { ttile: 'minimarket' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { ttile: 'formulir' });
});

module.exports = router;
