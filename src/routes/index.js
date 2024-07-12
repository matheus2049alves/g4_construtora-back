const {Router} = require("express")
const propertiesRoutes = require("./property.routes")
const routes = Router()

routes.use("/properties", propertiesRoutes)

module.exports = routes