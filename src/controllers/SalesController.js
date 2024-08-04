const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class SalesController{
  async create(request, response){
    const {
      property_id,
      broker_id,
      customer_id,
      sale_amount,
      date_sale,
      installments,
      
    } = request.body;

    await knex("sales").insert({
      property_id,
      broker_id,
      customer_id,
      sale_amount,
      date_sale,
      installments,
      
    })
    
    return response.json({
      message: "sale created"
    })
  }

  async show(request, response){
    const sales = await knex("sales")
    .leftJoin("properties",'sales.property_id','properties.id')
    .select('sales.*', 'properties.*') //lembrar: alterar para as colunas desejadas
    return response.json(sales)
  }
}

module.exports = SalesController;