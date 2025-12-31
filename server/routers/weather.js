
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { Weather } = require('../db');


const options = {
  method: 'GET',
  url: 'http://api.weatherapi.com/v1/current.json',
  params: {
    key: process.env['WEATHER_API_KEY'],
    q: '70112',
  }
};

const getWeather = async () => {
  const weather = await axios(options);
  return weather.data;
};


router.get('/', (req, res) => {
  getWeather()
    .then(weatherInfo => {
      res.status(200).send(weatherInfo);
    })
    .catch(err => {
      console.error('Unable to retrieve from weather api on server: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;