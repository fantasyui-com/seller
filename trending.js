const kebabCase = require('lodash/kebabCase');
const uuidv5 = require('uuid/v5');
module.exports = function(config){
  data = {};

  data.trending = [];
  [
    {name: 'Navy and Soup',     products: ['Bootstrap Themes: Dreadnought',    'Bootstrap Colors: Potato and Cream']},
    {name: 'State Systems',     products: ['Bootstrap Colors: Arizona',        'Bootstrap Themes: Washington']},
    {name: 'Colours, Inc.',     products: ['Bootstrap Themes: Red',            'Bootstrap Colors: Green']},
    {name: 'Deus, LLC.',        products: ['Bootstrap Colors: Zeus',           'Bootstrap Themes: Hera']},
    {name: 'Citizen Systems',   products: ['Bootstrap Themes: York',           'Bootstrap Colors: Rome']},
    {name: 'Peaches and Steam', products: ['Bootstrap Colors: Arctic Supreme', 'Bootstrap Themes: Black Five']},

  ].forEach(entry=>{
    const base = {};
    base.company = entry.name;
    base.companyId = kebabCase(entry.name);
    entry.products.forEach(item=>{
      const [category, product] = item.split(':').map(i=>i.trim());
      const [categoryId, productId] = item.split(':').map(i=>i.trim()).map(i=>kebabCase(i))

      const productUuid = uuidv5(productId, uuidv5(base.companyId, uuidv5.DNS));

      data.trending.push( Object.assign({ category, product, categoryId, productId, productUuid }, base) );

    });
  });
  return data;
}
