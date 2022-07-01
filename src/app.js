const express = require('express');
const morgan = require('morgan');
const { cwd } = require("process");

const errorHandler = require('./middlewares/error.middleware');
const api = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

app.use('/api', api);

app.use(errorHandler);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(`${cwd()}/public`));
} else {
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello world 🍕',
    })
  });
}

module.exports = app; 