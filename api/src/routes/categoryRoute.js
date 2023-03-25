const express = require('express');
const Category=require('./../handlers/categoryHandler');
const router=express.Router();
const {isAdmin} = require('./../middleware/authValidator');
const {getAllCategories,createCategory,getCategoryById,deleteCategory,reactivateCategory}=new Category();

const validatorHandler = require('./../middleware/validatorHandler');
const {updateCategorySchema, createCategorySchema, getCategorySchema } = require('./../schemas/categoryShema');

router.get('/', getAllCategories);
router.post('/', validatorHandler(createCategorySchema, 'body'), isAdmin,  createCategory);
router.get('/:id', validatorHandler(getCategorySchema, 'params'), getCategoryById);
router.delete('/:id', validatorHandler(getCategorySchema, 'params'), isAdmin, deleteCategory);
router.put('/:id',validatorHandler(getCategorySchema, 'params'), isAdmin, reactivateCategory);

// router.get('/', getAllCategories);
// router.post('/', createCategory);
// router.get('/:id', getCategoryById);
// router.delete('/:id', deleteCategory);
// router.put('/:id', reactivateCategory);
  

module.exports=router;
