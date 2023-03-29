const productRouter = require('express').Router();
const validatorHandler = require('./../middleware/validatorHandler');
const productHandler = require('./../handlers/productsHandler')
const {isAdmin} = require('./../middleware/authValidator');

const {updateProductSchema, createProductSchema, getProductSchema, getQueryProductSchema } = require('./../schemas/productSchema');
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, reactivateProduct} = new productHandler()

productRouter.get('/',getAllProducts);
productRouter.post('/',validatorHandler(createProductSchema, 'body'), isAdmin, createProduct);
productRouter.get('/getProductById/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(getQueryProductSchema, 'query'), getProductById);
productRouter.patch('/editProduct/:id', validatorHandler(getProductSchema, 'params'), isAdmin, validatorHandler(updateProductSchema, 'body'), updateProduct);
productRouter.delete('/deleteProduct/:id', validatorHandler(getProductSchema, 'params'), isAdmin, deleteProduct);
productRouter.put('/reactiveProduct/:id', isAdmin, reactivateProduct);

// productRouter.get('/',getAllProducts);
// productRouter.post('/', createProduct);
// productRouter.get('/getProductById/:id', getProductById);
// productRouter.patch('/editProduct/:id', updateProduct);
// productRouter.delete('/deleteProduct/:id', deleteProduct);
// productRouter.put('/reactiveProduct/:id', reactivateProduct);

module.exports = productRouter