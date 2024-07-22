const {Router} = require("express")
const PropertiesController = require("../controllers/PropertiesController")

const propertiesRoutes = Router()
const propertiesController = new PropertiesController()

propertiesRoutes.post("/", propertiesController.crete)

module.exports = propertiesRoutes