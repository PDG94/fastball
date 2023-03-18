const createSlice = require('@reduxjs/toolkit').createSlice
const { fetchCategory } = require('./../actions/categoryAction')

const initialState = {
    allCategories : [],
    status: ''
}

const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers : {
        getAllCategories : (state, action) => {
            state.allCategories = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchCategory.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchCategory.fulfilled, (state,action)=> {
            state.allCategories = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchCategory.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
})

module.exports = categorySlice.reducer
module.exports.categoryActions = categorySlice.actions
