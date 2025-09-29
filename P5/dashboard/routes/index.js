var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/dashboard', (req, res) => {
//   const data = {
//     users: 300,
//     sales: 1500,
//     revenue: 12345,
//     messages: 25
//   };
//   res.render('dashboard', {data});
// });

module.exports = router;
