
const orderService = require('./../services/orderService');
const service = new orderService();

class orderHandler{
    constructor(){}
    async getAllOrders(req,res,next){
        try {
            const orders = await service.getAllOrders();
            res.status(200).send(orders);
        } catch (error) {
            res.send(error);
        }
    }
    async getOrderById(req,res,next){  
        try {
            const {id} = req.params;
            const orders = await service.getOrderById(id);
            res.status(200).send(orders);
        } catch (error) {
            res.send(error.message);
        }
    }
    async createOrder(req,res,next){
        try {
            const orderCreated = await service.createOrder(req.body) // debe venir por body orderNumber, totalAmount, products, userId, quantity en ese orden
            res.status(200).send(orderCreated);
        } catch (error) {
            res.send(error);
        }
    }
    async updateOrder(req,res,next){
        try {
            const {id}=req.params; //id de la orden
            const {orderNumber, totalAmount} = req.body;
            const order = await service.updateOrder(id, orderNumber,totalAmount);
            res.status(200).send(order);
        } catch (error) {
            res.send(error.message);
        };
    };
    async deleteOrder(req,res,next){
        try {
            const {id} = req.params; //id de la orden
            const orderDeleted = await service.deleteOrder(id);
            res.status(200).send(orderDeleted);
        } catch (error) {
            res.send(error.message);
        };
    };
};

module.exports = orderHandler;