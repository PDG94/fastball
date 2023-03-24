const boom = require('@hapi/boom');
const { Product, Category } = require("../bd/db");

class ProductService {
    constructor() {
    }

    async createProduct(body) {
        const {  name, image, description, price, stock, categories } = body;
        const newProduct = await Product.create({            
            name,
            image,
            description,
            price,
            stock,
        })
        const cat = await Category.findByPk(categories);
        await newProduct.setCategory(cat)
        return newProduct;
    }

    async getAllProducts() {
        const Products = await Product.findAll({
            where: {
                active: true
            },
        })
        return Products
    }

    async findOneProduct(id) {
        const prod = await Product.findByPk(id);
        if (!prod) {
            throw boom.notFound('product not found');
        }
        return prod;
    }

    async updateProduct(id, changes) {
        const prod = await Product.findByPk(id);
        const rta = await prod.update(changes);
        return rta;
    }

    async deleteProduct(id) {
        const prod = await this.findOneProduct(id);
        await prod.update({active:false});
        return { id };
    }

    async reactivateProduct(id) {
        console.log(id)
        const prod = await this.findOneProduct(id);
        await prod.update({ active: true });
        return prod;
      }
}

module.exports = ProductService;