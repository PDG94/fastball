const Joi = require('joi');

const id = Joi.any();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const usersVisits = Joi.any();
const soldAmount = Joi.any();
const discount = Joi.number().integer();
const score = Joi.number();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const stock = Joi.number().integer();
const categories = Joi.any();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  stock:stock.required(),
  categories:categories.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  discount: discount,
  soldAmount: soldAmount,
  usersVisits: usersVisits,
  score: score
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const getQueryProductSchema = Joi.object({
  userId: id
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: Joi.when('price_min', {
    is: Joi.exist(),
    then: price_max.required(),
  })
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, getQueryProductSchema, queryProductSchema  }