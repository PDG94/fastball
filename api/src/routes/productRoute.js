const productRouter = require('express').Router();
const validatorHandler = require('./../middleware/validatorHandler');
const productHandler = require('./../handlers/productsHandler')
const {isAdmin} = require('./../middleware/authValidator');

const {updateProductSchema, createProductSchema, getProductSchema, getProductStatsSchema, updateProductStatsSchema } = require('./../schemas/productSchema');
const {getAllProducts,updateStockProduct, getProductById, getProductStatsById, createProduct, updateProduct, deleteProduct, reactivateProduct} = new productHandler()

productRouter.get('/',getAllProducts);
productRouter.post('/',  isAdmin,createProduct);
productRouter.get('/getProductById/:id', validatorHandler(getProductSchema, 'params'), getProductById);
// productRouter.get('/getProductStatsById/:id', validatorHandler(getProductStatsSchema, 'params'), validatorHandler(updateProductStatsSchema, 'query'), getProductStatsById);
productRouter.patch('/editProduct/:id', validatorHandler(getProductSchema, 'params'), isAdmin, updateProduct);
productRouter.delete('/deleteProduct/:id', validatorHandler(getProductSchema, 'params'), isAdmin, deleteProduct);
productRouter.put('/reactiveProduct/:id', isAdmin, reactivateProduct);
productRouter.put('/update/stock/',updateStockProduct);

// productRouter.get('/',getAllProducts);
// productRouter.post('/', createProduct);
// productRouter.get('/getProductById/:id', getProductById);
// productRouter.patch('/editProduct/:id', updateProduct);
// productRouter.delete('/deleteProduct/:id', deleteProduct);
// productRouter.put('/reactiveProduct/:id', reactivateProduct);

module.exports = productRouter