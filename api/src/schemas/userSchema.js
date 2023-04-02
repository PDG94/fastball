const Joi = require('joi');

const id = Joi.any();
const name = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(8);
const isAdminData = Joi.any();
const profilePic = Joi.string();

const createUserSchema = Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
  
});

const updateUserSchema = Joi.object({
    email: email,
    profilePic: profilePic,
    isAdmin: isAdminData
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }