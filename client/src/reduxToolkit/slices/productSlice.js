const createSlice = require('@reduxjs/toolkit').createSlice
const {fetchProductById, fetchProduct, fetchCreateProduct} = require('./../actions/productAction')

const initialState = {
    allProducts : [],
    filteredProducts: [],
    configFilter: {
        name: '',
        categoryId: '',
        order: 'LPrice',
    },
    productDetail : {},
    currentPage : 1,
    status : null,
}

const orderingProducts = (order, products)=>{
    let typeOrder = '', dirOrder = ''

    switch( order ){
        case 'LPrice': {
            typeOrder = 'price'
            dirOrder = 'asc'
            break
        }
        case 'HPrice': {
            typeOrder = 'price'
            dirOrder = 'desc'
            break
        }
        case 'AZ': {
            typeOrder = 'name'
            dirOrder = 'asc'
            break
        }
        case 'ZA': {
            typeOrder = 'name'
            dirOrder = 'desc'
            break
        }
        default:{
            typeOrder = 'price'
            dirOrder = 'asc'
        }
    }

    return dirOrder === 'asc'
      ? [...products.sort( ( product, nextproduct )=> {
        if( product[ typeOrder ] > nextproduct[ typeOrder ] ) return 1
        if( product[ typeOrder ] < nextproduct[ typeOrder ] ) return -1
        return 0
      })]
      : [...products.sort( ( product, nextproduct )=> {
        if( product[ typeOrder ] > nextproduct[ typeOrder ] ) return -1
        if( product[ typeOrder ] < nextproduct[ typeOrder ] ) return 1
        return 0
      })]
}

const applyFilters = ( filters, products )=> {
    let filteredProducts = products

    if(filters.name)
        filteredProducts = filteredProducts.filter( prod => prod.name.toLowerCase().includes(filters.name.toLowerCase()))
    
    if(filters.categoryId)
        filteredProducts = filteredProducts.filter( prod => prod.CategoryId === filters.categoryId )
    
    return orderingProducts(filters.order, filteredProducts)
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setFilter : (state, action)=> {
            state.configFilter = action.payload
            state.currentPage = 1
            state.filteredProducts = applyFilters( state.configFilter, state.allProducts )
            state.status = 'success';
        },
        changePage : (state, action)=> {
            state.currentPage = action.payload
        },
        clearProductDetail : (state, action)=> {
            state.productDetail = {}
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchProduct.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchProduct.fulfilled, (state,action)=> {
            state.allProducts = action.payload
            state.filteredProducts = applyFilters( state.configFilter, state.allProducts )
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
            state.allProducts.push(action.payload)
            state.filteredProducts = applyFilters( state.configFilter, state.allProducts )
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
