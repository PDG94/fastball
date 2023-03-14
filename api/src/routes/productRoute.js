const express = require('express');
const ProductService = require('./../services/productService');

const router = express.Router();
const service=new ProductService();

router.get('/', async (req, res, next) => {
    try {
      const products = await service.getAllProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
      const newProduct = await service.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
      const prod = await service.findOneProduct(req.params.id);
      res.json(prod);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',async(req,res,next)=>{
    try {
        const result=await service.deleteCategory(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        console.log(req.params.id)
      const category = await service.reactivateCategory(req.params.id);
      res.json(category);
    } catch (error) {
      next(error);
    }
});;

module.exports = router
