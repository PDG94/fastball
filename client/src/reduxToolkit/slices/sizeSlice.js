const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllSizes, createSizes, updateSizes } = require('./../actions/sizeAction')

const initialState = {
    allSizes : [],
    status: ''
}

const sizeSlice = createSlice({
    name : "sizes",
    initialState,
    reducers : {
        getAllSizes : (state, action) => {
            state.allSizes = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(getAllSizes.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(getAllSizes.fulfilled, (state,action)=> {
            state.allSizes = action.payload
            state.status = 'fulfilled';
        })
        builder.addCase(getAllSizes.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        //create 
        builder.addCase(updateSizes.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(updateSizes.fulfilled, (state,action)=> {
            state.status = 'fulfilled';
        })
        builder.addCase(updateSizes.rejected, (state,action)=> {
            state.status = 'rejected'
        })

    }
})

module.exports = sizeSlice.reducer
module.exports.sizeAction = sizeSlice.actions
