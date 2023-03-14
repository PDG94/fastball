const UserService = require('./../services/userService');
const service = new UserService();

class ProductsHandler {
    constructor() {}

    async getAllProducts (req,res,next){
        try {
            const products = await service.getAllProducts();
            res.json(products);
        } catch (error) {
            next(error.message)
        }
    }
}

module.exports = ProductsHandler