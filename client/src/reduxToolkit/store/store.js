const configureStore = require('@reduxjs/toolkit').configureStore;
const productReducer = require('./../slices/productSlice');
const userReducer = require('./../slices/userSlice');
const categoryReducer = require('./../slices/categorySlice')
const cartReducer = require('./../slices/cartSlice')
const orderReducer = require('./../slices/orderSlice')

const sizeReducer = require('./../slices/sizeSlice')
const colorReducer = require('./../slices/colorSlice')

// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: categoryReducer,
        cart:cartReducer,
        size:sizeReducer,
        color:colorReducer,
        order: orderReducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat()
});


module.exports = store