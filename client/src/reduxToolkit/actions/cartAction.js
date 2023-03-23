import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const { createAction }= require ('@reduxjs/toolkit');
export const getAllProductsOnCart = createAsyncThunk('cart/getAllProductsOnCart', async (idUser)=> {
    try {
        //alert(idUser,"Usuario id");
        const productsOnCart = await axios.get(`/cart/getCart/${idUser}`);
        return productsOnCart.data;
    } catch (error) {
        return error.message
    }
});
export const updateCartProducts = createAction('cart/updateCartProducts');
// El argumento objeto debe contener {idUser, idProduct, sotck}
export const addProductInCart = createAsyncThunk('cart/addProductInCart', async (objeto)=> {
    try {
        const productsOnCart = await axios.post('/cart/createCart', objeto);
        return productsOnCart.data;
    } catch (error) {
        return error.message
    }
});

// El argumento objeto debe contener {idUser, idProduct, stock}
export const updateCart = createAsyncThunk('cart/updateCart', async (objeto)=> {
    try {
        const productsOnCart = await axios.post('/cart/updateCart', objeto);
        return productsOnCart.data;
    } catch (error) {
        return error.message
    }
});

// El argumento objeto debe contener {idUser, idProduct}
export const deleteCart = createAsyncThunk('cart/deleteCart', async (objeto)=> {
    try {
        const productsOnCart = await axios.post('/cart/deleteCart', objeto);
        return productsOnCart.data;
    } catch (error) {
        return error.message;
    }
});