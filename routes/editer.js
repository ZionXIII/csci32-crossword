var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('puzzle_editer', { title: 'Puzzle Creator' });
});

module.exports = router;
