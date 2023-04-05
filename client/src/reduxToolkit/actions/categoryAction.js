import axios from 'axios';
import {headers} from './../../Auth/headers';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;


export const fetchCategory = createAsyncThunk('category/fetchCategory', async ()=> {
   try {
    const categories = await axios.get('/category/')
    return categories.data
   } catch (error) {
    throw error;
   }
});

export const createCategory = createAsyncThunk('category/createCategory',
   async function(body){
      const categoryCreated = await axios.post(`/category/create`, body
      )
      return categoryCreated
   }
)

export const deleteCategory = createAsyncThunk('category/deleteCategory',
   async function(id){
      const categoryDeleted = await axios.delete(`/category/delete/${id}`, headers())
      return categoryDeleted
   }
)