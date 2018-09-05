var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();

const config = require('../config.js');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');

router.get('/:pageId', function(req, res, next) {
  const pageFile = kebabCase(req.params.pageId);
  const pageData = require( path.join( '..', 'about', pageFile ) );
  res.render( 'about', Object.assign( {}, pageData, config ) );
});

module.exports = router;
