const userRouter = require('express').Router();

const UsersHandler = require('./../handlers/usersHandler')

const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = new UsersHandler()

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser)

module.exports = userRouter