var express = require('express');
var t = require('../public/test');
var router = express.Router();
t.hh();
router.get('/myindex', function(req, res, next) {
  //res.render('hello',{});
  console.log('this is myroute!');
  res.jsonp({data: 'hahahahahaha'});
  
});

module.exports = router;