const express = require("express");
const router = require("express").Router();

const Posts = require("./post-model.js");

router.use(express.json());

// will be at /goals

router.get("/", async (req, res) => {
  try {
    const goals = await Posts.find(req.query);
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: `error retreiving the goals` });
  }
});

module.exports = router;
