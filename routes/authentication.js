var express = require('express');
var router = express.Router();

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
    res.render('authentication', {title: 'Authentication Page', user: '', pass: ''});
})

/* POST login in page return */
router.post('/login', function(req, res, next) {
    var User = req.body.username ? req.body.username : '';
    var Pass = req.body.password ? req.body.password :  '';
    res.render('authentication', {title: 'Login Page', user: User, pass: Pass }); 
});

/* POST sign up page return */
router.post('/signup', function(req, res, next) {
    var User = req.body.username ? req.body.username : '';
    var Pass = req.body.password ? req.body.password :  '';
    res.render('authentication', {title: 'Signup Page', user: User, pass: Pass }); 
});

module.exports = router;
