const router = require("express").Router(); // check this
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./auth-model.js");
const secrets = require("../config/secret.js");

router.post("/register", (req, res) => {
  // posting register
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
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
        //produce token here
        const token = generateToken(user);

        res.status(200).json({
          message: `WQelcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
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
