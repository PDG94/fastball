import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

export const fetchReviewsByUsrId = createAsyncThunk('review/fetchReviewsByUsrId', async (userId)=> {
    try {
     const reviews = await axios.get(`/review//getReviewsByUsr/${userId}`)
     return reviews.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchReviewsByProductId = createAsyncThunk('review/fetchReviewsByProductId', async (productId)=> {
    try {
     const reviews = await axios.get(`/review/getReviewsByProduct/${productId}`);
     return reviews.data
    } catch (error) {
     throw error;
    }
 });

 export const fetchReviewsPending = createAsyncThunk('review/fetchReviewsPending', async ({userId, productId})=> {
    try {
     const reviews = await axios.get(`/review/getReviewsPending/${userId}${productId?`?idProduct=${productId}`:''}`);
     return reviews.data
    } catch (error) {
     throw error;
    }
 });

 export const updateReview = createAsyncThunk('review/updateReview', async ({reviewId, changes, user})=> {
    try {
     const review = await axios.patch(`/review//updateReview/${reviewId}`, changes)
     review.data.User = user
     return review.data
    } catch (error) {
     throw error;
    }
 });

 export const deleteReview = createAsyncThunk('review/deleteReview', async (reviewId)=> {
    try {
     const review = await axios.delete(`/review//deleteReview/${reviewId}`)
     return review.data
    } catch (error) {
     throw error;
    }
 });

