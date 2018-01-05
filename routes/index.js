var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in index page');
  res.render('index', { title: "asdfasdfasdf" });
});


router.get('/api/getusername/', function(req, res) {
  res.json({name:"LEE DONGEUN"});
});

module.exports = router;
