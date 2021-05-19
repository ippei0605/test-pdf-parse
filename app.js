const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('l03056m.pdf');

pdf(dataBuffer)
  .then(v => {
    console.log('number of pages', v.text);
  });