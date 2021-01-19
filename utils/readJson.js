const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .then((text) => JSON.parse(text))
  .catch(() => ({ message: '500 Internal Server Error' }));

module.exports = readJson;
