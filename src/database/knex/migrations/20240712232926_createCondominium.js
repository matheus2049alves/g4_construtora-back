
exports.up = knex => knex.schema.createTable("condominium", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("amenities");
  table.integer("count_properties").notNullable();
  table.float("tax").notNullable();
  table.integer("year_built").notNullable();
  table.text("status").notNullable();
  table.text("neighborhood").notNullable();
  table.text("street").notNullable();
  table.integer("number").notNullable();
  table.text("city").notNullable();
  table.text("state").notNullable();
  table.text("cep", 8).notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());


});


exports.down = knex => knex.schema.dropTable("condominium");
