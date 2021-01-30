const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
mongoose.connection.on('open', () => console.log('db connect'));

app.use('/', (req, res, next) => {
  req.user = {
    _id: '60145184b7e8b75550a7719f',
  };

  next();
});

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.get('/', (req, res) => res.send({ message: 'Здесь был Фронтенд' }));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
