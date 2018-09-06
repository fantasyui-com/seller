const path = require('path');
const fs = require('fs');

const tango = path.join(__dirname, 'config.json');
let data = JSON.parse(fs.readFileSync( tango ).toString());

data.vendorCount = Number.MAX_SAFE_INTEGER.toLocaleString(
  undefined, // leave undefined to use the browser's locale,
             // or use a string like 'en-US' to override it.
  { minimumFractionDigits: 0 }
);


Object.assign(data, require(path.join(__dirname,'menu.js'))(data) )
Object.assign(data, require(path.join(__dirname,'trending.js'))(data) )

module.exports = data;

console.log( JSON.stringify(module.exports, null, '  ') );
