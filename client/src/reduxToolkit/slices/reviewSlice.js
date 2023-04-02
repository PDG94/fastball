const createSlice = require('@reduxjs/toolkit').createSlice
const { fetchReviewsByUsrId, fetchReviewsByProductId, fetchReviewsPending, updateReview, deleteReview } = require('./../actions/reviewAction')

const initialState = {
    reviewsUsr: [],
    reviewsProduct: [],
    reviewsPending : []
}

const reviewSlice = createSlice({
    name : "review",
    initialState,
    reducers:{
        
    },
    extraReducers : (builder)=>{

        builder.addCase(fetchReviewsByUsrId.pending, (state, action)=>{
            state.status = 'pending';
        })
        builder.addCase(fetchReviewsByUsrId.fulfilled, (state, action)=>{
            state.reviewsUsr=action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchReviewsByUsrId.rejected, (state, action)=>{
            state.status = 'rejected';
        })

        builder.addCase(fetchReviewsByProductId.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchReviewsByProductId.fulfilled, (state,action)=> {
            state.reviewsProduct = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchReviewsByProductId.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        builder.addCase(fetchReviewsPending.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchReviewsPending.fulfilled, (state,action)=> {
            state.reviewsPending = action.payload
            state.status = 'success';
        })
        builder.addCase(fetchReviewsPending.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        builder.addCase(updateReview.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(updateReview.fulfilled, (state,action)=> {
            if(state.reviewsPending.length)
                state.reviewsPending = state.reviewsPending.filter( rev => rev.id !== action.payload.id)    
            if(action.payload.status === 'Declined'){
                if(state.reviewsUsr.length)
                    state.reviewsUsr = state.reviewsUsr.filter( rev => rev.id !== action.payload.id)   
            }
            else {
                if(state.reviewsUsr.length)
                    state.reviewsUsr = state.reviewsUsr.map( rev => (rev.id === action.payload.id)? action.payload : rev)
                    state.reviewsProduct.push(action.payload)
            }
            state.status = 'success';
        })
        builder.addCase(updateReview.rejected, (state,action)=> {
            state.status = 'rejected'
        })

        builder.addCase(deleteReview.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(deleteReview.fulfilled, (state,action)=> {
            if(state.reviewsUsr.length)
                state.reviewsUsr = state.reviewsUsr.filter( rev => rev.id !== action.payload.id)
            if(state.reviewsProduct.length)
                state.reviewsProduct = state.reviewsProduct.filter( rev => rev.id !== action.payload.id)
            state.status = 'success';
        })
        builder.addCase(deleteReview.rejected, (state,action)=> {
            state.status = 'rejected'
        })

    }
})

module.exports = reviewSlice.reducer
module.exports.reviewActions = reviewSlice.actions