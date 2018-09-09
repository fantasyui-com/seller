const kebabCase = require('lodash/kebabCase');
const uuidv5 = require('uuid/v5');
module.exports = function(config){
  data = {};

  data.trending = [];
  [
    {name: 'Navy and Soup', products: ['Themes: Bootstrap Theme: Dreadnought', 'Colors: Color Palette: Potato and Cream']},
    {name: 'State Systems', products: ['Colors: Color Palette: Arizona', 'Themes: Bootstrap Theme: Washington']},
    {name: 'Colours, Inc.', products: ['Themes: Bootstrap Theme: Red', 'Colors: Color Palette: Green']},

    {name: 'Deus, LLC.', products: ['Colors: Color Palette: Zeus', 'Themes: Bootstrap Theme: Hera']},
    {name: 'Citizen Systems', products: ['Themes: Bootstrap Theme: York', 'Colors: Color Palette: Rome']},
    {name: 'Peaches and Steam', products: ['Colors: Color Palette: Arctic Supreme', 'Themes: Bootstrap Theme: Black Five']},

  ].forEach(entry=>{
    const base = {};
    base.company = entry.name;
    base.companyId = kebabCase(entry.name);
    entry.products.forEach(item=>{
      const [category, type, product] = item.split(':').map(i=>i.trim());
      const [categoryId, typeId, productId] = item.split(':').map(i=>i.trim()).map(i=>kebabCase(i))

      const productUuid = uuidv5(productId, uuidv5(base.companyId, uuidv5.DNS));

      data.trending.push( Object.assign({ category, type, product, categoryId, typeId, productId, productUuid }, base) );

    });
  });
  return data;
}
