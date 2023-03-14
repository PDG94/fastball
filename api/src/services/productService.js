const boom = require('@hapi/boom');
const { Product } = require("../bd/db");

class ProductService {
    constructor() {
    }

    async createProduct(body) {
        const { id, name, image, description, price, stock  } = body;
        const newProduct = await Product.create({
            id,
            name,
            image,
            description,
            price,
            stock
        })
        return newProduct
    }

    async getAllProduct() {
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
        const prod = await this.findOne(id);
        const rta = await prod.update(changes);
        return rta;
    }
}

module.exports = ProductService;