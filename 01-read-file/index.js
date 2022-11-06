const fs = require('fs');
const path = require('path');

const pathText = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(pathText);
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});
