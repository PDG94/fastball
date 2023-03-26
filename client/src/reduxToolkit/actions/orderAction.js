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