const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllColors } = require('./../actions/colorAction')

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

    }
})

module.exports = colorSlice.reducer
module.exports.colorAction = colorSlice.actions
