const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllProductsOnCart } = require('./../actions/cartAction')
// const { getAllProductsOnCart,addProductInCart,updateCart,deleteCart } = require('./../actions/cartAction')

const initialState = {
    allProductsCart : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        getAllProducts : (state, action) => {
            state.allProducts = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(addProductInCart.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(addProductInCart.fulfilled, (state,action)=> {
            state.allProductsCart = [];
            state.allProductsCart = action.payload;
            console.log(action.payload)
            state.status = 'success';
        })
        builder.addCase(addProductInCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })


        builder.addCase(getAllProductsOnCart.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(getAllProductsOnCart.fulfilled, (state,action)=> {
            state.allProductsCart = action.payload
            state.status = 'success';
        })
        builder.addCase(getAllProductsOnCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        builder.addCase(deleteCart.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(deleteCart.fulfilled, (state,action)=> {
            state.allProductsCart = [];
            state.allProductsCart = action.payload;
            console.log(action.payload)
            state.status = 'success';
        })
        builder.addCase(deleteCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })


        builder.addCase(updateCart.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(updateCart.fulfilled, (state,action)=> {
            state.allProductsCart = [];
            state.allProductsCart = action.payload;
            console.log(action.payload)
            state.status = 'success';
        })
        builder.addCase(updateCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
})

module.exports = cartSlice.reducer
module.exports.cartActions = cartSlice.actions
