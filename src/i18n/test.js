const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname);

function readSrcFiles(srcPath) {
  const result = {};

  const files = fs.readdirSync(srcPath);

  for (const file of files) {
    const filePath = path.join(srcPath, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      result[file] = readSrcFiles(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      const module = require(filePath);
      result[file] = module.default || module;
    }
  }

  return result;
}

const output = readSrcFiles(srcPath);
console.log(output);
