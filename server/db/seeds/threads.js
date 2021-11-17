
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('threads').del()
    .then(function () {
      // Inserts seed entries
      return knex('threads').insert([
        {id: 1},
        {id: 2}
      ]);
    });
};
