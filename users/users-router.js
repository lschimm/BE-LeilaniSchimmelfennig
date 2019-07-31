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

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//need router.get("users/:id/items", (req, res) => {})

//need router.get("item/:id", (req, res) => {})

// testing this double get
// router.get("users/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await URLSearchParams.getItemById2(id);

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: `this id is wrong => ${id}.` });
//     }
//   } catch (error) {
//     res.status(500).json({ message: `couldn't do it` });
//   }
// });

// router.get("/users/:id", (req, res) => {
//   // const { id } = req.decoded.id;
//   // console.log("What's in ID?: \n", req.decoded.id);
//   // const results = Number.isInteger(req.decoded.id);
//   // console.log(results);
//   const { id } = req.params.id;
//   console.log(id);
//   Usersdb.findById(req.headers.id)
//     .then(res => {
//       //   if (res) {
//       res.status(200).json({ res });
//       //   } else {
//       //     res.status(404).json({ message: "User not found" });
//       //   }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error1", error });
//     });
// });

// // router.("/users", (req, res) => {
// //   Userdb.add(req.)
// //     .then(res => {
// //       res.status(200).json({ res });
// //     })
// //     .catch(error => {
// //       res.status(500).json({ message: error });
// //     });
// // });

module.exports = router;
