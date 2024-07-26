const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class EmployeesController{
  async create(request, response){
    const {
      name,  
      cpf,
      role,
      marital_status,
      num_children,
      payment_date,
      Workload,
      salary,
      cresci,

    } = request.body;

    const checkEmployeeExist = await knex("employees").where({cpf}).first();
    if (checkEmployeeExist){
      throw new AppError("employee already exists")
    };

    await knex("employees").insert({
      name,  
      cpf,
      role,
      marital_status,
      num_children,
      payment_date,
      Workload,
      salary,
      cresci,

    })

    return response.json({})
  }

}

module.exports = EmployeesController;