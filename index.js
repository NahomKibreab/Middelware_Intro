const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  req.method = 'GET';
  console.log(req.method);
  return next();
});

app.get('/', (req, res) => {
  console.log(`Requested Time : ${req.requestTime}`);
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  console.log(`Requested Time : ${req.requestTime}`);
  res.send('WOOF WOOF!');
});

app.listen('3000', (req, res) => {
  console.log('Port 3000 listening!');
});
