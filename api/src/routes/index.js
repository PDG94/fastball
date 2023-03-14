const express = require('express');

const userRouter = require('./userRoute')
const categoryRouter = require('./categoryRoute')
const productRouter = require('./productRoute')

function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
    router.use('/category', categoryRouter);
    router.use('/product', productRouter);
};

module.exports = routerApi;