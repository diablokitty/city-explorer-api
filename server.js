'use strict';
console.log('My first server is behaving badly!');

//REQUIRE
//Use require instead of import. List the requirements for the server.
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//BRING IN JSON DATA
let data =require('./data/weather.json');
//const getWeather = require('./Modules/weather');

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

app.get('/weather', (request, response) => {
  let cityName = request.query.city;
  let lat = request.query.lat;
  let lon = request.query.lon;
  let cityObj = data.find(city => city.city_name === cityName && city.lat === lat and city.lon === lon);
  let selectedCity = new City(cityObj);
  response.send(selectedCity);

});

// app.get('/city', (request, response) => {
//   let city = request.query.city;
//   let cityObj = data.find(city => city.name === city);
//   let selectedCity = new City(cityObj);
//   response.send(selectedCity);

// })

app.get('*', (request, response) => {
  response.send('Something isn\'t right here.');
});

//CLASSES
class City {
  constructor(cityObj){
    this.city_name = cityObj.city_name;
    this.lon = cityObj.lon;
    this.lat = cityObj.lat;
  }
}

class Forecast{
  constructor(weatherObj){
    this.date = weatherObj.datetime;
    this.description =weatherObj.weather.description;
  }
}

//ERRORS
//Error handling.


//LISTEN
//This is where we start the server. This is an express method.
app.listen(PORT, () => console.log(`listening on port ${process.env.PORT}`));



