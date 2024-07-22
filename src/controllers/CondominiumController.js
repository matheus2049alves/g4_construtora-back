const knex = require("../database/knex")


class CondominiumController{
  async create(request, response){
    const { name,
          amenities,
          count_properties,
          tax,
          year_built,
          status,
          neighborhood,
          street,
          number,
          city,
          state,
          cep
        } = request.body;

        await knex("condominium").insert({ 
          name,
          amenities,
          count_properties,
          tax,
          year_built,
          status,
          neighborhood,
          street,
          number,
          city,
          state,
          cep
        } )

        return response.json()
    
  }
}


module.exports = CondominiumController