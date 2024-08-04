const {Router} = require("express");
const customersRoutes = require("./customers.routes");
const condominiumRoutes = require("./condominium.routes");
const propertiesRoutes = require("./properties.routes");
const employeesRoutes = require("./employees.routes");
const salesRoutes = require("./sales.routes")
const routes = Router();

routes.use("/properties", propertiesRoutes);
routes.use("/customers", customersRoutes);
routes.use("/condominium", condominiumRoutes);
routes.use("/properties", propertiesRoutes);
routes.use("/employees", employeesRoutes);
routes.use("/sales", salesRoutes)

module.exports = routes;