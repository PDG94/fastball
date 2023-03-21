const express = require('express');
const cartHandler= require('./../handlers/cartHandler');
const router = express();
const {getAllProductsOnCart}=new cartHandler();

router.get('/getCart', getAllProductsOnCart);

module.exports = router;