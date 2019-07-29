module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "this will be my secret, you guys, and it'll sit right in here."
};
