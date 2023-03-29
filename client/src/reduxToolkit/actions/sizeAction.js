import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
export const getAllSizes = createAsyncThunk('sizes/getAllSizes', async ()=> {
    try {
        const size = await axios.get(`/sizes/getAllSizes`);
        return size.data;
    } catch (error) {
        return error.message
    }
});