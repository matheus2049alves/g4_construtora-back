
const knex = require("../database/knex");
const AppError = require("../utils/AppError")
const {hash,compare} = require("bcrypt")

class CustomersController{
  async create(request, response){
    
 
      const {
        name,
        email,
        password,
        cpf,
        num_children,
        marital_status,
        income
      } = request.body;
      
      const hashPassword = await hash(password, 8)
      const checkCustomerExist = await knex("customers").where({email}).orWhere({cpf}).first()
  
      if(checkCustomerExist){
        throw new AppError("Esse email já esta em uso")
      }

      const [customer_id] = await knex("customers").insert({
        name,
        email,
        password : hashPassword,
        cpf,
        num_children,
        marital_status, 
        income
      })

      return response.status(201).json({
        id: customer_id,

      })
    
  }


  async update(request, response){
    const {
      name,
      email,
      cpf,
      num_children,
      marital_status,
      income,
      old_password,
      new_password
    } = request.body;
    const id = request.params.id

    const user = await knex("customers").where({id}).first()
    
    if(!user ){
      throw new AppError("User not found")
    }

    const newEmailExist = await knex("customers").where({email}).first()

    if(newEmailExist && newEmailExist.id !== user.id){
      throw new AppError("this email is already in use")
    }

    if (new_password && !old_password){

      throw new AppError("you must enter the old password to update the password")
    }else if(new_password && old_password){
      const checkOldPassword = compare(old_password, user.password)

      if(!checkOldPassword){
        throw new AppError("old password does not check")
      }
      user.password = await hash(new_password, 8)
    }

    await knex("customers").where({id}).update({
      name ,
      email ,
      cpf,
      num_children,
      marital_status,
      income,
      password : user.password,
      updated_at : knex.fn.now()
    })

    response.json({message : "user successfully updated"})
  }
}

module.exports = CustomersController