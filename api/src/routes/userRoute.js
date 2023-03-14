
const express = require('express');
const UserService = require('./../services/userService');

const router = express.Router();
const service = new UserService();


router.get('/', async (req,res,next)=>{
    try {
        const users = await service.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', async (req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await service.getOneUser(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req,res,next)=>{
    try {
        const body = req.body;
        const newUser = await service.createUser(body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error)
    }
});

router.patch('/:id', async (req, res, next )=> {
    try {
        const {id} = req.params;
        const body = req.body;
        const userUpdated = await service.updateUser(id, body);
        res.status(200).json(userUpdated);
    } catch (error) {
        next(error);
    }
});


router.delete('/:id', async (req,res,next)=>{
    try {
        const {id}= req.params;
        await service.deleteUser(id);
        res.status(201).json({id});
    } catch (error) {
        next(error);
    }
})

module.exports = router