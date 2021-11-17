
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('thread_participants').del()
    .then(function () {
      // Inserts seed entries
      return knex('thread_participants').insert([
        {id: 1, thread_id: 1, participant_id: 1},
        {id: 2, thread_id: 1, participant_id: 2},
        {id: 3, thread_id: 2, participant_id: 2},
        {id: 4, thread_id: 2, participant_id: 4},
      ]);
    });
};
