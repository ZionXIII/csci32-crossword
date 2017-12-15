var express = require('express');
var router = express.Router();
var passport = require('passport');
var passport_config = require('/config/passport.js');

/* GET authentication page */
router.get('/', function(req, res, next) {
    res.render('authentication', {title: 'Authentication Page', user: '', pass: ''});
});

/*  =================================================
    =======User Login Handling Proof of Concept
    =================================================
*/

/* GET authentication page */
router.get('/authentication', function(req, res, next) {
    res.render('authentication', {title: 'Authentication Page'});
})

/* POST login in page return */
router.post('/login', function(req, res, next) {
    passport.authenticate('local', {
       successRedirect:'/loginSuccess',
       failureRedirect: '/loginFailure'
    });
    res.render('authentication', {title: 'Login Page'}); 
});

/* GET failed login */
router.get('/loginFailure', function(req, res, next) {
   res.send('Failed to authenticate'); 
});

/* GET success login */
router.get('/loginSuccess', function(req, res, next) {
    res.send('Succussfully athenticated');
})

/* Passport add user, I guess? */
passport.serializeUser(function(user, done) {
    done(null, user); 
});

/* Passport delete user, I guess? */
passport.deserializeUser(function(user, done) {
    done(null, user);
})

/* POST sign up page return */
router.post('/signup', function(req, res, next) {
    var User = req.body.username ? req.body.username : '';
    var Pass = req.body.password ? req.body.password :  '';
    res.render('authentication', {title: 'Signup Page', user: User, pass: Pass }); 
});

module.exports = router;
