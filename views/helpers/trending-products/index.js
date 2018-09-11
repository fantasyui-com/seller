
const createProducts = function (options = {count, companies}){
  const response = Array.from( { length:options.count } ).map(i=>({name:'Bork', type:'Bootstrap Theme'}));
  console.log(response)
  return response;
};

module.exports = function(app){
  let sliceStart = 0;
  return function(count) {

    // app.config.companies
    const products = app.config.trending;

    const template = function(product){
      return `
        <div class="card">
          <div class="card-body bg-secondary text-white" style="min-height: 240px;">
          </div>
          <div class="card-body">
            <p class="card-text"><a href="/browse/${product.companyId}/${product.categoryId}/${product.productId}" class="h6">${product.product} - ${product.category}</a></p>
            <p class="card-text">by <a href="/b/${product.companyId}" class="small">${product.company}</a> in <a href="/${product.categoryId}" class="small">${product.category}</a></p>
            <p class="card-text float-right"><small class="text-muted"><a href="/b/${product.companyId}/${product.productId}/download" class="btn btn-sm btn-primary">Download</a></small></p>
          </div>
        </div>
      `;
    }

    const content = products.map( product=>template(product) ).slice(sliceStart,count).join('')
    sliceStart = count;

    return content;
  }
};
