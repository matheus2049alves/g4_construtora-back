const {Router} = require("express")
const propertiesRoutes = require("./property.routes")
const customersRoutes = require("./customers.routes")
const condominiumRoutes = require("./condominium.routes")
const routes = Router()

routes.use("/properties", propertiesRoutes)
routes.use("/customers", customersRoutes)
routes.use("/condominium", condominiumRoutes)
module.exports = routes