const knex = require("knex");
const config = require("../knexfile.js");
const db = require("../data/dbConfig.js");

module.exports = {
  //   find,
  findById
  //   add,
  //   remove,
  //   update,
  //   findGoal,
  //   findGoalById,
  //   createItem, // will CREATE the item we need
  //   deleteItem,
  //   updateItem,
  //   getItemByUserId,
  //   getItemById,
  //   insert
};

function findById(id) {
  console.log("ID?: \n", id);
  return db("users")
    .where("username", id)
    .first();
}
