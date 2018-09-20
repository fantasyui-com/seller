/*
  It is possible to generate on the fly, pre-generate, or generate-and-cache.
  1. On the fly simply returns the payload
  2. pre-generator looks up previously generated summary-d26d4bcd-cbc9-44b8-8657-53a5b14c5ed3.json, preview-d26d4bcd-cbc9-44b8-8657-53a5b14c5ed3.jpg[|mp3|zip] and product-d26d4bcd-cbc9-44b8-8657-53a5b14c5ed3.zip
  3. generates it and stores similar to #2 in a .cache
*/

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
        size:'100x100',
        thumbnail:'',
      },
      data:[ // this could be a list of colors, or piece of song,
        {},
        {}
      ],
    };
    return response;
  };

  response.product = function({seed}){
    const response = {
      meta:{
        checksum:''
        purchased:'',
        price:'',
      },
      data:'', // this should be a zip URL?
    };
    return response;
  };

  return response;

}
