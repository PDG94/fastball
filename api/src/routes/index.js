const express = require('express');

const userRouter = require('./../routes/userRoute')
const categoryRouter = require('./../routes/categoryRoute')


function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
    router.use('/category', categoryRouter);
};

module.exports = routerApi;