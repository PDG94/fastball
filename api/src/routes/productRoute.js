const productRouter = require('express').Router();

const productHandler = require('./../handlers/productsHandler')

const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, reactivateProduct} = new productHandler()

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', createProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.put('/:id', reactivateProduct);

module.exports = productRouter