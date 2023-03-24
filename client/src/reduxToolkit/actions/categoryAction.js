import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;


export const fetchCategory = createAsyncThunk('category/fetchCategory', async ()=> {
   try {
    const categories = await axios.get('/category/')
    return categories.data
   } catch (error) {
    throw error;
   }
});

