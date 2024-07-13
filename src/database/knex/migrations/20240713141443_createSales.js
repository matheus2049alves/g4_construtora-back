
exports.up = knex => knex.schema.createTable("sales", table => {
  table.increments("id");
  table.integer("property_id").references("id").inTable("properties");
  table.integer("broker_id").references("id").inTable("employees");
  table.integer("customer_id").references("id").inTable("customer");
  table.float("sale_amount").notNullable();
  table.date("date_sale").notNullable();
  table.integer("installments").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("sales");

