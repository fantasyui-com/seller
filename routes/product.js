var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');

router.get('/:vendorId/:productId', function(req, res, next) {

  res.render('product', Object.assign({
    vendorName: startCase(req.params.vendorId),
    vendorId: kebabCase(req.params.vendorId),
    productId: kebabCase(req.params.productId),
  }, config));

});

module.exports = router;
