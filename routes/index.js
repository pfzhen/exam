var express = require('express');
var router = express.Router();
var fs =require('fs')
router.post('/', function(req, res, next) {
  fs.readFile('public/jgr.txt','utf-8', function (err,data) {
    console.log(data)
  })
  res.header('Access-Control-Allow-Origin',"*")
  var temp="123";
  res.send({"name":temp})

});

module.exports = router;


