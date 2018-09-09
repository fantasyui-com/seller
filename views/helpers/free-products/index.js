const kebabCase = require('lodash/kebabCase');
const uuidv4 = require('uuid/v4');

function wrap(val, min, max) {

}

const createProducts = function (options = {count, companies}){

  const response = Array.from( { length:options.count } )
  .map(i=>({
    name:uuidv4(),
    type:'Bootstrap Theme',
    category: 'Themes',
    price: 0,
    company: uuidv4(),
  }))
  .map(object=>{ object.companyId = kebabCase(object.company); return object; })
  .map(object=>{ object.categoryId = kebabCase(object.category); return object; })




  return response;

};

module.exports = function(app){
  return function(count) {

    // app.config.companies
    const products = createProducts({
      count,
      companies: app.config.companies,
    });

    const template = function(product){
      return `
        <div class="card">
          <div class="card-body bg-secondary text-white" style="min-height: 240px;">
          </div>
          <div class="card-body">
            <p class="card-text"><a href="/fantasyui-com/free-dorka" class="h6">${product.name} - ${product.type}</a></p>
            <p class="card-text">by <a href="/storefront/${product.companyId}" class="small">${product.company}</a> in <a href="/${product.categoryId}" class="small">${product.category}</a></p>
            <p class="card-text float-right"><small class="text-muted"><a href="/fantasyui-com/free-dorka" class="btn btn-sm btn-primary">Free Download</a></small></p>
          </div>
        </div>
      `;
    }

    const content = products.map( product=>template(product) ).join('')


    return content;
  }
};
