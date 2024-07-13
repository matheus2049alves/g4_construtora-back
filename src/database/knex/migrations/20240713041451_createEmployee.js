
exports.up = knex => knex.schema.createTable("employees", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("cpf").notNullable();
  table.enum("role", ["admin", "manager", "broker","internal"], {useNative : true, enumName : "roles"})
  .notNullable().default("broker");
  table.enum("marital_status", ["single", "married", "divorced", "Widower", "separate"], {useNative : true, enumName : "marital_status"})
  .notNullable().default("single");
  table.integer("num_children").notNullable();
  table.date('payment_date').notNullable();
  table.float("Workload").notNullable();
  table.float("salary").notNullable();
  table.integer("cresci");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("employees");
