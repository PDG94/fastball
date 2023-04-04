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

 export const fetchOrderById = createAsyncThunk('product/fetchOrderById', async (orderId)=> {
    try {
      console.log("orderId", orderId);
    
     const order = await axios.get(`/order//${orderId}`);
     return order.data
    } catch (error) {
     throw error;
    }
 });