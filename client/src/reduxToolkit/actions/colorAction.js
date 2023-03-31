import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
export const getAllColors = createAsyncThunk('colors/getAllColors', async ()=> {
    console.log("colors")
    try {
        const colors= await axios.get(`/colors/getAllColors`);
        return colors.data;
    } catch (error) {
        return error.message
    }
});