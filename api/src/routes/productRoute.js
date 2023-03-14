const express = require('express');
const ProductService = require('./../services/userService');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req,res,next)=>{
    try {
        const products = await service.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error.message)
    }
})

module.exports = {
    router
}