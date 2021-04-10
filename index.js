const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!');
});

app.listen('3000', (req, res) => {
  console.log('Port 3000 listening!');
});
