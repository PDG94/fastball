require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


//DB_NAME is the database name
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Category, Product, User, Cart, Order,Color,Size, Review, OderProduct
} = sequelize.models;
// Relations of products
Category.hasMany(Product);
Product.belongsTo(Category);



Product.belongsToMany(Color, { through: "ProductColor" });
Color.belongsToMany(Product, { through: "ProductColor" });
Product.belongsToMany(Size, { through: "ProductSize" });
Size.belongsToMany(Product, { through: "ProductSize" });


//Relation cart between users and products
User.belongsToMany(Product, { through: "Cart" });
Product.belongsToMany(User, { through: "Cart" });

//Relations with orders
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through : 'OderProduct'});
Product.belongsToMany(Order, {through : 'OderProduct'});

Review.belongsTo(Product)
Product.hasMany(Review);
Review.belongsTo(User)
User.hasMany(Review);
Review.belongsTo(OderProduct)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};