const kebabCase = require('lodash/kebabCase');

module.exports = function(config){

  data = {};
  data.trending = {};

  data.trending.companies = [

    'Box Eleven',
    'Western Systems',
    'Domena, Inc.',
    'Hephaistos Corp',
    'Libra Systems',
    'Peaches and Steam',

  ]
  .map(name=>{ return {name}; })
  .map(object=>{ object.id = kebabCase(object.name); return object; });

  return data;

}
