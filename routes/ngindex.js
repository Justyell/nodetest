var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('hello',{});
  //console.log('this is myroute!');
  //res.jsonp({data: 'hahahahahaha'});
  
  res.render('ngindex',{title:'ngindex test!'});
  
});

module.exports = router;