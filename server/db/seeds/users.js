
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Maximilon Baddeley',
          email: 'max@gmail.com',
          avatar: 'max.png',
          password: 'password',
          created_at: '10-11-2021 09:01:47',
          last_login: '17-11-2021 11:11:11'
        },
        {
          id: 2,
          name: 'Jordan Cooper',
          email: 'jordan@gmail.com',
          avatar: 'jordan.png',
          password: 'password',
          created_at: '10-11-2021 11:30:53',
          last_login: '17-11-2021 23:00:12'
        },
        {
          id: 3,
          name: 'Hera The Cat',
          email: 'Hera@gmail.com',
          avatar: 'hera.png',
          password: 'password',
          created_at: '11-10-2021 23:15:00',
          last_login: '18-10-2021 12:84:00'
        },
        {
          id: 4,
          name: 'Batman',
          email: 'Batman@gmail.com',
          avatar: 'Batman.png',
          password: 'password',
          created_at: '01-10-2000 23:15:00',
          last_login: '16-10-2021 12:84:00'
        }
      ]);
    });
};
