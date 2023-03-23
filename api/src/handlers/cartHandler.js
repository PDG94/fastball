const cartService = require('./../services/cartService');
const service = new cartService();

class cartHandler{
    constructor(){

    };
    async addProductInCart(req,res,next){
        try {
           const {idProduct, idUser, stock}=req.body; 
           const createCart = await service.addProductInCart(idProduct, idUser, stock);
           console.log(createCart)
           res.status(200).json(createCart);
        } catch (error) {
            res.send(error);
        };
    };
    async getAllProductsOnCard(req,res,next){
        try {
            const {idUser} = req.body;
            const products = await service.getAllProductsOnCart(idUser);
            res.status(200).send(products); 
        } catch (error) {
            res.send(error)
        };
    };
    async updateCart(req, res, next){
        try {
            const {idUser, idProduct, stock}= req.body;
            const updated = await service.updateCart(idProduct, idUser, stock);
            res.status(200).send(updated);
        } catch (error) {
            res.send(error);
        };  
    };
    async deleteProductsOnCart(req,res,next){
        try {
            const {idUser, idProduct}= req.body;
            const productDeleted = await service.deleteCart(idProduct,idUser);
            res.status(200).send(productDeleted);
        } catch (error) {
            res.send(error);
        };
    };
}

module.exports = cartHandler;