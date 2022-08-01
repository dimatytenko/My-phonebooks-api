const Joi = require("joi");

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().min(3).max(30).required().messages({
    "any.required": "missing required email field",
  }),
  number: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
  favorite: Joi.boolean(),
});

const schemaUpdateStatusContact = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

module.exports = {
  schemaCreateContact,
  schemaUpdateStatusContact,
};
