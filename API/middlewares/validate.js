const { checkSchema, validationResult } = require("express-validator");

const handleValidation = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();

  const errors = result.array();
  return res.status(400).json({
    error: errors[0].msg,
    errors: errors.map((e) => ({ field: e.path, message: e.msg })),
  });
};

const validate = (schema) => [checkSchema(schema), handleValidation];

module.exports = validate;
module.exports.handleValidation = handleValidation;
