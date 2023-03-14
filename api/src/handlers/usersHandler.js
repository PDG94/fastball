const UserService = require('./../services/userService');
const service = new UserService();

class UsersHandler {
    constructor() {}

    async getAllUsers(req,res,next){
        try {
            const users = await service.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error)
        }
    }

    async getUserById(req,res,next){
        try {
            const {id} = req.params;
            const user = await service.getOneUser(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async createUser(req,res,next){
        try {
            const body = req.body;
            const newUser = await service.createUser(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next ){
        try {
            const {id} = req.params;
            const body = req.body;
            const userUpdated = await service.updateUser(id, body);
            res.status(200).json(userUpdated);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req,res,next){
        try {
            const {id}= req.params;
            await service.updateUser(id, { active : false});
            res.status(201).json({id});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UsersHandler