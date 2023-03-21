const { Product, User } = require("../bd/db");



class CartService {
    constructor() {

    }
    async addProductInCart(idProduct, IdUser, stock) {
        try {
            const user = await User.findByPk(idUser);
            const product = await Product.findByPk(idProduct);
            if (!user || !product) {
                return !user ? "user not found" : "Product not found";
            };
            await User.addProduct(product, { through: { stock:stock?stock:1} });
            return "Product added into a Cart";
        } catch (error) {
            return error
        }
    }
    // postVideogame:(game,genres)=>{//Crear nuevo videojuego recibiendo un game por parametro, y los id de los genres para la relacion
    //     const {name,description,platforms,image,releaseDate,rating}=game;
    //     return new Promise(async(resolve,reject)=>{
    //         if (!name || !platforms || !image || !releaseDate || !rating) {
    //             reject(Error('Faltan datos obligatorios'));
    //           }
    //           try {
    //             // Crear una nueva instancia de Videogame con los datos recibidos
    //             const newVideogame =await Videogame.create({
    //               name,
    //               description,
    //               platforms,
    //               image,
    //               releaseDate,
    //               rating:parseFloat(rating),
    //             });
    //             // Relacionar el nuevo videojuego con los genres respectivos
    //             await newVideogame.addGenres(genres);// genres - videogames [1,2,3]
    //             resolve(newVideogame);
    //         }catch(error){
    //             reject(error)
    //         }
    //     })
    // // },
    async getAllProductsOnCart() {

    }
    async updateCart(idproduct, idUser) {

    }
    async deleteCart(idProduct, idUser) {

    }
}

module.exports = CartService;