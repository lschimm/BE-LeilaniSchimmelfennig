const express = require("express");
const router = require("express").Router();

// const Usersdb = require("./users-model.js");
const Users = require("../auth/auth-model");

const { authenticate } = require("../auth/restricted-middleware.js");
// // will need to use this ^
// router.use(express.json());


router.get("/users", (req, res) => {
  Users.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/users/me', (req, res) => {
  const id = req.decoded.subject;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log();
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/users/:id/items', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.getItemById2(id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: `this id is wrong => ${id}.` });
    }
  } catch (error) {
    res.status(500).json({ message: `couldn't do it` });
  }
});


module.exports = router;