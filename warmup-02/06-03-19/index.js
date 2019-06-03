// Requiring the express dependency
const express = require('express');

// Invoke express and call it "app"
const app = express();

// A hard-coded port number where the server will be up and listening
const PORT = 3000;

// A route listener and handler for the '/' route
app.get('/', (req, res) => res.send('Hello'));

// Gets the server up and running
app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`));
