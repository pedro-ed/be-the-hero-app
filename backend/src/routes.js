const express = require('express')
const routes = express.Router()
// rotas
const OngController = require("./controllers/ongsControllers")
const incidentsContraller = require("./controllers/IncidentsControllers")
const ProfileController = require("./controllers/ProfileControllers")
const SessionController = require("./controllers/SessionControllers")
// LISTAR TODAS AS ONGS
routes.get('/ongs', OngController.index)
// CRIAR ONGS
routes.post('/ongs',OngController.create)
// LISTAR CASOS 
routes.get('/incidents', incidentsContraller.index)
// CRIAR CASOS 
routes.post('/incidents',incidentsContraller.create)
// DELETAR CASOS
routes.delete('/incidents/:id',incidentsContraller.delete)
//LISTAR CASOS DE UMA UNICA ONG
routes.get('/profile', ProfileController.index )
//LOGAR COM UMA ONG
routes.post('/session', SessionController.create )

module.exports = routes
