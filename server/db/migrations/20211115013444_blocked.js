
exports.up = function(knex) {
  return knex.schema.createTable('blocked', table => {
    table.increments('id').primary()
    table.integer('user')
    table.foreign('user').references('users.id')
    table.integer('blocked_user')
    table.foreign('blocked_user').references('users.id')
    table.datetime('blocked_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('blocked')
};
