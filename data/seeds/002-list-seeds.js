exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          user_id: 13,
          goal: "goalHere1",
          complete: false,
          journalEntry: "entryHere1",
          photoUrl: "url1"
        },
        {
          user_id: 14,
          goal: "goalHere2",
          complete: false,
          journalEntry: "entryHere2",
          photoUrl: "url2"
        },
        {
          user_id: 15,
          goal: "goalHere3",
          complete: false,
          journalEntry: "entryHere3",
          photoUrl: "url3"
        },
        {
          user_id: 20,
          goal: "goalHere3",
          complete: false,
          journalEntry: "entryHere3",
          photoUrl: "url3"
        },
        {
          user_id: 21,
          goal: "goalHere3",
          complete: false,
          journalEntry: "entryHere3",
          photoUrl: "url3"
        },
        {
          user_id: 22,
          goal: "goalHere3",
          complete: false,
          journalEntry: "entryHere3",
          photoUrl: "url3"
        }
      ]);
    });
};
