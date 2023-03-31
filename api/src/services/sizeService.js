const { Size } = require("../bd/db");
class SizeService {
    constructor() {

    }
    async getAllSizes() {
        try {
            const colors = await Size.findAll();
            return colors
        } catch (error) {
            return error.message;
        }
    }
    async createSizes(size) {
        try {
            const newSize = await Size.create({
                name:size.name
            });
            return newSize;
        } catch (error) {
            return error.message;
        }
    }
    async updateSizes(id,size) {
        try {
            const sizes = await Size.findByPk(id);
            const edit=await sizes.update(size);
            return edit;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = SizeService;