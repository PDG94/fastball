const jwt = require('jsonwebtoken');


const singToken = (user) => {
    const jwtSecret = process.env.secret
    const token = jwt.sign({
        _id: user.id,
        name: user.name,
        lastName : user.lastName,
        email: user.email,
        profilePic:user.profilePic,
        city: user.city,
        contry: user.contry,
        address: user.address,
        isAdmin: user.isAdmin
    }, jwtSecret);
    return token

}

const decode = (token)=>{
    const user = jwt.decode(token);
    return user
}

module.exports = singToken