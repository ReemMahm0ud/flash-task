const jwt = require("jsonwebtoken");

const verifyTokenMiddleware = (req, res, next) => {
  // Check if authorization header has been provided
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return res
      .status(403)
      .json({ message: "Invalid authorization or not authorized" });
  }

  // Extract the token from the header
  const token = req.headers.authorization.split(" ")[1];

  // Verify the token
  jwt.verify(token, process.env.JWT_KEY, (err, data) => {
    if (err) {
      return res.status(498).json({ message: "Invalid token or it's expired" });
    }

    // Token is valid, proceed to the next middleware or route handler
    next();
  });
};

module.exports = verifyTokenMiddleware;
