const UserService = require('./../services/userService');
const service = new UserService();
const { User } = require("../bd/db");
const bcrypt = require('bcrypt');
const singToken = require('../utils/jwt/createToken');
class UsersHandler {
    constructor() { }

    async getAllUsers(req, res, next) {
        try {
            const users = await service.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error)
        }
    }

    async getUserById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await service.getOneUser(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            const body = req.body;
            const newUser = await service.createUser(body);
            res.status(201).json(newUser);
        } catch (error) {
            res.send(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const {changes} = req.body;
            const userUpdated = await service.updateUser(id, changes);
            res.status(200).json(userUpdated);
        } catch (error) {
            res.json(error)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            await service.updateUser(id, { active: false });
            res.status(201).json({ id });
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async registerUser(req, res, next) {
        try {
            const { name, lastName, profilePic, email, password, address, contry, city } = req.body;
            if (!name || !lastName || !email || !password || !address || !city || !contry) {
                throw new Error('Missing Data');
            }
            console.log('pasó')
            const userExisted = await User.findOne({
                where: { email }
            })
            if (userExisted) throw new Error('User already exist!');
            const userTemplate = {
                name,
                lastName: lastName,
                profilePic,
                email,
                password,
                address,
                contry,
                city
            }
            userTemplate.password = await bcrypt.hash(userTemplate.password, 10);
            const user = await service.createUser(userTemplate);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).send(error.message);
        }

    }
    async loginUser(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await service.loginUser(email, password);
            //space for email notification
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async loginAndRegisterGoogle(req, res, next) {
        const credentials = req.body;
        const user = credentials.user
        console.log("handler")
        const loginandRegister = await service.loginAndRegisterGoogle(user)
        res.status(200).send(loginandRegister)
    };
}

module.exports = UsersHandler