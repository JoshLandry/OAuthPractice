var express = require('express');
var router = express.Router();
// var facebook = require('../services/facebook');
// ('1596167637369891', '122b8e011d088ffea4fdefb3e3663a70');


router.use('/', function(req, res, next){

    if(!req.user){
        res.redirect('/');
    }
    next();

})
/* GET users listing. */
router.get('/', function(req, res) {
  if (req.user.facebook) {
      // facebook.getImage(req.user.facebook.token,
      //     function(results){
      //         req.user.facebook.image = results.url;
      //     res.render('users', {user: req.user});
      // })
      console.log("facebook user found");
      res.render('users', {user: req.user})
  } else {
      res.render('users', {user: req.user});
  }
});

module.exports = router;
