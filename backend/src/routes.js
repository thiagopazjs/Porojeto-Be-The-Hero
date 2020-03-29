const express = require ('express')

const OngController = require ('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const profiletController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions',sessionController.create)


routes.get('/ongs', OngController.index);
routes.post ('/ongs', OngController.create);

routes.get('/profile', profiletController.index)


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;