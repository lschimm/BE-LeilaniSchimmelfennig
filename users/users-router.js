// const express = require("express");
// const router = require("express").Router();

// const Usersdb = require("./users-model.js");
// const Userdb = require("../auth/auth-model");

// const { authenticate } = require("../auth/restricted-middleware.js");
// // will need to use this ^
// router.use(express.json());

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

// module.exports = router;
