const {Router} = require("express")
const propertiesRoutes = require("./property.routes")
const customersRoutes = require("./customers.routes")
const routes = Router()

routes.use("/properties", propertiesRoutes)
routes.use("/customers", customersRoutes)
module.exports = routes