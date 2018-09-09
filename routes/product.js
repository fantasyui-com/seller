var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');

router.get('/:companyId/:productId', function(req, res, next) {

  res.render('product', Object.assign({

    company: startCase(req.params.companyId),
    companyId: kebabCase(req.params.companyId),

    product: startCase(req.params.productId),
    productId: kebabCase(req.params.productId),

  }, config));

});

module.exports = router;
