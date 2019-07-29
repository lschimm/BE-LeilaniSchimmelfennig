const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js"); // for register
// const usersRouter = require("../users/users-router.js"); // login

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);
// server.use("/api/login", usersRouter);

server.get("/", (req, res) => {
  res.send("should be up!");
});

module.exports = server;
