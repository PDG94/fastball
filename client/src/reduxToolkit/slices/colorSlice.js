const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllColors, createColors, updateColors } = require('./../actions/colorAction')

const initialState = {
    allColors : [],
    status: ''
}
const colorSlice = createSlice({
    name : "colors",
    initialState,
    reducers : {
        getAllColors : (state, action) => {
            state.allColors = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(getAllColors.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(getAllColors.fulfilled, (state,action)=> {
            state.allColors = action.payload
            state.status = 'fulfilled';
        })
        builder.addCase(getAllColors.rejected, (state,action)=> {
            state.status = 'rejected'
        })
        
        //create 
        builder.addCase(createColors.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(createColors.fulfilled, (state,action)=> {
            state.status = 'fulfilled';
        })
        builder.addCase(createColors.rejected, (state,action)=> {
            state.status = 'rejected'
        })
        //update
        builder.addCase(updateColors.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(updateColors.fulfilled, (state,action)=> {
            state.status = 'fulfilled';
        })
        builder.addCase(updateColors.rejected, (state,action)=> {
            state.status = 'rejected'
        })

    }
})

module.exports = colorSlice.reducer
module.exports.colorAction = colorSlice.actions
