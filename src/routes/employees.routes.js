const {Router} = require("express");
const EmployeesController = require("../controllers/EmployeesController");

const employeesRoutes = Router();
const employeesController = new EmployeesController();

employeesRoutes.post("/", employeesController.create);


module.exports = employeesRoutes;