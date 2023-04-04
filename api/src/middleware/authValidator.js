const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
   
    // const authHeaderArray = bearer.split(' ');
    // const token = authHeaderArray[1];
    // console.log(bearer)
    if (!token) {
        return res.status(401).json({ messaje: "No se proporcionó un token de autenticación" })
    }
    jwt.verify(token, process.env.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token Invalido o expirado" })
        }
        req.user = decoded
        next()
    });
};

function isAdmin(req,res, next){
    verifyToken(req,res, ()=> {
        if(req.user.isAdmin){
            next()
        }else {
            res.status(401).json("Usuario no autorizado")
        };
    });
};

function isUser(req,res,next){
    verifyToken(req,res, ()=> {
        if(req.user){
            next();
        }else{
            res.status(401).json('Usuario no autenticado');
        };
    });
};


module.exports= {verifyToken, isAdmin, isUser};