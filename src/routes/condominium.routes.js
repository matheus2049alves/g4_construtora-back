const {Router} = require("express")
const CondominiumController = require("../controllers/CondominiumController")

const condominiumRoutes = Router()
const condominiumController = new CondominiumController()

condominiumRoutes.post("/", condominiumController.create)

module.exports = condominiumRoutes