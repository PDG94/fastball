const express = require('express');
const routerOrder = express.Router();
const orderHandler = require('./../handlers/orderHandler');
const {getOrderById,createOrder,updateOrder,deleteOrder} = new orderHandler();


routerOrder.get('/:id',getOrderById);
routerOrder.post('/create',createOrder);
routerOrder.patch('/update',updateOrder);
routerOrder.delete('/delete',deleteOrder);

module.exports = routerOrder;