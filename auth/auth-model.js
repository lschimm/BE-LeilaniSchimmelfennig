const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAllUsers,
  getItemById2
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getAllUsers() {
  return db("users");
}

//needs fixing

function getItemById2(id) {
  return db("users")
    .where({ id })
    .first()
    .then(user => {
      if (user) {
        return db("items")
          .where({ user_id: id })
          .then(items => {
            return { ...user, items };
          });
      } else {
        return null;
      }
    });
}
