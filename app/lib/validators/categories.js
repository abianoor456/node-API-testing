const Joi = require('joi');
const validateRequest = require('./index').validateRequest;

exports.addCategory = (req, res, next) => {
  console.log('in addCategory validator')
  const schema = Joi.object({
    title: Joi.string().required().lowercase(),
    description: Joi.string().required(),
  });
  validateRequest(req, res, next, schema);
}
