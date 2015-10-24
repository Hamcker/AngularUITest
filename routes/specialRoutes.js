var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.render('/templates/index');
});

module.exports = router;
