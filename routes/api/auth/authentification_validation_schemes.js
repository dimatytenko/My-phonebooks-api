const Joi = require("joi");

const schemaAuthUser = Joi.object({
  name: Joi.string(),
  password: Joi.string()
    .min(9)
    .max(21)
    .required()
    .messages({
      "any.required": " missing required field {{#label}}",
      "string.min":
        "{{#label}} length must be at least {{#limit}} characters long!!!",
      "string.max":
        "{{#label}} length must be less than or equal to {{#limit}} characters long!!!",
    }),
  email: Joi.string().required().messages({
    "any.required": " missing required field {{#label}}",
  }),
});

const schemaEmailUser = Joi.object({
  email: Joi.string().required().messages({
    "any.required": " missing required field {{#label}}",
  }),
});

module.exports = {
  schemaAuthUser,
  schemaEmailUser,
};
