const jwt = require("jsonwebtoken");

// Authentication API controller
const authApi = (req, res) => {
  try {
    // Check if the authorization header is present
    if (!req.headers.authorization) {
      return res
        .status(403)
        .json({ message: "Invalid authorization or not authorized" });
    }
    // Extract the token from the authorization header (format: "Basic <token>")
    const authheader = req.headers.authorization.split(" ")[1];
    // Decode the base64 encoded token to get clientId and clientSecret
    const decoded = atob(authheader);
    const [clientId, clientSecret] = decoded.split(":");

    // Validate the provided clientId and clientSecret against environment variables
    if (
      clientId !== process.env.CLIENT_ID &&
      clientSecret !== process.env.CLIENT_SECRET
    ) {
      // Return an error if the client credentials are invalid
      return res.status(401).json({
        error: "INVALID_CLIENT",
        error_description: "Invalid client credentials.",
      });
    } else {
      // Generate a JWT token if the client credentials are valid
      const token = jwt.sign(
        {
          clientId,
          clientSecret,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" } // Token expires in 1 hour
      );
      // Return the generated token in the response
      return res.status(200).json({
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
      });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(500).json({
      error: error.message,
      message: "oops! something went wrong, please try again",
    });
  }
};

module.exports = {
  authApi,
};
