const {Router} = require("express")
const CustomersController = require("../controllers/CustomersController")

const customersRoutes = Router()
const customersController = new CustomersController()

customersRoutes.post("/", customersController.create )
customersRoutes.put("/:id", customersController.update)
module.exports = customersRoutes