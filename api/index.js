const server = require("./src/app");
const {conn} = require("./src/bd/db");
require ('dotenv').config()
const {PORT} = process.env
// const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./../api/src/middleware/errorHandler');

//Middlewares
// server.use(logErrors);
// server.use(errorHandler);
// server.use(boomErrorHandler);
// server.use(ormErrorHandler);

conn.sync({alter:true}).then(()=>{
    server.listen(PORT, () =>{
        console.log("server listening at 3001")
    })
})