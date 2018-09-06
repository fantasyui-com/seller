const kebabCase = require('lodash/kebabCase');

module.exports = function(config){

  data = {
    menu: {
      main:[],
      sub:[],
      footer:[],
    }
  };


  data.menu.main = [
    'Get Free Goods',
    'Open a Shop',
    'Become a Partner',
    'Discussions',
    'Blog',
    'Free Bonus Credits',
  ]

  data.menu.sub = [
    'Photos',
    'Graphics',
    'Templates',
    'Themes',
    'Fonts',
    'Add-Ons',
    '3D',
  ]

  data.menu.footer = [
    [
      'Resources',
      'Licenses',
      'Blog',
      'Discussions',
      'Products',
      'Collections',
      'Help Center',
      'Made with ' + config.company
    ],
    [
      'The Goods',
      'Free Goods',
      'Purchase Credits',
      'Gift Cards',
      'Branding eBook',
    ],
    [
      'Photos',
      'Graphics',
      'Templates',
      'Themes',
      'Fonts',
      'Add-Ons',
      '3D',
    ]
  ]







  function inflator(input){
    return input
      .map(name=>{ return {name}; })
      .map(object=>{ object.id = kebabCase(object.name); return object; });
  }

  function walker(input, payload){
    const isStringArray    = (Array.isArray(input)) && (input.length) > 0 && (typeof input[0] === 'string');
    const isObject  = (!Array.isArray(input));
    const isSubList = (Array.isArray(input) && (input.length > 0) && (Array.isArray(input[0])) );
    if( isStringArray ){
      return funct(input);
    }else if(isObject){
      Object.keys(input).forEach(key=>{ input[key] = walker(input[key], payload) })
      return input;
    }else if(isSubList){
      input.forEach((list,index)=>{ input[index] = walker(input[index], payload)})
      return input;
    }
  }

  data.menu = walker( data.menu, inflator )

  return data;

}
