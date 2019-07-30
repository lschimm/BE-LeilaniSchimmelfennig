const knex = require("knex");
const config = require("../knexfile.js");
const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findGoal,
  findGoalById,
  createItem,
  deleteItem,
  updateItem,
  getItemByUserId,
  getItemById
};

function find() {}
function findById(id) {
  return db("goals")
    .where({ id })
    .first();
  // console.log(`*******id*******`, id)
}
async function add(goal) {
  const [id] = await db("goals").insert(goal);
  return findById(id);
  //check this portion
  // console.log(`id ******* here`, id)
}
function remove(id) {
  return db("goals")
    .where({ id })
    .del();
}
function update(id, changes) {
  return db("goals")
    .where({ id })
    .update(changes, "*");
}
function findGoal() {}
function findGoalById() {}

// newer functions to test out. woo!
function getItemByUserId(user_id) {
  return db("items").where({ user_id });
}

function getItemById(id) {
  return db("items")
    .where({ id })
    .first();
}

async function createItem(item) {
  const [id] = await db("items")
    .insert(item)
    .returning("id");
  return id;
}

function updateItem(id, item) {
  return db("item")
    .where({ id })
    .update(item);
}

function deleteItem(id) {
  return db("item")
    .where({ id })
    .del();
}
