exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 12)
        .notNullable()
        .unique();
      tbl.string("password", 12).notNullable();
    })
    .createTable("items", tbl => {
      tbl.increments();

      tbl.string("goal", 120).notNullable();
      tbl.string("journalEntry", 120);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("items");
};
