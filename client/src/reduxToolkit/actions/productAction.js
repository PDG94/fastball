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

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId)=> {
    try {
     const product = await axios.get(`/product/getProductById/${productId}`);
     return product.data
    } catch (error) {
     throw error;
    }
 });

export const fetchProductStatsById = createAsyncThunk('product/getProductStatsById', async ({productId, valIsa})=> {
    try {
      console.log("valIsa: ", valIsa);

     const product = await axios.get(`/product/getProductStatsById/${productId}?isa=${valIsa}`);
     return product.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchCreateProduct = createAsyncThunk('product/fetchCreateProduct', async (product) => {
    try {
       const productCreated = await axios.post('/product', product, headers())
       return productCreated 
    } catch (error) {
        throw error
    }
 });

export const fetchUpdateProduct = createAsyncThunk('product/fetchUpdateProduct', async (values)=> {
    try {
     const product = await axios.patch(`/product/editProduct/%${values.product._id}`, values , headers());
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

