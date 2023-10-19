const express = require('express');

const { data, day1 } = require('../day1');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(day1);
  
});

router.get('/:id', (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const product = day1.find((product) => product.id === productId);
  res.json(product);
});

let currentProductId = 9;
router.post('/', (req, res) => {
  const {city,temp,weather,humidity , pressure,wind  } = req.body;
  const product = {
    id: ++currentProductId,
    city,temp,weather,humidity , pressure,wind
  };
  data.push(product);
  res.json(product);
});

router.put('/:id', (req, res) => {
  const { city,temp,weather,humidity , pressure,wind } = req.body;
  const productId = Number.parseInt(req.params.id);
  const product = day1.find((product) => product.id === productId);

  product.city = city;
  product.temp = temp;
  product.weather = weather;
  product.humidity = humidity;
  product.pressure = pressure;
  product.wind = wind;


  res.json(product);
});

router.delete('/:id', (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const productIndex = day1.findIndex((product) => product.id === productId);
  data.splice(productIndex, 1);
  res.sendStatus(204);
});




module.exports = router;
