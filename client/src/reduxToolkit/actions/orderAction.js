import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;


export const createOrderAction = createAsyncThunk('order/createOrderAction', async (order)=> {
    try {
        //Recibe por body orderNumber, totalAmount, products, userId, quantity
        const orderCreated = await axios.post('/order/create', order);
        return orderCreated
    } catch (error) {
        return error
    }
})

export const fetchOrder = createAsyncThunk('order/fetchOrder', async ()=> {
    try {
     const orders = await axios.get('/order')
     return orders.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchOneOrder = createAsyncThunk('order/fetchOneOrder', 

   async (id)=> {
    const order = await axios.get(`/order/getOneOrder/${id}`, )
    return order
   }

 )

 export const fetchOrderById = createAsyncThunk('order/fetchOrderById', async (orderNumber)=> {
    try {
      console.log("orderId", orderNumber);
     const order = await axios.get(`/order/${orderNumber}`);
     return order.data
    } catch (error) {
        console.log("error",error)
     throw error;
    }
 });