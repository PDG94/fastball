const productRouter = require('express').Router();
const validatorHandler = require('./../middleware/validatorHandler');
const productHandler = require('./../handlers/productsHandler')
const {updateProductSchema, createProductSchema, getProductSchema } = require('./../schemas/productSchema');
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, reactivateProduct} = new productHandler()

productRouter.get('/',getAllProducts);
productRouter.post('/',validatorHandler(createProductSchema, 'body'), createProduct);
productRouter.get('/getProductById/:id', validatorHandler(getProductSchema, 'params'), getProductById);
productRouter.patch('/editProduct/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), updateProduct);
productRouter.delete('/deleteProduct/:id', validatorHandler(getProductSchema, 'params'), deleteProduct);
productRouter.put('/reactiveProduct/:id', reactivateProduct);

module.exports = productRouter