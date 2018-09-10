const startCase = require('lodash/startCase');
const chromatism = require('chromatism');
const rng = require('random-seed');

const bootstrapColors = [
  { id: 'blue',   value: '#007bff' },
  { id: 'indigo', value: '#6610f2' },
  { id: 'purple', value: '#6f42c1' },
  { id: 'pink',   value: '#e83e8c' },
  { id: 'red',    value: '#dc3545' },
  { id: 'orange', value: '#fd7e14' },
  { id: 'yellow', value: '#ffc107' },
  { id: 'green',  value: '#28a745' },
  { id: 'teal',   value: '#20c997' },
  { id: 'cyan',   value: '#17a2b8' },

  { id: 'black',  value: '#000000' },
  { id: 'white',  value: '#ffffff' },
].map(function(o){ o.name = startCase(o.id); return o; });

module.exports = function(seed){

  const response = [];
  const rnd = rng.create(seed);
  const shiftShade = rnd.intBetween(60,90);

  bootstrapColors.forEach(function(color){

    let { id, name , value } = color;

    console.log('shiftShade',shiftShade);

    let background = chromatism.shade( shiftShade, color.value ).hex;
    if(background === '#NaNNaNNaN') background = color.value;
    const foreground = chromatism.contrastRatio( background ).hex;

    response.push( { id, name, background, foreground } );

  });

  return response;

}
