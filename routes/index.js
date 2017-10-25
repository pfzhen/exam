var express = require('express');
var router = express.Router();
var fs =require('fs')
router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  var temp=[]
  if(req.body.abc==1){
    temp=[1,2,3]
  }else{
    temp=[4,5,6]
  }
//switch (req.body.abc){
//  case "1":
//    temp="nanzhuang"
//        break;
//  case "2":
//        temp="nvzhuang"
//        break;
//}

  res.send({ name: temp });
});





/* GET home page. */


module.exports = router;


