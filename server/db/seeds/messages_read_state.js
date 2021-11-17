
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages_read_state').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages_read_state').insert([
        {id: 1, message_id: 2, user_id: 2, read_at:  '16-11-2021 23:11:12'},
      ]);
    });
};
