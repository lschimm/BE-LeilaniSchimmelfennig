const jwt = require("jsonwebtoken");

const secret = require("../config/secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // verifies the token
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "invalid token" });
      } else {
        // valid token
        // makes the token available to the rest of the api
        req.jwtToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "no token provided" });
  }
};
