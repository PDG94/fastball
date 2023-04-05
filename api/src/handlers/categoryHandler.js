const CategoryService = require('./../services/categoryService');
const service = new CategoryService();

class CategoryHandler {
    constructor() {}
    async getAllCategories (req,res,next){
        try {
            const categorys = await service.getAllCategories();
            res.json(categorys);
        } catch (error) {
            next(error.message)
        }
    }
    async createCategory (req,res,next){
        try {
            const categorys = await service.createCategory(req.body);
            res.json(categorys);
        } catch (error) {
            next(error.message)
        }
    }
    async getCategoryById (req,res,next){
        try {
            const categorys = await service.getCategoryById(req.params.id);
            res.json(categorys);
        } catch (error) {
            next(error.message)
        }
    }
    async deleteCategory (req,res,next){
        try {
            console.log(req.params)
            const categorys = await service.deleteCategory(req.params.id);
            res.json(categorys);
        } catch (error) {
            next(error.message)
        }
    }
    async reactivateCategory (req,res,next){
        try {
            const categorys = await service.reactivateCategory(req.params.id);
            res.json(categorys);
        } catch (error) {
            next(error.message)
        }
    }
}

module.exports = CategoryHandler