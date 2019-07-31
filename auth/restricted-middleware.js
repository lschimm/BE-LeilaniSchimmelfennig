const jwt = require("jsonwebtoken");

const secret = require("../config/secret.js");

const jwtKey =
  process.env.JWT_SECRET ||
  "this will be my secret, you guys, and it'll sit right in here.";

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;

//   // verifies the token
//   if (token) {
//     jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
//       if (err) {
//         res.status(401).json({ message: "invalid token" });
//       } else {
//         // valid token
//         // makes the token available to the rest of the api
//         req.jwtToken = decodedToken;
//         next();
//       }
//     });
//   } else {
//     res.status(400).json({ message: "no token provided" });
//   }
// };

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  console.log("Token: \n", token);

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      console.log("Is it working?\n");
      if (err) {
        return res.status(401).json(err);
      }
      console.log("Yes, it's working");
      // req.decoded = {
      //   token: token,
      //   username: decoded.username,
      //   id: decoded.subject
      // };
      req.decoded = decoded;
      console.log("req.decoded: \n", req.decoded);
      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

module.exports = {
  authenticate
};
