const validateMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const missingFields = error.details.map((detail) => detail.context.key);
      return res.status(400).json({
        message: "missing field(s) or validation errors",
        missingFields,
      });
    }
    next();
  };
};

module.exports = validateMiddleware;
