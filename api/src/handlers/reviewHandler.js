
const reviewService = require('./../services/reviewService');
const service = new reviewService();

class reviewHandler{
    constructor(){}

    async getReviewsByUsr(req,res,next){  
        try {
            const {idUsr} = req.params;
            const reviews = await service.getReviewsByUsr(idUsr);
            res.status(200).send(reviews);
        } catch (error) {
            res.send(error.message);
        }
    }
    
    async getReviewsByProduct(req,res,next){  
        try {
            const {idProduct} = req.params;
            console.log(idProduct);
            const reviews = await service.getReviewsByProduct(idProduct);
            res.status(200).send(reviews);
        } catch (error) {
            res.send(error.message);
        }
    }

    async getReviewsPending(req,res,next){  
        try {
            const {idUsr} = req.params;
            const {idProduct} = req.query;
            const reviews = await service.getReviewsPending(idUsr, idProduct);
            res.status(200).send(reviews);
        } catch (error) {
            res.send(error.message);
        }
    }

    async getDetailReview(req,res,next){  
        try {
            const {idReview} = req.params;
            const review = await service.getDetailReview(idReview);
            res.status(200).send(review);
        } catch (error) {
            res.send(error.message);
        }
    }

    async updateReview(req,res,next){
        try {
            const {idReview}=req.params;
            const changes = req.body;
            const review = await service.updateReview(idReview, changes);
            res.status(200).send(review);
        } catch (error) {
            res.send(error.message);
        };
    };

    async deleteReview(req,res,next){
        try {
            const {idReview} = req.params;
            const reviewDeleted = await service.deleteReview(idReview);
            res.status(200).send(reviewDeleted);
        } catch (error) {
            res.send(error.message);
        };
    };
};

module.exports = reviewHandler;