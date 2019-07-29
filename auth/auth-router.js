const router = require("express").Router(); // check this
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("../config/secret.js");

router.post("/register", (req, res) => {
  // posting register
});

router.post("/login", (req, res) => {
  // posting login
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    email: user.email
  };
  const options = {
    expiresIn: "10h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
