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
}

module.exports = SizeService;