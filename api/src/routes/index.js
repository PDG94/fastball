const express = require('express');

const userRouter = require('./userRoute')

function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
};

module.exports = routerApi;