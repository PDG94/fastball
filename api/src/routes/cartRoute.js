const express = require('express');
const cartHandler= require('./../handlers/cartHandler');
const router = express();
const {getAllProductsOnCart}=new cartHandler();

router.post('/getCart', getAllProductsOnCart);

module.exports = router;