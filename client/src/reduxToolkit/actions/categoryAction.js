import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
// const {getAllCategories} = require('./../slices/categorySlice').categoryActions

export const fetchCategory = createAsyncThunk('category/fetchCategory', async ()=> {
   try {
    const categories = await axios.get('https://fastball-production.up.railway.app/api/category/')
    return categories.data
   } catch (error) {
    throw error;
   }
});

