const {Router} = require("express")
const PropertiesController = require("../controllers/PropertiesController")

const propertiesRoutes = Router()
const propertiesController = new PropertiesController()

propertiesRoutes.post("/", propertiesController.crete)
propertiesRoutes.delete("/:id", propertiesController.delete)
propertiesRoutes.get("/", propertiesController.index)
module.exports = propertiesRoutes