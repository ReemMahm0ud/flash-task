const jwt = require("jsonwebtoken");

const authApi = (req, res) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(403)
        .json({ message: "Invalid authorization or not authorized" });
    }
    const authheader = req.headers.authorization.split(" ")[1];
    const decoded = atob(authheader);
    const [clientId, clientSecret] = decoded.split(":");
    if (
      clientId !== process.env.CLIENT_ID &&
      clientSecret !== process.env.CLIENT_SECRET
    ) {
      return res.status(401).json({
        error: "INVALID_CLIENT",
        error_description: "Invalid client credentials.",
      });
    } else {
      const token = jwt.sign(
        {
          clientId,
          clientSecret,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "oops! something went wrong, please try again",
    });
  }
};

module.exports = {
  authApi,
};
