
exports.up = knex => knex.schema.createTable("customers", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("cpf").notNullable();
  table.integer("num_children").notNullable();
  table.enum("marital_status", ["single", "married", "divorced", "Widower", "separate"], {useNative : true, enumName : "marital_status"})
  .notNullable().default("single");
  table.float("income").notNullable();
  table.text('role').defaultTo('customer').notNullable()
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("customers");

