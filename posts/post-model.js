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
  findGoalById
  // will need addGoal, addJournalEntry, addPhotoUrl perhaps?
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
