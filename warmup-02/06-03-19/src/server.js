'use strict';

// CONFIGURATION ----------------------------------------
// Brings in environment variables
require('dotenv').config();

// Brings in the express dependency
const express = require('express');

// Invokes express and calls it "app"
const app = express();

// Gets the port number from the env variables
const PORT = process.env.PORT || 3000;

// Brings in the routes from the routes.js file
const routes = require('./routes');

// Configures the default view engine extension to use .ejs
app.set('view engine', 'ejs');
// app.set('views', `${__dirname}/views`);


// MIDDLEWARE ----------------------------------------
// Serves static files (images, CSS files, and JavaScript files) from the 'public' directory
app.use(express.static('public'));

// Parses incoming requests with JSON payloads
app.use(express.json());

// ROUTES ----------------------------------------
// First checks all routes imported from routes.js
app.use(routes);

// Catch-all route, 404
app.get('*', (req, res) => {
  res.status(404);
  res.render(`${__dirname}/views/404`, { request: req });
});

// Error route, 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  // res.send('500 server error');
  res.render(`${__dirname}/views/500`, { request: req, error: err });
});

// START ----------------------------------------
// Starts a UNIX socket and listens for connections on the given path, logs to console
// https://expressjs.com/en/api.html#app.listen_path_callback
// Exports a 'start' function that's called in index.js, the entry point
module.exports = {
  start: () => app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`))
};
