
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', table => {
    table.increments('id').primary()
    table.string('userName')
    table.string('hashPassword')
    table.string('fullName')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts')
};