
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reported').del()
    .then(function () {
      // Inserts seed entries
      return knex('reported').insert([
        {id: 1, user: 1, reported_user: 2, reported_at: '16-11-2021 23:11:12'},
      ]);
    });
};
