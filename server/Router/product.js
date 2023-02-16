const express = require('express');
const route = express.Router();
const productController = require('../Controller/productController')



route.get('/product',productController)

module.exports = route;