const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  console.log('This is my First Middleware');
  return next();
  console.log('This is my First Middleware - After next() called!');
});

app.use((req, res, next) => {
  console.log('This is my Second Middleware');
  return next();
});

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!');
});

app.listen('3000', (req, res) => {
  console.log('Port 3000 listening!');
});
