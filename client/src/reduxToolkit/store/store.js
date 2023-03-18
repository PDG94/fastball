const configureStore = require('@reduxjs/toolkit').configureStore;
const productReducer = require('./../slices/productSlice');
const userReducer = require('./../slices/userSlice');
const categoryReducer = require('./../slices/categorySlice')
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: categoryReducer
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});


module.exports = store