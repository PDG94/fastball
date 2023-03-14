const express = require('express');

const userRouter = require('./userRoute')
const categoryRouter = require('./categoryRoute')

function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
    router.use('/category', categoryRouter);
};

module.exports = routerApi;