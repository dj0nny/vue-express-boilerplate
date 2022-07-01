const express = require('express');
const morgan = require('morgan');
const path = require('path');

const errorHandler = require('./middlewares/error.middleware');
const api = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world 🍕',
  })
});

app.use('/api', api);

app.use(errorHandler);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}


module.exports = app;