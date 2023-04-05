const createSlice = require('@reduxjs/toolkit').createSlice
const { fetchOrder, fetchOrderById, fetchOneOrder } = require('./../actions/orderAction')

const initialState = {
    allOrders : [],
    orderDetail : {},
    status : null,
    singleOrder:{},
}

const orderSlice = createSlice({
    name : "order",
    initialState,
    reducers:{
        
    },
    extraReducers : (builder)=>{

        builder.addCase(fetchOrder.pending, (state, action)=>{
            state.status = 'pending';
        })
        builder.addCase(fetchOrder.fulfilled, (state, action)=>{
            state.allOrders=action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchOrder.rejected, (state, action)=>{
            state.status = 'rejected';
        })

        builder.addCase(fetchOrderById.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchOrderById.fulfilled, (state,action)=> {
            state.orderDetail = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchOrderById.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        builder.addCase(fetchOneOrder.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchOneOrder.fulfilled, (state,action)=> {
            state.singleOrder = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchOneOrder.rejected, (state,action)=> {
            state.status = 'rejected'
        })



    }
})

module.exports = orderSlice.reducer
module.exports.orderActions = orderSlice.actions