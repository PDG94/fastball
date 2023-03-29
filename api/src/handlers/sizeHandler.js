const SizeService = require('./../services/sizeService');
const service = new SizeService();
class SizeHandler {
    constructor() {}
    async getAllSizes (req,res,next){
        console.log("size")
        try {
            const size = await service.getAllSizes();
            res.json(size);
        } catch (error) {
            next(error.message)
        }
    }
}

module.exports = SizeHandler