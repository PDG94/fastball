const createSlice = require('@reduxjs/toolkit').createSlice
const {fetchProductById, fetchProduct, fetchCreateProduct} = require('../actions/productAction')

const initialState = {
    allProducts : [],
    productDetail : {},
    currentPage : 1,
    status : null,
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        getAllGames : (state, action) => {
            state.allProducts = action.payload
        },
        changePage : (state, action)=> {
            state.currentPage = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchProduct.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchProduct.fulfilled, (state,action)=> {
            state.allProducts = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchProduct.rejected, (state,action)=> {
            state.status = 'rejected'
        })
        builder.addCase(fetchCreateProduct.pending, (state,action)=>{
            state.status = 'pending';
        })
        
        builder.addCase(fetchCreateProduct.fulfilled, (state,action)=> {
            state.status = 'success';
            state.allProducts = state.allProducts.push(action.payload)
        })
        builder.addCase(fetchCreateProduct.rejected, (state, action)=> {
            state.status = 'rejected'
        })


        builder.addCase(fetchProductById.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchProductById.fulfilled, (state,action)=> {
            state.productDetail = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchProductById.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
})

module.exports = productSlice.reducer
module.exports.productActions = productSlice.actions
