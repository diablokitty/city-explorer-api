'use strict';
console.log('My first server is behaving badly!');

//REQUIRE
//Use require instead of import. List the requirements for the server.
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const getWeather = require('./weather.js');
const getMovies = require('./movies.js');

//USE
app.use(cors());
//Anything that is required must be used. Use is where required files are assigned variables.
//React does this in one step, Express takes two.

const PORT = process.env.PORT || 3002;
//check for good process
console.log(PORT);

//ROUTES
//Routes are used to access to use endpoints.
app.get('/', (request, response) => {
  response.send('Hello from our server!');
});

app.get('/weather', getWeather);

app.get('/movies', getMovies);

app.get('*', (request, response) => {
  response.send('Something isn\'t right here.');
});


//ERRORS
app.use((err, req, res) => {

  console.log(err.message);
  res.status(500).send(err.message);

});

//LISTEN
//This is where we start the server. This is an express method.
app.listen(PORT, () => console.log(`listening on port ${process.env.PORT}`));



