const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method);
  return next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I love dog!');
  next();
});

app.use((req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  res.send('Sorry you need password!');
});

app.get('/', (req, res) => {
  console.log(`Requested Time : ${req.requestTime}`);
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  console.log(`Requested Time : ${req.requestTime}`);
  res.send('WOOF WOOF!');
});

app.get('/secret', (req, res) => {
  res.send("Sometimes wear earphone in public so that I don't talk to people!");
});

app.use((req, res) => {
  res.status(404).send('NOT FOUND!');
});

app.listen('3000', (req, res) => {
  console.log('Port 3000 listening!');
});
