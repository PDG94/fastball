const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllProductsOnCart } = require('./../actions/cartAction')
// const { getAllProductsOnCart,addProductInCart,updateCart,deleteCart } = require('./../actions/cartAction')

const initialState = {
    allProducts : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        getAlProducts : (state, action) => {
            state.allProducts = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(getAllProductsOnCart.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(getAllProductsOnCart.fulfilled, (state,action)=> {
            state.allProducts = action.payload
            state.status = 'success';
        })
        builder.addCase(getAllProductsOnCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
})

module.exports = cartSlice.reducer
module.exports.cartActions = cartSlice.actions
