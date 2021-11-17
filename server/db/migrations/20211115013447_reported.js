
exports.up = function(knex) {
  return knex.schema.createTable('reported', table => {
    table.increments('id').primary()
    table.integer('user')
    table.foreign('user').references('users.id')
    table.integer('reported_user')
    table.foreign('reported_user').references('users.id')
    table.datetime('reported_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reported')
};
