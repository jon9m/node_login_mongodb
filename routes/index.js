var express = require('express');
var router = express.Router();

//Get homepage
router.get('/', ensureAuthenticated, function (req, res) {
    res.render('index');   //Render view called index
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg','You are not authenticated!');
        res.redirect('/users/login');
    }
}

module.exports = router; 