const ColorService = require('./../services/colorService');
const service = new ColorService();
class ColorHandler {
    constructor() {}
    async getAllColors (req,res,next){
        try {
            const colors = await service.getAllColors();
            res.json(colors);
        } catch (error) {
            next(error.message)
        }
    }
    async createColors (req,res,next){
        try {
            const colors = await service.createColors(req.body);
            res.json(colors);
        } catch (error) {
            next(error.message)
        }
    }

    async updateColors (req,res,next){
        try {
            const colors = await service.updateColors(req.params.id,req.body);
            res.json(colors);
        } catch (error) {
            next(error.message)
        }
    }
}

module.exports = ColorHandler