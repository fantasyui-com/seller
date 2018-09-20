
const fs = require('fs');
const path = require('path');
const createError = require('http-errors');

const uuidv5 = require('uuid/v5');

var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');


router.get('/:companyId/:generatorId/:productId', function(req, res, next) {

  // info from URL
  const generation = {
    generator: startCase(req.params.generatorId), generatorId: kebabCase(req.params.generatorId),
    company: startCase(req.params.companyId), companyId: kebabCase(req.params.companyId),
    product: startCase(req.params.productId), productId: kebabCase(req.params.productId),
  };

  const generatorPath = path.resolve(path.join(__dirname, '..', 'categories', generation.generatorId, 'index.js'));

  fs.access(generatorPath, fs.constants.F_OK, (err) => {
    if(!err){
      const generator = require(generatorPath);
      generation.productUuid = uuidv5(generation.productId, uuidv5(generation.companyId, uuidv5.DNS));
      const generated = generator({seed:generation.productUuid});
      res.render('product', Object.assign(generated, generation, config));
    }else{
      next(createError(404));
    }
  });




});

module.exports = router;
