const { User, Product, Review } = require("../bd/db");

class reviewService {
    constructor(){

    }
// ok
    async getReviewsByUsr(idUsr){
        const reviews = await Review.findAll({
            where: {
                active: true,
                UserId: idUsr
            },
        });
        return reviews;
    }
// ok
    async getReviewsByProduct(idProduct){
        const reviews = await Review.findAll({
            where: {
                active: true,
                status: 'Done',
                ProductId: idProduct
            },
            include : [
                {
                    model : User,
                    attributes : ['name',"profilePic"]
                }
            ]
        });
        return reviews;
    }
// Ok
    async getReviewsPending(idUsr, idProduct){
        let reviews
        if(idProduct){
            reviews = await Review.findAll({
                where: {
                    active: true,
                    status: 'Pending',
                    ProductId: idProduct,
                    UserId: idUsr
                }
            });
        } else{
           reviews = await Review.findAll({
                where: {
                    active: true,
                    status: 'Pending',
                    UserId: idUsr
                }
            });
        }
        return reviews;
    }
// ok
    async updateReview(idReview, changes){ 
        const reviewUpdated = await  Review.findOne({where : {id: idReview}});
        if(!reviewUpdated){
            throw new Error("Review not found");
        };
        await reviewUpdated.update(changes);
        return reviewUpdated;
    }
// ok
    async deleteReview(idReview){
        const reviewrDeleted = await Review.findOne({where : {id:idReview}});
        if(!reviewrDeleted){
            throw new Error("Review not found");
        };
        await reviewrDeleted.update({active:false});
        return "Review disabled successfully";
    }
}

module.exports = reviewService;