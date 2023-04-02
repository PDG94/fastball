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
        const products = await user.getProducts();
        return products;
    }
    
    async getAllProductsOnCart(idUser) {
        const user = await User.findByPk(idUser);
        const products = await user.getProducts();
        if (!products) throw new Error( "No hay productos agregados al carrito");
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
            const user = await User.findByPk(idUser);
            const products = await user.getProducts();
            return products;
        } catch (error) {
            return error
        }
    };
    async deleteCart(idProduct, idUser) {
        const user = await User.findByPk(idUser);
        await user.removeProduct(idProduct);
        const products = await user.getProducts();
        return products;
    };
}

module.exports = CartService;