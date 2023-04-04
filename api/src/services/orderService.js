const { Order, Product } = require("../bd/db");

class orderService {
    constructor(){

    }
    async createOrder(order){
        const {orderNumber, totalAmount, products, userId, quantity} = order //products es una lista de productos con su detalle 
        
        const orderCreated= await Order.create({
            orderNumber,
            totalAmount
        })
        await orderCreated.setUser(userId);
        await products.map(async(product) => {
            await orderCreated.addProduct(product.id, { through: { quantity : product.Cart.stock } } );
        });
        return "Order created"
    }
    async getAllOrders(){
        const orders = await Order.findAll({
            include : [
                {
                    model : Product,
                    attributes : ['name', 'description', "image", "price"]
                }
            ]
            });
        
            if(!orders){
                throw new Error("No se encontraron ordenes del usuario");
            }
        return orders;
    }
    async getOrderById(idUser){
        const  UserId = idUser
        const orders = await Order.findAll({where : {UserId},
        include : [
            {
                model : Product,
                attributes : ['name', 'description', "image", "price"]
            }
        ]
        });
    
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