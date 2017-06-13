var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
/* GET home page. */
router.get('/chat', function(req, res, next) {
    res.render('chat', { title: 'Express' });
});

/* GET home page. */
router.get('/buscaminas', function(req, res, next) {
    res.render('buscaminas', { title: 'Express' });
});

module.exports = router;
