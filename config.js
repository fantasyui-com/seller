const path = require('path');
const fs = require('fs');

const tango = path.join(__dirname, 'config.json');
let data = JSON.parse(fs.readFileSync( tango ).toString());

data.vendorCount = Number.MAX_SAFE_INTEGER.toLocaleString(
  undefined, // leave undefined to use the browser's locale,
             // or use a string like 'en-US' to override it.
  { minimumFractionDigits: 0 }
);


module.exports = data;
