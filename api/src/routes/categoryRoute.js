const express = require('express');
const CategoryService=require('../services/categoryService');

const router=express.Router();
const service=new CategoryService();

router.get('/', async (req, res, next) => {
    try {
      const categories = await service.getAllCategories();
      res.json(categories);
    } catch (error) {
      next(error);
    }
});
router.post('/', async (req, res, next) => {
    try {
      const newCategory = await service.createCategory(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
      const category = await service.getCategoryById(req.params.id);
      res.json(category);
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
})
router.put('/:id', async (req, res, next) => {
    try {
        console.log(req.params.id)
      const category = await service.reactivateCategory(req.params.id);
      res.json(category);
    } catch (error) {
      next(error);
    }
});
  

module.exports=router;
