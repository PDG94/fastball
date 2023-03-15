const productRouter = require('express').Router();
const validatorHandler = require('./../middleware/validatorHandler');
const productHandler = require('./../handlers/productsHandler')
const {updateProductSchema, createProductSchema, getProductSchema } = require('./../schemas/productSchema');
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, reactivateProduct} = new productHandler()

productRouter.get('/',getAllProducts);
productRouter.get('/:id', validatorHandler(getProductSchema, 'params'), getProductById);
productRouter.post('/',validatorHandler(createProductSchema, 'body'), createProduct);
productRouter.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), updateProduct);
productRouter.delete('/:id', validatorHandler(getProductSchema, 'params'), deleteProduct);
productRouter.put('/:id', reactivateProduct);

module.exports = productRouter