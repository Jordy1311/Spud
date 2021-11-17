
exports.up = function(knex) {
  return knex.schema.createTable('messages_read_state', table => {
    table.increments('id').primary()
    table.integer('message_id')
    table.foreign('message_id').references('messages.id')
    table.integer('user_id')
    table.foreign('user_id').references('users.id')
    table.datetime('read_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages_read_state')
};
