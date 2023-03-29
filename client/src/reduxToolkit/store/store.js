const configureStore = require('@reduxjs/toolkit').configureStore;
const productReducer = require('./../slices/productSlice');
const userReducer = require('./../slices/userSlice');
const categoryReducer = require('./../slices/categorySlice')
const cartReducer = require('./../slices/cartSlice')
const orderReducer = require('./../slices/orderSlice')

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: categoryReducer,
        cart:cartReducer,
        order: orderReducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat()
});


module.exports = store