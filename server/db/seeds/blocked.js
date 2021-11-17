
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blocked').del()
    .then(function () {
      // Inserts seed entries
      return knex('blocked').insert([
        {id: 1, user: 1, blocked_user: 3, blocked_at: '15-11-2021 00:00:00'},
      ]);
    });
};
