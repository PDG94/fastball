const { User, Product, Review } = require("../bd/db");

class reviewService {
    constructor(){

    }

    async getReviewsByUsr(idUsr){
        const reviews = await Review.findAll({
            where: {
                active: true,
                UserId: idUsr
            },
        });
        return reviews;
    }

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
            ],
            order: [
                ["id","DESC"]
            ]
        });
        return reviews;
    }

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

    async getDetailReview(idReview){
        const review = Review.findByPk(idReview)
        return review
    }

    async updateReview(idReview, changes){ 
        if(changes.status !== 'Done' && changes.status !== 'Declined')
            throw new Error("The status is wrong")

        const reviewUpdated = await  Review.findOne({where : {id: idReview}})
        
        if(!reviewUpdated) 
            throw new Error("Review not found")
        
        if(changes.status==='Done'){
            console.log('Review Update', reviewUpdated);
            const product = await Product.findByPk(reviewUpdated.ProductId)
            console.log('PRODUCT Update review', product);
            const newCantReviews = product.cantReviews + 1
            const newPromScore = (((product.cantReviews * product.score) + changes.score) / (newCantReviews)).toFixed(2)
            await product.update( 
                { 
                    cantReviews: newCantReviews,
                    score: newPromScore
                }
            )
        }

        await reviewUpdated.update(changes);
        return reviewUpdated;
    }

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