'use strict';

const express = require('express');
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// middleware
app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

// routes

// handles a GET on ‘/’ with a simple response of ‘hello’
app.get('/', (req, res) => {
  res.send('HELLO');
});

// handles a POST on ‘/save’ with a JSON response containing the data posted to the server
app.post('/save', (req, res) => {
  res.json(req.body);
});

// route to test that we render the error page
app.get('/error', (req,res,next) => {
  next('make it break');
});

// catch-all route - Handles 404’s by serving the usera a custom page (.ejs)
app.get('*', (req, res) => {
  res.status(404);
  res.statusMessage = 'ya done goofed';
  res.render('404', { request: req });
});

// Handles Errors by serving the user a custom page (.ejs); log the actual error to the console
app.use((err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'I done messed up';
  res.render('500', { request: req, error: err });
});

module.exports = { start: () => { app.listen(3000, () => console.log('running on PORT 3000')) } }
