const { Order, Product } = require("../bd/db");

class orderService {
    constructor(){

    }
    async createOrder(order){
        const {orderNumber, totalAmount, products, userId} = order //products es una lista de productos con su detalle 
        const orderCreated = await Order.create({
            orderNumber,
            totalAmount,
            userId
        })
        await order.addProducts(products);
        return orderCreated;
    }
    async getAllOrders(idUser){
        const orders = await Order.findAll({where : idUser});
        if(!orders){
            throw new Error("No se encontraron ordenes del usuario");
        }
        return orders;
    }
    async updateOrder(id, orderNumber, totalAmount){ //id es el id de la orden a actualizar
        const orderUpdated = await  Order.findOne({where : {id}});
        if(orderUpdated){
            throw new Error("Order not found");
        };
        await orderUpdated.update({
            orderNumber,
            totalAmount
        });
        return orderUpdated;
    }
    async deleteOrder(id){ //id para buscar la orden
        const orderDeleted = await Order.findOne({where : {id}});
        if(!orderDeleted){
            throw new Error("Order not found");
        };
        await orderDeleted.destroy();
        return "Oder deleted successfully";
    }
}

module.exports = orderService;