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



// recibe=>       {
//                  "name":"XL",
//                }
export const createSizes = createAsyncThunk('sizes/createSizes', async (obj)=> {
    try {
        const sizes= await axios.get(`/sizes/createSizes`,obj);
        return sizes.data;
    } catch (error) {
        return error.message
    }
});

// recibe=>       {
//                  "id":"idsize"
//                   size:{
//                      "name":"XL",
//                          }
//                }
export const updateSizes = createAsyncThunk('sizes/updateSizes', async (obj)=> {
    try {
        const sizes= await axios.get(`/sizes/updateSizes/${obj.id}`,obj.size);
        return sizes.data;
    } catch (error) {
        return error.message
    }
});