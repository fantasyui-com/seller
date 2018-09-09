var express = require('express');
var router = express.Router();

const config = require('../config.js');

router.get('/', function(req, res, next) {

  res.render('index', Object.assign({
    // vendorId: kebabCase(req.params.vendorId),
  }, config));


});

module.exports = router;
