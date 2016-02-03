var express = require('express');
var t = require('../public/test');
var mongoose = require('mongoose');
var schema 	 = mongoose.Schema;
var router = express.Router();
var dbconfig = require('../config');
schema = new schema({

	name:String
});


router.get('/db', function(req, res, next) {
  //res.render('hello',{});
  console.log(dbconfig);
  var db = mongoose.connect(dbconfig.db.uri);
  var model = mongoose.model('test',schema);
  var testModel = mongoose.model('test');
  /*
  mongoose.connection.once('open',function(){
			
			console.log('connect to the db!!');
			return;
		}
	);
  */
  
  
  //查
  testModel.find({},function(err,data){
	  if(data){
		  mongoose.disconnect();
		  console.log("data is: " + data)
		  res.jsonp(data);
	  }
	  if(err){
		  return handldError(err);
	  }
	  
  });
  
  //增
  /*
  model.create({name:"david"},function(err){
	  mongoose.disconnect();
	  if(err){
		  return handldError(err);
	  }
  });
  */
});

module.exports = router;