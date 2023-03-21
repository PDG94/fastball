const { Product, User } = require("../bd/db");



class CartService {
    constructor() {

    }
    async addProductInCart(idProduct, idUser, stock) {
       const stockValidated = !stock ? 1 : stock 
        const user = await User.findByPk(idUser);
        const product = await Product.findByPk(idProduct);
        if (!user || !product) {
            return !user ? "user not found" : "Product not found";
        };
        const obj = product.dataValues;
        await user.addProducts(obj.id, {through : {stock} });
        return "relation created"
    }
    // async valitadorStock(idProduct, stock){
    //     const product = await Product.findByPk(idProduct);
    //     if(product.dataValues){
    //         const productDetail = product.dataValues;
    //         if(productDetail.stock > stock){

    //         }
    //     }
    // }
    async getAllProductsOnCart() {

    }
    async updateCart(idproduct, idUser) {

    }
    async deleteCart(idProduct, idUser) {

    }
}

module.exports = CartService;