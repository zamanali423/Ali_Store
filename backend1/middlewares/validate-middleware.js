const validate = (schema) => async (req, res, next) => {
  try {
    const schemaBody = await schema.parseAsync(req.body);
    req.body = schemaBody;
    next();
  } catch (err) {
    // res.status(400).json({ msg: err.errors[0].message });
    const error = {
      status: 400,
      message: err.errors[0].message,
      extraDetails: "Fill input fields properly",
    };

    next(error);
  }
};

module.exports = validate;
