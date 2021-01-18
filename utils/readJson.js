const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .then((text) => JSON.parse(text))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

module.exports = readJson;
