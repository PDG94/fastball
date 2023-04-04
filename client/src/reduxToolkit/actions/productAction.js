import axios from 'axios';
import {headers} from './../../Auth/headers';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;



export const fetchProduct = createAsyncThunk('product/fetchProduct', async ()=> {
   try {
    const products = await axios.get('/product/')
    return products.data
   } catch (error) {
    throw error;
   }
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async ({productId, userId})=> {
    try {
      console.log("productId", productId);
      console.log("userId", userId);
     const product = await axios.get(`/product/getProductById/${productId}${userId?'?userId='+ userId : ''}`);
     return product.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchCreateProduct = createAsyncThunk('product/fetchCreateProduct', async (product) => {
    try {
      console.log(product);
       const productCreated = await axios.post('/product', product, headers())
       return productCreated 
    } catch (error) {
        throw error
    }
 });

export const fetchUpdateProduct = createAsyncThunk('product/fetchUpdateProduct', async (values)=> {
    try {
      console.log({values})
     const product = await axios.patch(`/product/editProduct/%${values.id}`, values , headers());
     return product.data
    } catch (error) {
     throw error;
    }
 });

export const fetchDeleteProduct = createAsyncThunk('product/fetchDeleteProduct', async (productId)=> {
    try {
     const product = await axios.delete(`/product/editProduct/%${productId}`, headers() );
     return product.data
    } catch (error) {
     throw error;
    }
 });

