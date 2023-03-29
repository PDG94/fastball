const boom = require('@hapi/boom');
const { Product, Category,Size,Color } = require("../bd/db");

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
            include: [
                {
                  model: Color
                },
                {
                  model: Size,
                }
            ]
        })
        return Products
    }

    async findOneProduct(id, userId) {
        let isAdminUsr = false;
        if(userId){
            const usr = await User.findByPk(userId);
            if( usr ) isAdminUsr = usr.isAdmin
        }

        let prod = await Product.findByPk(id);

        if (!prod) {
            throw boom.notFound('product not found');
        }

        if(!isAdminUsr){
            prod = await prod.update( {
                usersVisits: prod.usersVisits + 1,
                // score: 3.5
                // cantReviews: 4
            })
        }
        
        return prod;
    }

    async updateProduct(id, changes) {
        const prod = await Product.findByPk(id);
        const rta = await prod.update(changes);
        return rta;
    }

    async deleteProduct(id) {
        const prod = await this.findByPk(id);
        await prod.update({active:false});
        return { id };
    }

    async reactivateProduct(id) {
        console.log(id)
        const prod = await this.findByPk(id);
        await prod.update({ active: true });
        return prod;
      }
}

module.exports = ProductService;