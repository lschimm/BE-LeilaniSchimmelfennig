const router = require("express").Router(); // check this
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./auth-model.js");
const secrets = require("../config/secret.js");

// middleware
// const { authenticate } = require("./restricted-middleware.js");

// this
require("dotenv").config();
// the key

const jwtKey =
  process.env.JWT_SECRET ||
  "this will be my secret, you guys, and it'll sit right in here.";

// will be at /api/register && /api/login

router.post("/register", (req, res) => {
  // posting register
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(registered => {
      res.status(201).json(registered);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  // posting login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "incorrect logins. oops" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  // secret is elsewhere
  const options = {
    expiresIn: "10h"
  };
  return jwt.sign(payload, jwtKey, options);
}


module.exports = router;
