const Joi = require('joi');

const id = Joi.any();
const name = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(8);


const createUserSchema = Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
  
});

const updateUserSchema = Joi.object({
    email: email,
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }