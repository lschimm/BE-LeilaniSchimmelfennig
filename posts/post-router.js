const express = require("express");
const router = require("express").Router();

const Posts = require("./post-model.js");

router.use(express.json());

// will be at /goals

router.get(
  "/goals/:id",
  /*requireToken*/ (req, res) => {
    //   Posts.getItemById
    // Posts.get()
    // .then()
    // needs async vvv
    //   try {
    //     const goals = await Posts.find(req.query);
    //     res.status(200).json(goals);
    //   } catch (error) {
    //     res.status(500).json({ message: `error retreiving the goals` });
    //   }
  }
);

router.post("/", (req, res) => {});

module.exports = router;
