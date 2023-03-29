const { Color } = require("../bd/db");
class ColorService {
    constructor() {

    }
    async getAllColors() {
        try {
            const colors = await Color.findAll();
            return colors
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ColorService;