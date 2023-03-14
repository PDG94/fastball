const express = require('express');
const ProductService = require('./../services/userService');

const productsRouter = express.Router();

const ProductsHandler = require( './../handlers/productsHandler' )
const { getAllProducts } = new ProductsHandler

productsRouter.get('/', getAllProducts)

module.exports = {
    router
}