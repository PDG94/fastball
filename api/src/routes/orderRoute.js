const express = require('express');
const routerOrder = express.Router();
const orderHandler = require('./../handlers/orderHandler');
const {getAllOrders, getOrderById,createOrder,updateOrder,deleteOrder, getOneOrder} = new orderHandler();

routerOrder.get('/', getAllOrders);
routerOrder.get('/:id',getOrderById);
routerOrder.get('/getOneOrder/:id', getOneOrder)
routerOrder.post('/create',createOrder);
routerOrder.patch('/update',updateOrder);
routerOrder.delete('/delete',deleteOrder);

module.exports = routerOrder;