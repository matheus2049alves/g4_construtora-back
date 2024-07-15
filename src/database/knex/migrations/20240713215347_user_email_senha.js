
exports.up = knex => knex.schema.table("customers", table => {
  table.text('email').unique().notNullable();
  table.text('password').notNullable();
});


exports.down = knex => knex.schema.table("customers", table => {
  table.dropColumn('email');
  table.dropColumn('password');
});