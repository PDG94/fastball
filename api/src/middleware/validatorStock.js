const { Product } = require("../bd/db");

const validatorStock = async (req, res, next) => {
    const product = await Product.findByPk(idProduct);
    if (product.dataValues) {
        const productDetail = product.dataValues;
        if (productDetail.stock > stock) {

        }
    }
}