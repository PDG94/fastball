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
    async createColors(color) {
        try {
            const newColor = await Color.create({
                name:color.name,
                codigo:color.codigo
            });
            return newColor
        } catch (error) {
            return error.message;
        }
    }
    async updateColors(id,color) {
        try {
            const colors = await Color.findByPk(id);
            const edit=await colors.update(color);
            return edit
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ColorService;