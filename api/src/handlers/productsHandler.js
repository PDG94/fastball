const productService = require('./../services/productService');
const service = new productService();

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

    async getProductById(req,res,next){
        try {
            const {id} = req.params;
            const {userId} = req.query;
            const product = await service.findOneProduct(id, userId);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }

    async createProduct(req,res,next){
        try {
            const body = req.body;
            const newProduct = await service.createProduct(body);
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    }

    async updateProduct(req, res, next ){
        try {
            const body = req.body;
            const productUpdated = await service.updateProduct(body.id, body);
            res.status(200).json(productUpdated);
        } catch (error) {
            next(error);
        }
    }

    async deleteProduct(req, res, next ){
        try {
            const {id} = req.params;
            console.log(id)
            const productDeactivated = await service.deleteProduct(id);
            res.status(200).json(productDeactivated);
        } catch (error) {
            res.json(error.message);
        }
    }

    async reactivateProduct(req, res, next ){
        try {
            const {id} = req.params;
            const productReactivated = await service.reactivateProduct(id);
            res.status(200).json(productReactivated);
        } catch (error) {
            next(error);
        }
    }
    async updateStockProduct(req, res, next ){
        try {
            const product=req.body;
            const result=await service.updateStockProduct(product);
        } catch (error) {
            
        }
    }
}

module.exports = ProductsHandler