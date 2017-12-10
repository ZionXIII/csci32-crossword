var express = require('express');
var router = express.Router();

/* GET archive page. */
router.get('/', function(req, res, next) {
  res.render('puzzle_archive', { title: 'Puzzles Archive' });
});

module.exports = router;
