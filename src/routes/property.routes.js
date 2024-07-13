const {Router} = require("express")

const propertiesRoutes = Router()

propertiesRoutes.get("/", (request, response) => {
  const {name,  tipo} = request.body

  response.json({name, tipo})
})

module.exports = propertiesRoutes