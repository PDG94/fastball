const express = require('express');
const routerReview = express.Router();
const reviewHandler = require('./../handlers/reviewHandler');
const {getReviewsByUsr, getReviewsByProduct, getReviewsPending, updateReview, deleteReview} = new reviewHandler();

routerReview.get('/getReviewsByUsr/:idUsr', getReviewsByUsr);
routerReview.get('/getReviewsByProduct/:idProduct',getReviewsByProduct);
routerReview.get('/getReviewsPending/:idUsr',getReviewsPending);
routerReview.patch('/updateReview/:idReview',updateReview);
routerReview.delete('/deleteReview/:idReview',deleteReview);

module.exports = routerReview;