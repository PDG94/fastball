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

// recibe=>       {
//                  "name":"red",
//                  "codigo":"#CODIGOCOLOR"
//              }
export const createColors = createAsyncThunk('colors/createColors', async (obj)=> {
    try {
        const colors= await axios.get(`/colors/createColors`,obj);
        return colors.data;
    } catch (error) {
        return error.message
    }
});

// recibe=>       {
//                  "id":"red",
//                  "color":{
//                         "name":"orange",
//                          "codigo":"#CODIGOCOLOR"
//                     }
//  
export const updateColors = createAsyncThunk('colors/updateColors', async (obj)=> {
    try {
        const colors= await axios.get(`/colors/updateColors/${obj.color}`,obj.color);
        return colors.data;
    } catch (error) {
        return error.message
    }
});