var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');

router.get('/:companyId/:generatorId', function(req, res, next) {

  res.render('storefront', Object.assign({
    company: startCase(req.params.companyId),
    companyId: kebabCase(req.params.companyId),
  }, config));

});

module.exports = router;
