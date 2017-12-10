var express = require('express');
var router = express.Router();

/* GET print page. */
router.get('/', function(req, res, next) {
  res.render('puzzle_print', { title: 'Puzzle Printout' });
});

module.exports = router;
