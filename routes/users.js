var express = require('express');
var router = express.Router();

//Register
router.get('/register',function(req, res){
    res.render('register');   //Render view called register
});

//Login
router.get('/login',function(req, res){
    res.render('login');   //Render view called login
});


module.exports = router; 