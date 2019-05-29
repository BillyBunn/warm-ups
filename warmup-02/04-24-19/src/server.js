'use strict';

const express = require('express');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<p>hello</p>');
});

app.post('/save', (req, res) => {
  res.json(req.body);
});

app.get('/error', (req,res,next) => {
  next('foo');
});

app.get('*', (req, res) => {
  res.status(404);
  res.statusMessage = '404 Page Not Found';
  res.render('404', { request: req });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.statusMessage = '500 Server Error';
  res.render('500', { request: req, error: err });
});

module.exports = { start: () => { app.listen(3000, () => console.log('server up on 3000')) } }