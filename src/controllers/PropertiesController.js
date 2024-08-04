const knex = require("../database/knex");
const AppError = require("../utils/AppError")
class PropertiesController{

  async crete(request, response){
    const { 
      condominium_id,
      type,
      price,
      condition,
      area,
      num_bedrooms,
      num_bathrooms
     
    } = request.body;

    const condominiumExist = await knex("condominium").where({id : condominium_id}).first()

    if(!condominiumExist){
      throw new AppError("condo does not exist")
    }

    await knex("properties").insert({
      condominium_id,
      type,
      price,
      condition,
      area,
      num_bedrooms,
      num_bathrooms
    })

    return response.json({
      message: "property created"
    })
  }
  async delete(request, response){
    const {id} = request.params;

    await knex("properties").where({id}).delete();

    return response.json({message: "property deleted"});
  }

  async index(request, response){
    const {price} = request.query;
    const properties = await knex("properties")
    .leftJoin('condominium','properties.condominium_id', 'condominium.id' )
    .select('properties.*', 'condominium.*')
    .where('properties.price', '<', price)
    
    return response.json(properties)
  }


}


module.exports = PropertiesController