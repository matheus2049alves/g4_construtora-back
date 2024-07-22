const {Router} = require("express")
const customersRoutes = require("./customers.routes")
const condominiumRoutes = require("./condominium.routes")
const propertiesRoutes = require("./properties.routes")
const routes = Router()

routes.use("/properties", propertiesRoutes)
routes.use("/customers", customersRoutes)
routes.use("/condominium", condominiumRoutes)
routes.use("/properties", propertiesRoutes)
module.exports = routes