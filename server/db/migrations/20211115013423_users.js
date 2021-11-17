
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.string('email')
    table.string('avatar')
    table.string('password')
    table.datetime('created_at')
    table.datetime('last_login').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
