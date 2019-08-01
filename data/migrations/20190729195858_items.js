exports.up = function (knex) {
  return knex.schema.createTable("items", tbl => {
    tbl.increments();

    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.string("goal", 120).notNullable();
    tbl.boolean("complete").defaultTo(false);
    tbl.string("journalEntry", 220);
    tbl.string("photoUrl");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
