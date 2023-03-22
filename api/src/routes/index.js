const express = require('express');

const userRouter = require('./userRoute')
const categoryRouter = require('./categoryRoute')
const productRouter = require('./productRoute')
const checkout = require('../services/checkout');
const cartRouter = require('./cartRoute')
const alta = require("../utils/notifications/altaMail")
const pago = require("../utils/notifications/pagoMail");
const data = require("../utils/notifications/updateDataMail");
const baja = require("../utils/notifications/bajaMail");
const active = require("../utils/notifications/activeMail");

function routerApi(app){
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRouter);
    router.use('/category', categoryRouter);
    router.use('/product', productRouter);
    router.use('/checkout', checkout);
    router.use('/cart', cartRouter);
    router.use("/alta", alta);
    router.use("/pago", pago);
    router.use("/baja", baja);
    router.use("/data", data);
    router.use("/active", active);

};

module.exports = routerApi;