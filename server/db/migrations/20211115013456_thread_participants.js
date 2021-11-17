
exports.up = function(knex) {
  return knex.schema.createTable('thread_participants', table => {
    table.increments('id').primary()
    table.integer('thread_id')
    table.foreign('thread_id').references('threads.id')
    table.integer('participant_id').references('users.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('thread_participants')
};
