const startCase = require('lodash/startCase');
const chromatism = require('chromatism');
const rng = require('random-seed');

const bootstrapColors = [

  { id: 'blue',   value: '#007bff', tags:['palette', 'named'] },
  { id: 'indigo', value: '#6610f2', tags:['palette', 'named'] },
  { id: 'purple', value: '#6f42c1', tags:['palette', 'named'] },
  { id: 'pink',   value: '#e83e8c', tags:['palette', 'named'] },
  { id: 'red',    value: '#dc3545', tags:['palette', 'named'] },
  { id: 'orange', value: '#fd7e14', tags:['palette', 'named'] },
  { id: 'yellow', value: '#ffc107', tags:['palette', 'named'] },
  { id: 'green',  value: '#28a745', tags:['palette', 'named'] },
  { id: 'teal',   value: '#20c997', tags:['palette', 'named'] },
  { id: 'cyan',   value: '#17a2b8', tags:['palette', 'named'] },

  { id: 'white', value: '#ffffff', tags:['gray'] },
  { id: 'black', value: '#000000', tags:['gray'] },

  { id:'gray-100', value: '#f8f9fa', tags:['gray'] },
  { id:'gray-200', value: '#e9ecef', tags:['gray'] },
  { id:'gray-300', value: '#dee2e6', tags:['gray'] },
  { id:'gray-400', value: '#ced4da', tags:['gray'] },
  { id:'gray-500', value: '#adb5bd', tags:['gray'] },
  { id:'gray-600', value: '#6c757d', tags:['gray'] },
  { id:'gray-700', value: '#495057', tags:['gray'] },
  { id:'gray-800', value: '#343a40', tags:['gray'] },
  { id:'gray-900', value: '#212529', tags:['gray'] },

  { id: 'primary',   source: 'blue', tags:['contextual'] },
  { id: 'secondary', source: 'gray-600', tags:['contextual'] },
  { id: 'success',   source: 'green', tags:['contextual'] },
  { id: 'info',      source: 'cyan', tags:['contextual'] },
  { id: 'warning',   source: 'yellow', tags:['contextual'] },
  { id: 'danger',    source: 'red', tags:['contextual'] },
  { id: 'light',     source: 'gray-100', tags:['contextual'] },
  { id: 'dark',      source: 'gray-800', tags:['contextual'] },
  { id: 'gray',      source:'gray-600', tags:['gray'] },
  { id: 'gray-dark', source:'gray-800', tags:['gray'] },





].map(function(o){ o.name = startCase(o.id); return o; });

module.exports = function(seed){

  const response = [];
  const rnd = rng.create(seed);

  const shiftShade = rnd.intBetween(60,90);

  const addMixtureRed = rnd.intBetween(150,255);
  const addMixtureGreen = rnd.intBetween(150,255);
  const addMixtureBlue = rnd.intBetween(100,255);
  const addMixture = chromatism.convert(`rgb(${addMixtureRed},${addMixtureGreen},${addMixtureBlue})`).hex

  const shiftHue = rnd.intBetween(0,360);
  const shiftSaturation = rnd.intBetween(40,60);
  const shiftBrightness = rnd.intBetween(5,15);

  // const illuminants = ["A", "B", "C", "D50", "D55", "D65", "D75", "E", "F2", "F7", "F11"];
  // const illuminantAdaptation = rnd.intBetween(0,illuminants.length);
  // const illuminant = illuminants[illuminantAdaptation];

  bootstrapColors.forEach(function(color){

    let { id, name , value } = color;

    // dereference: lookup regerence
    if(!color.value){
      color.value = bootstrapColors.filter(i => i.id === color.source)[0].value;
    }

    let background = chromatism.shade( shiftShade, color.value ).hex;
    if(background === '#NaNNaNNaN') background = color.value;
    background = chromatism.multiply( background, addMixture ).hex;

    if((!color.tags.includes('contextual'))&&(!color.tags.includes('named'))) background = chromatism.hue( shiftHue, background ).hex;

    background = chromatism.saturation( shiftSaturation, background ).hex;
    background = chromatism.brightness( shiftBrightness, background ).hex;

    background = chromatism.brightness( shiftBrightness, background ).hex;
    // background = chromatism.adapt( background, illuminant ).hex;


    const foreground = chromatism.contrastRatio( background ).hex;

    response.push( { id, name, foreground, background } );

  });

  return response;

}
