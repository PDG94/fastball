const userRouter = require('express').Router();
const UsersHandler = require('./../handlers/usersHandler')
// const validatorHandler = require('./../middleware/validatorHandler');
const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = new UsersHandler()
// const {updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/userSchema')

// userRouter.get('/', getAllUsers);
// userRouter.get('/:id', validatorHandler(getUserSchema, 'params'), getUserById);
// userRouter.post('/',  validatorHandler(createUserSchema, 'body'), createUser);
// userRouter.patch('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), updateUser);
// userRouter.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser);

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;