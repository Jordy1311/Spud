
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, sender_id: 1, body: 'Hi there', sent_at: '16-11-2021 23:11:12' },
        {id: 2, sender_id: 2, body: 'Hey man', sent_at: '16-11-2021 23:12:12' },
        {id: 3, sender_id: 4, body: 'Man it is hot outside', sent_at: '16-11-2021 23:12:12' },
        {id: 4, sender_id: 1, body: 'sup', sent_at: '16-11-2021 23:38:12' },
      ]);
    });
};
