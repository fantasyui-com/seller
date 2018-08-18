var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');

router.get('/:vendorId', function(req, res, next) {

  res.render('storefront', Object.assign({
    vendorName: startCase(req.params.vendorId),
    vendorId: kebabCase(req.params.vendorId),
  }, config));

});

module.exports = router;
