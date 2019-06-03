'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello'));

// POST route with a JSON response containing the data posted to the server
app.post('/save', (req, res) => {
  res.json(req.body);
});

// Route test the error handler
app.get('/err', (req, res, next) =>
  next('There will always be an error on the /err route')
);

module.exports = app;
