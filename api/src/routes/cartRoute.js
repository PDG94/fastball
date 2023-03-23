const express = require('express');
const cartHandler= require('./../handlers/cartHandler');
const router = express();
const {addProductInCart, getAllProductsOnCard, updateCart, deleteProductsOnCart}=new cartHandler();


router.get('/getCart/:idUser', getAllProductsOnCard);
router.post('/createCart', addProductInCart);
router.post('/updateCart', updateCart);
router.post('/deleteCart', deleteProductsOnCart);


module.exports = router;