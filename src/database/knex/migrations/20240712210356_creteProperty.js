
exports.up = knex => knex.schema.createTable("properties", table => {
  table.increments("id");
  table.integer("condominium_id").references("id").inTable("condominium");
  table.text("type").notNullable();
  table.float("price").notNullable();
  table.text("condition").notNullable();
  table.float("area").notNullable();
  table.integer("num_bedrooms").notNullable();
  table.integer("num_bathrooms").notNullable();
});


exports.down = knex => knex.schema.dropTable("properties");
