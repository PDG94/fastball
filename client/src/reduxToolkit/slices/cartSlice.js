const createSlice = require('@reduxjs/toolkit').createSlice
const { getAllProductsOnCart,addProductInCart,updateCart,deleteCart,totalMountProducts } = require('./../actions/cartAction')

const initialState = {
    allProductsCart : [],
    totalMount:0,
    selectedProducts:[]
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
            
            state.totalMount = 0;
            state.allProductsCart.forEach((element) => {
            state.totalMount += element.price * element.Cart.stock;}) // sum the price of each element in the cart
            state.status = 'success';
        })
        builder.addCase(addProductInCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        //para los checkouts
        builder.addCase(totalMountProducts.fulfilled, (state, action) => {
            if(state.totalMount===0){
                console.log(action.payload)
                state.totalMount=action.payload;   
            }
            state.status = 'success';
        }) 
        // builder.addCase(selectedProducts.fulfilled, (state,action)=> {
        //     state.allProductsCart = action.payload
        //     state.status = 'success';
        // })


        builder.addCase(getAllProductsOnCart.pending, (state, action)=> {
            state.status = 'success';
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
            state.totalMount=0;
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
            state.totalMount = 0;
            state.allProductsCart.forEach((element) => {
                state.totalMount += (element.price-(element.price*(element.discount/100))) * element.Cart.stock; // sum the price of each element in the cart
            });
            state.status = 'success';
        })
        builder.addCase(updateCart.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
})

module.exports = cartSlice.reducer
module.exports.cartActions = cartSlice.actions
