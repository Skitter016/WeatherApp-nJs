const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  temp: {
    type: DataTypes.STRING
  },
  weather: {
    type: DataTypes.STRING
  },
  humidity: {
    type: DataTypes.STRING
  },
  pressure: {
    type: DataTypes.STRING
  },
  speed: {
    type: DataTypes.STRING
  },
  
});

module.exports = Product;
