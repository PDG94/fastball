const boom = require('@hapi/boom');
const { Category } = require("../bd/db");

class CategoryService {
    constructor() {
    }
    async getAllCategories() {
        const categories = await Category.findAll({
          where: {
            active: true
          },
        });
        return categories;
    }
    async createCategory(body) {
      console.log(body)
        const { name } = body;
        const newCategory = await Category.create({
          name,
        });
        return newCategory;
    }
    async getCategoryById(id){
        const category=await Category.findByPk(id);
        if(!category){
            throw boom.notFound('category not found');
        }else{
            return category;
        }
    }
    async deleteCategory(id) {
        const category = await this.getCategoryById(id);
        await category.update({active:false});
        return { id };
    }
    async reactivateCategory(id) {
        const category = await this.getCategoryById(id);
        await category.update({ active: true });
        return category;
      }
}

module.exports = CategoryService;