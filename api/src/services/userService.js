const boom = require('@hapi/boom');
const { User } = require("../bd/db");

class UserService {
    constructor() {

    }

    async createUser(body) {
        const { id, name, username, profilepic, email } = body;
        const newUser = await User.create({
            id: user_id,
            name,
            username,
            profilepic,
            email,
        })
        return newUser
    }

    async getAllUsers() {
        const users = await User.findAll({
            where: {
                active: true
            },
        })
        return users
    }

    async getUserByEmail(id) {
        const rta = await User.findOne({
            where: { email }
        });
        return rta;
    }

    async findOneUser(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw boom.notFound('user not found');
        }
        return user;
    }

    async updateUser(id, changes) {
        const user = await this.findOne(id);
        const rta = await user.update(changes);
        return rta;
    }

    async deleteUser(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id };
    }
}


module.exports = UserService;