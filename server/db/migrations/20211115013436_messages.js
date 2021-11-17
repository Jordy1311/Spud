
exports.up = function(knex) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.integer('sender_id')
    table.foreign('sender_id').references('users.id')
    table.string('body')
    table.datetime('sent_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages')
};
