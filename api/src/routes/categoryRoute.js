const express = require('express');
const Category=require('./../handlers/categoryHandler');

const router=express.Router();
const {getAllCategories,createCategory,getCategoryById,deleteCategory,reactivateCategory}=new Category();

router.get('/',getAllCategories);
router.post('/',createCategory);
router.get('/:id', getCategoryById);
router.delete('/:id',deleteCategory)
router.put('/:id',reactivateCategory);
  

module.exports=router;
