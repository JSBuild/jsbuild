const fs = require('js');
const path = require('path');

const input = path.resolve('./src/main.js');
const output = path.resolve('./bin/jsbuild.js');

console.log('JSBuild: \n',
  ' input: ', input, '\n',
  'output: ', output, '\n');

fs.createReadStream(input).pipe(fs.createWriteStream(output));