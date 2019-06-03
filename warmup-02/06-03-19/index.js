// SERVER CONFIGURATION ----------------------------------------
// Brings in environment variables
require('dotenv').config();

// Brings in the express dependency
const express = require('express');

// Invokes express and call it "app"
const app = express();

// Gets the port number from the env variables
const PORT = process.env.PORT || 3000;

// MIDDLEWARE ----------------------------------------
// Serves static files (images, CSS files, and JavaScript files) from the 'public' directory
app.use(express.static('public'));

// Parses incoming requests with JSON payloads
app.use(express.json());

// ROUTES ----------------------------------------
app.get('/', (req, res) => res.send('Hello'));

// POST route with a JSON response containing the data posted to the server
app.post('/save', (req, res) => {
  res.json(req.body);
});

// Route test the error handler
app.get('/foo', (req, res, next) => next('foo'));

// Catch-all route, 404
app.get('*', (req, res) => {
  res.status(404).send('404 page not found');
});

// Error route, 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 server error');
});

// START ----------------------------------------
// Starts a UNIX socket and listens for connections on the given path, logs to console
// https://expressjs.com/en/api.html#app.listen_path_callback
app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`));
