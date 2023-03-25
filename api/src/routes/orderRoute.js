const express = require('express');
const routerOrder = express.Router();
const orderHandler = require('./../handlers/orderHandler');
const {getAllOrders,createOrder,updateOrder,deleteOrder} = new orderHandler();

routerOrder.get('/',getAllOrders);
routerOrder.post('/create',createOrder);
routerOrder.patch('/update',updateOrder);
routerOrder.delete('/delete',deleteOrder);

module.exports = routerOrder;