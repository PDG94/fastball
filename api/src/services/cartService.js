const { Product, User, Cart } = require("../bd/db");



class CartService {
    constructor() {

    }
    async addProductInCart(idProduct, idUser, stock) {

        const user = await User.findByPk(idUser);
        const product = await Product.findByPk(idProduct);
        if (!user || !product) {
            return !user ? "user not found" : "Product not found";
        };
        const obj = product.dataValues;
        await user.addProduct(obj.id, { through: { stock } });
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
    async getAllProductsOnCart(idUser) {

        const user = await User.findByPk(idUser);
        const products = await user.getProducts();
        console.log(products);
        if (!products) return "No hay productos agregados al carrito";
        return products
    }
    async updateCart(idProduct, idUser, newStock) {
        try {
            await Cart.update({ stock : newStock }, {
                where: {
                    UserId: idUser,
                    ProductId: idProduct
                },
            })
            
            return "Product updated"
        } catch (error) {
            return error
        }
    };
    async deleteCart(idProduct, idUser) {
        const user = await User.findByPk(idUser);
        console.log(user)
        await user.removeProduct(idProduct);
        return `Product  ${idProduct} eliminado del carrito del usuario ${idUser}`;
    };
}

module.exports = CartService;