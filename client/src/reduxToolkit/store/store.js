const configureStore = require('@reduxjs/toolkit').configureStore;
const productReducer = require('./../slices/productSlice');
const userReducer = require('./../slices/userSlice');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});


module.exports = store