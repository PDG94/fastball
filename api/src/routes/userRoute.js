const userRouter = require('express').Router();
const UsersHandler = require('./../handlers/usersHandler')
const validatorHandler = require('./../middleware/validatorHandler');
const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = new UsersHandler()
const {updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/userSchema')

userRouter.get('/', getAllUsers);
userRouter.get('/:id', validatorHandler(getUserSchema, 'params'), getUserById);
userRouter.post('/',  validatorHandler(createUserSchema, 'body'), createUser);
userRouter.patch('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), updateUser);
userRouter.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser);

module.exports = userRouter;