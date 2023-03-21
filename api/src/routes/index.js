const express = require('express');

const userRouter = require('./userRoute')
const categoryRouter = require('./categoryRoute')
const productRouter = require('./productRoute')
const checkout = require('./../handlers/checkout')
const cartRouter = require('./../routes/cartRoute');
function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
    router.use('/category', categoryRouter);
    router.use('/product', productRouter);
    router.use('/checkout', checkout);
    router.use('/cart', cartRouter);
};

module.exports = routerApi;