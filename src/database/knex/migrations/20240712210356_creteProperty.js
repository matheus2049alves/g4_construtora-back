
exports.up = knex => knex.schema.createTable("properties", table => {
  table.increments("id");
  table.integer("condominium_id").references("id").inTable("condominium").onDelete('CASCADE');
  table.text("type").notNullable();
  table.float("price").notNullable();
  table.text("condition").notNullable();
  table.float("area").notNullable();
  table.integer("num_bedrooms").notNullable();
  table.integer("num_bathrooms").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("properties");
