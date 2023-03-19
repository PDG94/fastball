import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;


export const fetchProduct = createAsyncThunk('product/fetchProduct', async ()=> {
   try {
    const products = await axios.get('https://fastball-production.up.railway.app/api/product/')
    return products.data
   } catch (error) {
    throw error;
   }
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId)=> {
    try {
     const product = await axios.get(`https://fastball-production.up.railway.app/api/product/getProductById/${productId}`);
     return product.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchCreateProduct = createAsyncThunk('product/fetchCreateProduct', async (product) => {
    try {
       const productCreated = await axios.post('https://fastball-production.up.railway.app/api/product', product)
       return productCreated 
    } catch (error) {
        throw error
    }
 });

export const fetchUpdateProduct = createAsyncThunk('product/fetchUpdateProduct', async (values)=> {
    try {
     const product = await axios.patch('' `https://fastball-production.up.railway.app/api/product/editProduct/%${values.product._id}`, values );
     return product.data
    } catch (error) {
     throw error;
    }
 });

export const fetchDeleteProduct = createAsyncThunk('product/fetchDeleteProduct', async (productId)=> {
    try {
     const product = await axios.delete('' `https://fastball-production.up.railway.app/api/product/editProduct/%${productId}`,  );
     return product.data
    } catch (error) {
     throw error;
    }
 });

