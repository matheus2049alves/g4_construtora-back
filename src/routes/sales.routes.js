const {Router} = require("express")
const SalesController = require("../controllers/SalesController")

const salesRoutes = Router()
const salesController = new SalesController()

salesRoutes.post("/", salesController.create)
salesRoutes.get("/", salesController.show)
module.exports = salesRoutes