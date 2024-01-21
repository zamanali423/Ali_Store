const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something wrong check your data";
  const extraDetails = err.extraDetails || "Backend problem";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
