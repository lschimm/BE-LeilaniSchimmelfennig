const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js"); // for register && login
const postRouter = require("../posts/post-router.js"); // posts/lists
const authenticate = require("../auth/restricted-middleware");
const userRouter = require("../users/users-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", authenticate, authRouter);
server.use("/api", postRouter);
// server.use("/api", userRouter);

server.get("/", (req, res) => {
  res.send("should be up!");
  //   res.status(200).json({ message: `server is up` });
});

module.exports = server;
