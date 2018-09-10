
const uuidv5 = require('uuid/v5');

var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');

const generateColors = require('../generate-colors.js');

router.get('/:companyId/:productId', function(req, res, next) {

  // info from URL
  const generation = {
    company: startCase(req.params.companyId),
      companyId: kebabCase(req.params.companyId),

    product: startCase(req.params.productId),
      productId: kebabCase(req.params.productId),
  };


  generation.productUuid = uuidv5(generation.productId, uuidv5(generation.companyId, uuidv5.DNS));

  generation.colors = generateColors(generation.productUuid);

  res.render('product', Object.assign(generation, config));

});

module.exports = router;
