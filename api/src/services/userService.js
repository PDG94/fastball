const boom = require('@hapi/boom');
const { User } = require("../bd/db");
const bcrypt = require('bcrypt');
const singToken = require('./../utils/jwt/createToken');

class UserService {
    constructor() {

    }

    async createUser(body) {

        const { name, lastName, password, profilePic, address, email, city, contry } = body;
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            throw new Error("User already exist");
        }
        const newUser = await User.create({
            name,
            lastName,
            password,
            profilePic,
            email,
            address,
            city,
            contry
        })
        console.log(newUser)
        const token = singToken(newUser);
        return token;

    }

    async loginUser(email, password) {
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            throw new Error("User is not registered")
        }
        console.log({ user })
        const validatorPassword = await bcrypt.compare(password, user.password);
        console.log(validatorPassword)
        if (!validatorPassword) {
            throw new Error("Contraseña incorrecta");
        }
        const token = singToken(user);
        return token;
    }

    async loginAndRegisterGoogle(user) {

        const userFound = await User.findOne({ where: { email: user.email } });
        if (!userFound) {
            const name = user.displayName.split(" ")
            console.log("en Servicio")
            console.log(user)
            const newUser = await User.create({
                name: name[0],
                lastName: name[1],
                profilePic: user.photoUrl,
                email: user.email,
            });
            const token = singToken(newUser);
            //Verificar qué trae en newUser, para el userSlice
            console.log(newUser)
            return token
        }
        console.log(userFound.dataValues);
        const token = singToken(userFound.dataValues);
        return token

    }

    async getAllUsers() {
        const users = await User.findAll();
        return users
    }

    async getUserByEmail(email) {
        const rta = await User.findOne({
            where: { email }
        });
        return rta;
    }

    async getOneUser(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw boom.notFound('user not found');
        }
        return user;
    }

    async updateUser(id, changes) {
        const user = await User.findByPk(id);
       console.log(user)
        const rta = await user.update(changes);
        return rta;
    }

    async deleteUser(id) {
        const user = await this.findByPk(id);
        await user.destroy();
        return { id };
    }

}


module.exports = UserService;