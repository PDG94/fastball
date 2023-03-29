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
    async createSizes (req,res,next){
        console.log("size")
        try {
            const size = await service.createSizes(req.body);
            res.json(size);
        } catch (error) {
            next(error.message)
        }
    }
    async updateSizes (req,res,next){
        console.log("size")
        try {
            const size = await service.updateSizes(req.params.id,req.body);
            res.json(size);
        } catch (error) {
            next(error.message)
        }
    }
}

module.exports = SizeHandler