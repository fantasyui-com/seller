
module.exports = function({seed}){

  /*
    RESPONSE ENVELOPE
    object:response should be something that can be shown in the browser, as well as downloaded.
  */
  const response = {};

  /*
    RESPONSE PROPERTIES
    object properties are as follows: summary, preview, product.
    Each is a function to be executed as needed, this saves on CPU/resources.
  */
  response.summary = function({seed}){
    // Plain, public object that can be serialized.
    const response = {
      meta:{
        name:'',
        price:'',
      },
      data:{},
    };
    return response;
  };
  response.preview = function({seed}){
    const response = {
      meta:{
        name:'',
        price:'',
      },
      data:[ // this could be a list of colors
        {},
        {}
      ],
    };
    return response;
  };
  response.product = function({seed}){
    const response = '';
  };

  return response;

}
