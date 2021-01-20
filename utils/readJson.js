const fs = require('fs').promises;

const readJson = (path, req, res) => fs.readFile(path)
  .then((text) => JSON.parse(text))
  .catch(() => res.status(500).send('Ошибка чтения файла'));

module.exports = readJson;
