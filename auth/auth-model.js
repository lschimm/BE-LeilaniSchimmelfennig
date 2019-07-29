const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAllUsers
};

async function add(user) {
  const [id] = await db("users").insert(user);
  console.log(`here **************`, id);
  return findById(id);
}

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  //   console.log(`id here *******`, id);
  return db("users")
    .where({ id })

    .first();
}

function getAllUsers() {
  return db("users");
}
