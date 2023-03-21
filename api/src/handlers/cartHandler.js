const cartService = require('./../services/cartService');
const service = new cartService();

class cartHandler{
    constructor(){

    }

    async getAllProductsOnCart(req,res,next){
        try {
           const {idProduct, idUser, stock}=req.body; 
           const createCart = service.addProductInCart(idProduct, idUser, stock);
           res.status(200).send(createCart);
        } catch (error) {
            res.send(error);
        }
    }
    async updateCart(){
        try {
            
        } catch (error) {
            
        }
    }
    async deleteProductsOnCart(){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = cartHandler;